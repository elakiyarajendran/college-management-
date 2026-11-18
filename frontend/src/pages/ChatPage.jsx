import React, { useState, useRef, useEffect } from 'react';
import {
  Send, Mic, MicOff, Plus, Trash2, Edit3, Search, ThumbsUp, ThumbsDown,
  Sparkles, Bot, MessageSquare, Check, X
} from 'lucide-react';
import { RimiAvatar } from '../assets/svgs';
import { sendMessageToRimi } from '../api/client';

export default function ChatPage() {
  const [conversations, setConversations] = useState([
    { id: "conv_1", title: "Classes & Timetable Today", date: "Today", messages: [
      { id: "m1", role: "assistant", content: "Hey Elakiya! 👋 I'm RIMI, your campus buddy from RM College. How can I help you today? 😊", time: "9:00 AM" },
      { id: "m2", role: "user", content: "What are my scheduled classes for today?", time: "9:01 AM" },
      { id: "m3", role: "assistant", content: "Here is your class schedule for today:\n• 9:00 AM - 10:00 AM: Data Structures (Lab 1)\n• 11:00 AM - 12:00 PM: Web Technologies (Lab 2)\n• 2:00 PM - 3:00 PM: Mathematics (Room 204)\n\nHave a wonderful and productive day! 🚀💜", time: "9:01 AM" }
    ]},
    { id: "conv_2", title: "Upcoming Semester Exams", date: "Yesterday", messages: [
      { id: "m4", role: "assistant", content: "Hi! How can I assist you with RM College today?", time: "2:15 PM" },
      { id: "m5", role: "user", content: "When do our semester exams start?", time: "2:16 PM" },
      { id: "m6", role: "assistant", content: "Your upcoming semester exams at RM College start on **28 Nov 2026** with **Database Management (CS303)** at 10:00 AM in Exam Hall 3, followed by Operating Systems on 02 Dec and Computer Networks on 06 Dec! 📚 Best of luck!", time: "2:16 PM" }
    ]}
  ]);

  const [activeConvId, setActiveConvId] = useState("conv_1");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [historySearch, setHistorySearch] = useState("");
  const [editingConvId, setEditingConvId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const activeConv = conversations.find(c => c.id === activeConvId) || conversations[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConv?.messages, loading]);

  // Voice speech recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang = 'en-IN';

      recog.onresult = (e) => {
        setInput(e.results[0][0].transcript);
        setIsListening(false);
      };
      recog.onerror = () => setIsListening(false);
      recog.onend = () => setIsListening(false);

      recognitionRef.current = recog;
    }
  }, []);

  const toggleSpeech = () => {
    if (!recognitionRef.current) {
      alert("Voice input is not supported in this browser. Please use Chrome or Edge.");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleNewChat = () => {
    const newId = `conv_${Date.now()}`;
    const newConv = {
      id: newId,
      title: "New Conversation",
      date: "Just now",
      messages: [
        {
          id: `m_${Date.now()}`,
          role: "assistant",
          content: "Hey there! 👋 I'm RIMI, your campus buddy from RM College. Ask me anything about courses, faculty, library timings, fees, or exam schedules! 😊",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    };
    setConversations([newConv, ...conversations]);
    setActiveConvId(newId);
  };

  const handleDeleteConv = (convId, e) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this conversation?")) {
      const updated = conversations.filter(c => c.id !== convId);
      setConversations(updated);
      if (activeConvId === convId && updated.length > 0) {
        setActiveConvId(updated[0].id);
      }
    }
  };

  const handleStartRename = (conv, e) => {
    e.stopPropagation();
    setEditingConvId(conv.id);
    setEditTitle(conv.title);
  };

  const handleSaveRename = (convId) => {
    if (editTitle.trim()) {
      setConversations(conversations.map(c => c.id === convId ? { ...c, title: editTitle.trim() } : c));
    }
    setEditingConvId(null);
  };

  const handleSend = async (customText) => {
    const query = (customText || input).trim();
    if (!query || loading) return;

    const userMsg = {
      id: `m_${Date.now()}`,
      role: "user",
      content: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Update conversation with user message
    const updatedMessages = [...(activeConv?.messages || []), userMsg];
    let newTitle = activeConv.title;
    if (activeConv.title === "New Conversation") {
      newTitle = query.slice(0, 32) + (query.length > 32 ? "..." : "");
    }

    setConversations(conversations.map(c =>
      c.id === activeConvId ? { ...c, title: newTitle, messages: updatedMessages } : c
    ));

    setInput("");
    setLoading(true);

    try {
      const res = await sendMessageToRimi(query, activeConvId, updatedMessages);
      const asstMsg = {
        id: res.messageId || `asst_${Date.now()}`,
        role: "assistant",
        content: res.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        feedback: null
      };

      setConversations(prev => prev.map(c =>
        c.id === activeConvId ? { ...c, messages: [...updatedMessages, asstMsg] } : c
      ));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const filteredConversations = conversations.filter(c =>
    c.title.toLowerCase().includes(historySearch.toLowerCase())
  );

  return (
    <div style={{
      display: 'flex',
      height: 'calc(100vh - 70px)',
      background: '#f8fafc',
      overflow: 'hidden'
    }}>
      {/* Conversation History Sidebar */}
      <div style={{
        width: '300px',
        background: '#ffffff',
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}>
        {/* New Chat Button */}
        <div style={{ padding: '16px' }}>
          <button
            onClick={handleNewChat}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              border: 'none',
              padding: '11px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(139, 92, 246, 0.35)'
            }}
          >
            <Plus size={16} />
            <span>New Campus Chat</span>
          </button>

          {/* Search History */}
          <div style={{ position: 'relative', marginTop: '12px' }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search chat history..."
              value={historySearch}
              onChange={(e) => setHistorySearch(e.target.value)}
              style={{
                width: '100%',
                padding: '7px 10px 7px 30px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '12px',
                outline: 'none',
                background: '#f8fafc'
              }}
            />
          </div>
        </div>

        {/* History List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 10px 16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', padding: '8px', letterSpacing: '0.5px' }}>
            Recent Conversations
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {filteredConversations.map((conv) => {
              const isActive = conv.id === activeConvId;
              const isEditing = editingConvId === conv.id;

              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveConvId(conv.id)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: isActive ? '#ede9fe' : 'transparent',
                    color: isActive ? '#6d28d9' : '#334155',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    transition: 'all 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                    <MessageSquare size={15} style={{ flexShrink: 0, color: isActive ? '#7c3aed' : '#94a3b8' }} />
                    {isEditing ? (
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveRename(conv.id)}
                        autoFocus
                        style={{
                          fontSize: '12.5px',
                          padding: '2px 4px',
                          borderRadius: '4px',
                          border: '1px solid #7c3aed',
                          outline: 'none'
                        }}
                      />
                    ) : (
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '170px' }}>
                        {conv.title}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {isEditing ? (
                      <button
                        onClick={(e) => { e.stopPropagation(); handleSaveRename(conv.id); }}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#16a34a' }}
                      >
                        <Check size={14} />
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={(e) => handleStartRename(conv, e)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                          title="Rename"
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={(e) => handleDeleteConv(conv.id, e)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                          title="Delete"
                        >
                          <Trash2 size={13} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Chat Panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', background: '#ffffff' }}>
        {/* Chat Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <RimiAvatar size={42} waving={true} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 800, color: '#1e1b4b' }}>
                RIMI • Campus AI Assistant
              </div>
              <div style={{ fontSize: '11.5px', color: '#16a34a', fontWeight: 600 }}>
                ● Online • RM College Knowledge Base Active
              </div>
            </div>
          </div>

          <div style={{ fontSize: '12px', color: '#64748b' }}>
            Model: <strong>gemini-3.5-flash</strong> (Secured)
          </div>
        </div>

        {/* Message Stream */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          background: '#f8fafc'
        }}>
          {activeConv?.messages?.map((m) => (
            <div
              key={m.id}
              style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '75%',
                display: 'flex',
                gap: '12px'
              }}
            >
              {m.role === 'assistant' && (
                <div style={{ marginTop: '4px' }}>
                  <RimiAvatar size={34} />
                </div>
              )}

              <div>
                <div style={{
                  padding: '14px 18px',
                  borderRadius: '18px',
                  borderBottomLeftRadius: m.role === 'assistant' ? '4px' : '18px',
                  borderBottomRightRadius: m.role === 'user' ? '4px' : '18px',
                  background: m.role === 'user' ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : '#ffffff',
                  color: m.role === 'user' ? '#ffffff' : '#1e293b',
                  fontSize: '13.5px',
                  lineHeight: 1.6,
                  boxShadow: m.role === 'user' ? '0 4px 14px rgba(139, 92, 246, 0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
                  border: m.role === 'assistant' ? '1px solid #e2e8f0' : 'none',
                  whiteSpace: 'pre-line'
                }}>
                  {m.content}
                </div>
                <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: '4px', textAlign: m.role === 'user' ? 'right' : 'left' }}>
                  {m.time}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ alignSelf: 'flex-start', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <RimiAvatar size={34} />
              <div style={{ background: '#ffffff', padding: '12px 18px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
                <div className="typing-dots">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0', background: '#ffffff' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '24px',
              padding: '6px 8px 6px 18px'
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask RIMI anything about RM College (courses, fees, exams, library, HODs)..."
              disabled={loading}
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '13.5px',
                color: '#1e293b'
              }}
            />

            <button
              type="button"
              onClick={toggleSpeech}
              className={`mic-btn ${isListening ? 'active' : ''}`}
              title="Voice Input"
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>

            <button
              type="submit"
              disabled={!input.trim() || loading}
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(139, 92, 246, 0.4)'
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
