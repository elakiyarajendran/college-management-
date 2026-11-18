import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Minus, Send, Mic, MicOff, ThumbsUp, ThumbsDown, Sparkles, RefreshCw } from 'lucide-react';
import { RimiAvatar } from '../assets/svgs';
import { sendMessageToRimi } from '../api/client';

export default function RimiWidget({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      id: "init_1",
      role: "assistant",
      content: "Hey! 👋 I'm RIMI, your campus buddy from RM College. What can I help you with today? 😊",
      time: "Just now"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const quickPills = [
    { label: "🎓 My Attendance", prompt: "What is my current attendance?" },
    { label: "📅 Next Exam", prompt: "When is my next upcoming exam?" },
    { label: "🕒 Timetable", prompt: "What are my scheduled classes for today?" },
    { label: "🏛️ College Info", prompt: "Tell me about RM College of Arts and Science accreditation and leadership." },
    { label: "📝 Assignments", prompt: "Are there any pending submissions or internal test schedules?" },
    { label: "📢 Announcements", prompt: "What are the latest college notices and fest updates?" },
    { label: "💰 Fee Structure", prompt: "What is the fee payment deadline and structure?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Voice speech recognition setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang = 'en-IN';

      recog.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        setInput(transcript);
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

  const handleSend = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg = {
      id: `usr_${Date.now()}`,
      role: "user",
      content: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await sendMessageToRimi(query, conversationId, messages);
      if (res.conversationId) setConversationId(res.conversationId);

      const asstMsg = {
        id: res.messageId || `asst_${Date.now()}`,
        role: "assistant",
        content: res.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        feedback: null
      };

      setMessages((prev) => [...prev, asstMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `err_${Date.now()}`,
          role: "assistant",
          content: "Oops! I hit a quick snag connecting to my campus brain. Please try asking again! 💜",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = (msgId, type) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, feedback: type } : m))
    );
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="rimi-floating-trigger"
          title="Chat with RIMI - Your Campus Buddy"
          aria-label="Open RIMI Campus Buddy"
        >
          <div className="pulse-ring" />
          <MessageSquare size={28} />
        </button>
      )}

      {/* RIMI Chat Box */}
      {isOpen && (
        <div className="rimi-chat-box" style={{ height: isMinimized ? '60px' : '560px' }}>
          {/* Header */}
          <div className="rimi-chat-header">
            <div className="rimi-header-info">
              <RimiAvatar size={34} waving={true} />
              <div>
                <div className="rimi-header-title">
                  RIMI
                  <span style={{ fontSize: "11px", fontWeight: 500, opacity: 0.85 }}>• Campus Buddy</span>
                </div>
                <div className="rimi-online-status">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
                  Online
                </div>
              </div>
            </div>

            <div className="header-controls">
              <button
                className="header-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
              >
                <Minus size={16} />
              </button>
              <button
                className="header-btn"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
          {!isMinimized && (
            <>
              <div className="rimi-chat-body">
                {/* Robot Welcome Centerpiece */}
                {messages.length === 1 && (
                  <div style={{ textAlign: "center", padding: "12px 6px" }}>
                    <RimiAvatar size={72} waving={true} className="mx-auto" />
                    <p style={{ fontSize: "12px", color: "#64748b", marginTop: "6px", fontWeight: 500 }}>
                      Powered by RM College Knowledge Base
                    </p>
                  </div>
                )}

                {/* Messages */}
                {messages.map((m) => (
                  <div key={m.id} className={`chat-bubble ${m.role}`}>
                    <div style={{ whiteSpace: "pre-line" }}>{m.content}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}>
                      <span style={{ fontSize: "10px", opacity: 0.7 }}>{m.time}</span>
                      {m.role === "assistant" && (
                        <div style={{ display: "flex", gap: "6px" }}>
                          <button
                            onClick={() => handleFeedback(m.id, 'thumbs_up')}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: m.feedback === 'thumbs_up' ? "#10b981" : "#94a3b8"
                            }}
                            title="Helpful"
                          >
                            <ThumbsUp size={11} />
                          </button>
                          <button
                            onClick={() => handleFeedback(m.id, 'thumbs_down')}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: m.feedback === 'thumbs_down' ? "#ef4444" : "#94a3b8"
                            }}
                            title="Not helpful"
                          >
                            <ThumbsDown size={11} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {loading && (
                  <div className="chat-bubble assistant">
                    <div className="typing-dots">
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                    </div>
                  </div>
                )}

                {/* Quick Action Chips */}
                {messages.length <= 3 && !loading && (
                  <div style={{ marginTop: "8px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#64748b", marginBottom: "6px" }}>
                      Suggested Questions:
                    </div>
                    <div className="quick-chips-wrapper">
                      {quickPills.map((pill, idx) => (
                        <button
                          key={idx}
                          className="chip-btn"
                          onClick={() => handleSend(pill.prompt)}
                        >
                          {pill.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Bar */}
              <div className="rimi-chat-footer">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="chat-input-bar"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="chat-input-field"
                    disabled={loading}
                  />

                  <button
                    type="button"
                    onClick={toggleSpeech}
                    className={`mic-btn ${isListening ? 'active' : ''}`}
                    title={isListening ? "Listening... click to stop" : "Speak your question"}
                  >
                    {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>

                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="send-msg-btn"
                    title="Send message"
                  >
                    <Send size={15} />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
