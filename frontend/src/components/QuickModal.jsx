import React, { useState } from 'react';
import { X, BookOpen, Library, Receipt, Download, CheckCircle, CreditCard } from 'lucide-react';

export default function QuickModal({ type, onClose }) {
  const [feePaid, setFeePaid] = useState(false);

  if (!type) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 120,
      padding: '16px'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '560px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        padding: '28px'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: 'none',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#64748b'
          }}
        >
          <X size={18} />
        </button>

        {/* 1. Syllabus Modal */}
        {type === 'syllabus' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: '#1e1b4b' }}>
                  Course Syllabus • Semester V
                </h3>
                <p style={{ fontSize: '12px', color: '#64748b' }}>B.Sc. Computer Science (Regulations 2024)</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              {[
                { code: "CS301", title: "Data Structures & Algorithms", units: "5 Units", hours: "45 Hrs" },
                { code: "CS302", title: "Web Technologies (React & Node)", units: "5 Units", hours: "45 Hrs" },
                { code: "CS303", title: "Database Management Systems", units: "5 Units", hours: "45 Hrs" },
                { code: "CS304", title: "Operating Systems Architecture", units: "5 Units", hours: "45 Hrs" },
                { code: "MA301", title: "Discrete Mathematics & Graph Theory", units: "5 Units", hours: "60 Hrs" }
              ].map((sub, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '10px' }}>
                  <div>
                    <span style={{ fontWeight: 700, color: '#2563eb', marginRight: '8px' }}>{sub.code}</span>
                    <strong style={{ color: '#1e293b' }}>{sub.title}</strong>
                  </div>
                  <button
                    onClick={() => alert(`Downloading syllabus PDF for ${sub.title}...`)}
                    style={{ background: 'none', border: 'none', color: '#6366f1', cursor: 'pointer', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Download size={14} /> PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Library Modal */}
        {type === 'library' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: '#fefce8', color: '#ca8a04', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Library size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: '#1e1b4b' }}>
                  Dr. APJ Abdul Kalam Central Library
                </h3>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Digital Catalog & Reading Room Access</p>
              </div>
            </div>

            <div style={{ background: '#fef3c7', padding: '12px 16px', borderRadius: '12px', marginBottom: '16px', fontSize: '12.5px', color: '#92400e' }}>
              📢 <strong>Exam Special:</strong> Library hours extended till <strong>9:30 PM</strong> until Dec 15th!
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '12px' }}>
                <div style={{ fontWeight: 700, color: '#1e1b4b' }}>Currently Borrowed Books (2 of 4)</div>
                <ul style={{ marginTop: '6px', paddingLeft: '18px', color: '#475569', lineHeight: 1.6 }}>
                  <li><em>Introduction to Algorithms</em> - Cormen, Leiserson (Due: 30 Nov 2026)</li>
                  <li><em>Database System Concepts</em> - Silberschatz (Due: 05 Dec 2026)</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => alert("Connecting to IEEE Xplore Institutional Proxy...")}
                  style={{ flex: 1, padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '12.5px', cursor: 'pointer' }}
                >
                  IEEE Digital Library
                </button>
                <button
                  onClick={() => alert("Connecting to Springer Nature / Delnet Portal...")}
                  style={{ flex: 1, padding: '10px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '12.5px', cursor: 'pointer' }}
                >
                  Springer e-Journals
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. Fees Modal */}
        {type === 'fees' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Receipt size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: '#1e1b4b' }}>
                  Fee Structure & Tuition Dues
                </h3>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Even Semester 2026-2027 • B.Sc. Computer Science</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Tuition & Lab Fee:</span>
                <strong>₹22,000</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Central Library & Digital Consortium:</span>
                <strong>₹1,500</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Special Examination Fee:</span>
                <strong>₹1,200</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderTop: '2px solid #e2e8f0', fontSize: '15px' }}>
                <strong>Total Amount Payable:</strong>
                <strong style={{ color: '#7c3aed' }}>₹24,700</strong>
              </div>
            </div>

            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px' }}>
              📅 Due Date: <strong>10 December 2026</strong> (Grace Period ends 20 Dec 2026).
            </div>

            {feePaid ? (
              <div style={{ background: '#dcfce7', color: '#15803d', padding: '14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}>
                <CheckCircle size={20} />
                <span>Payment Successful! Receipt #RMCAS-2026-9810 has been issued.</span>
              </div>
            ) : (
              <button
                onClick={() => setFeePaid(true)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '13px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)'
                }}
              >
                <CreditCard size={18} />
                <span>Pay ₹24,700 Online (UPI / NetBanking)</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
