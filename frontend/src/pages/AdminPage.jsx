import React, { useState } from 'react';
import { Database, Plus, Trash2, Edit2, BarChart2, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function AdminPage() {
  const [faqs, setFaqs] = useState([
    { id: 1, q: "What are the Central Library working hours?", a: "Dr. APJ Abdul Kalam Central Library operates from 8:00 AM to 8:00 PM on weekdays, extended to 9:30 PM during semester exam periods." },
    { id: 2, q: "What is the minimum attendance requirement for semester exams?", a: "A minimum 75% aggregate attendance is mandatory according to University and RM College regulations." },
    { id: 3, q: "How can I contact Computer Science HOD Dr. K. Ranganathan?", a: "His office is in Room T-302, Turing Tech Block, 3rd Floor, and his official email is hod.cs@rmcas.edu.in." },
    { id: 4, q: "When is the even semester fee payment deadline?", a: "Even semester fees must be cleared by December 10, 2026 (grace period up to December 20, 2026)." }
  ]);

  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddFaq = (e) => {
    e.preventDefault();
    if (!newQ.trim() || !newA.trim()) return;
    setFaqs([...faqs, { id: Date.now(), q: newQ.trim(), a: newA.trim() }]);
    setNewQ("");
    setNewA("");
    setShowAddModal(false);
  };

  const handleDelete = (id) => {
    setFaqs(faqs.filter(f => f.id !== id));
  };

  return (
    <div className="dashboard-content">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
            College Knowledge Base & AI Chatbot Control Center
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            Manage verified RM College ground truth data, FAQs, system prompts, and monitor student query analytics.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}
        >
          <Plus size={16} />
          <span>Add Knowledge Base Entry</span>
        </button>
      </div>

      {/* Analytics KPI Row per SRS FR-M3 */}
      <div className="stats-cards-row">
        <div className="stat-card">
          <div style={{ width: 56, height: 56, borderRadius: '14px', background: '#ede9fe', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BarChart2 size={28} />
          </div>
          <div>
            <div className="stat-info-title">Queries Processed Today</div>
            <div className="stat-info-val">342</div>
            <div className="stat-info-delta">99.4% Grounded in KB</div>
          </div>
        </div>

        <div className="stat-card">
          <div style={{ width: 56, height: 56, borderRadius: '14px', background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={28} />
          </div>
          <div>
            <div className="stat-info-title">Guardrail Deflections</div>
            <div className="stat-info-val">28</div>
            <div className="stat-info-delta">Non-college queries politely declined</div>
          </div>
        </div>

        <div className="stat-card">
          <div style={{ width: 56, height: 56, borderRadius: '14px', background: '#e0e7ff', color: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Database size={28} />
          </div>
          <div>
            <div className="stat-info-title">Model Core Engine</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#1e1b4b' }}>
              gemini-3.5-flash
            </div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              Active Server-Side API Key Verified
            </div>
          </div>
        </div>
      </div>

      {/* Knowledge Base Entries List */}
      <div className="card-box">
        <h3 className="card-heading" style={{ marginBottom: '16px' }}>Verified Knowledge Base & FAQ Records</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq) => (
            <div key={faq.id} style={{
              background: '#f8fafc',
              border: '1px solid #eef2f6',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#7c3aed' }}>Q:</span> {faq.q}
                </div>
                <div style={{ fontSize: '13px', color: '#475569', marginTop: '6px', lineHeight: 1.5 }}>
                  <span style={{ color: '#059669', fontWeight: 700 }}>A:</span> {faq.a}
                </div>
              </div>

              <button
                onClick={() => handleDelete(faq.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ef4444',
                  cursor: 'pointer',
                  padding: '6px'
                }}
                title="Delete Entry"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 110,
          padding: '16px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '520px',
            padding: '28px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>
              Add Verified College Fact / FAQ
            </h3>

            <form onSubmit={handleAddFaq} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Question / Fact Heading
                </label>
                <input
                  type="text"
                  value={newQ}
                  onChange={(e) => setNewQ(e.target.value)}
                  placeholder="e.g. What is the hostel curfew time?"
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Verified Answer / Detail (Used by RIMI)
                </label>
                <textarea
                  value={newA}
                  onChange={(e) => setNewA(e.target.value)}
                  rows={4}
                  placeholder="Provide precise grounded answer with room numbers, emails, timings, or policies."
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={{
                    padding: '9px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#f8fafc',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '9px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#7c3aed',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 700
                  }}
                >
                  Save to Knowledge Base
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
