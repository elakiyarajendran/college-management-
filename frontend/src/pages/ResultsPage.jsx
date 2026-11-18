import React from 'react';
import { Award, Download, CheckCircle, BarChart3, TrendingUp } from 'lucide-react';
import { TrophyGold } from '../assets/svgs';

export default function ResultsPage() {
  const semesters = [
    { sem: "Semester 1", gpa: 8.20, credits: 22, result: "Passed - First Class with Distinction" },
    { sem: "Semester 2", gpa: 8.45, credits: 22, result: "Passed - First Class with Distinction" },
    { sem: "Semester 3", gpa: 8.60, credits: 24, result: "Passed - First Class with Distinction" },
    { sem: "Semester 4", gpa: 8.90, credits: 24, result: "Passed - First Class with Distinction" },
    { sem: "Semester 5 (Current)", gpa: 8.75, credits: 20, result: "Appearing (Internals Completed)" }
  ];

  const recentGrades = [
    { code: "CS201", subject: "Object Oriented Programming Java", credits: 4, internal: 24, external: 68, total: 92, grade: "O (Outstanding)" },
    { code: "CS202", subject: "Computer Architecture & Microprocessors", credits: 4, internal: 22, external: 64, total: 86, grade: "A+ (Excellent)" },
    { code: "MA201", subject: "Numerical Methods & Probability", credits: 4, internal: 23, external: 65, total: 88, grade: "A+ (Excellent)" },
    { code: "CS203", subject: "System Software & Compilers", credits: 3, internal: 21, external: 62, total: 83, grade: "A+ (Excellent)" },
    { code: "CS204P", subject: "Java Programming Laboratory", credits: 2, internal: 38, external: 58, total: 96, grade: "O (Outstanding)" }
  ];

  return (
    <div className="dashboard-content">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
            Academic Performance & Grade Cards
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            Office of the Controller of Examinations • RM College of Arts & Science
          </p>
        </div>

        <button
          onClick={() => alert("Generating verified Consolidated Grade Sheet PDF for Elakiya Rajendran (Reg: 25BCA019)...")}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
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
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
          }}
        >
          <Download size={16} />
          <span>Download Grade Sheet (PDF)</span>
        </button>
      </div>

      {/* Hero CGPA Highlights */}
      <div className="stats-cards-row">
        <div className="stat-card">
          <div style={{
            width: 76,
            height: 76,
            borderRadius: '50%',
            background: '#fef08a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <TrophyGold size={46} />
          </div>
          <div>
            <div className="stat-info-title">Cumulative Grade (CGPA)</div>
            <div className="stat-info-val">8.75</div>
            <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>
              First Class with Distinction
            </span>
          </div>
        </div>

        <div className="stat-card">
          <div style={{
            width: 76,
            height: 76,
            borderRadius: '50%',
            background: '#e0e7ff',
            color: '#4338ca',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '22px'
          }}>
            112
          </div>
          <div>
            <div className="stat-info-title">Earned Credits</div>
            <div className="stat-info-val">112 / 140</div>
            <div className="stat-info-delta">80% of Degree Completed</div>
          </div>
        </div>
      </div>

      {/* Semester History Table */}
      <div className="card-box">
        <h3 className="card-heading" style={{ marginBottom: '16px' }}>Semester Grade Point Summary (SGPA)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#475569', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px 14px' }}>Semester</th>
                <th style={{ padding: '12px 14px' }}>Credits Registered</th>
                <th style={{ padding: '12px 14px' }}>Credits Earned</th>
                <th style={{ padding: '12px 14px' }}>SGPA</th>
                <th style={{ padding: '12px 14px' }}>Classification</th>
              </tr>
            </thead>
            <tbody>
              {semesters.map((s, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px', fontWeight: 700, color: '#1e1b4b' }}>{s.sem}</td>
                  <td style={{ padding: '14px' }}>{s.credits}</td>
                  <td style={{ padding: '14px', fontWeight: 600, color: '#15803d' }}>{s.credits}</td>
                  <td style={{ padding: '14px', fontWeight: 800, color: '#7c3aed' }}>{s.gpa.toFixed(2)}</td>
                  <td style={{ padding: '14px', color: '#475569' }}>{s.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Completed Semester Course Breakdown */}
      <div className="card-box">
        <h3 className="card-heading" style={{ marginBottom: '16px' }}>Semester IV Detailed Mark Breakdown</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#475569', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px 14px' }}>Course Code</th>
                <th style={{ padding: '12px 14px' }}>Subject Name</th>
                <th style={{ padding: '12px 14px' }}>Credits</th>
                <th style={{ padding: '12px 14px' }}>Internal (25)</th>
                <th style={{ padding: '12px 14px' }}>End Sem (75)</th>
                <th style={{ padding: '12px 14px' }}>Total (100)</th>
                <th style={{ padding: '12px 14px' }}>Letter Grade</th>
              </tr>
            </thead>
            <tbody>
              {recentGrades.map((g, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px', fontWeight: 700, color: '#2563eb' }}>{g.code}</td>
                  <td style={{ padding: '14px', fontWeight: 700, color: '#1e293b' }}>{g.subject}</td>
                  <td style={{ padding: '14px' }}>{g.credits}</td>
                  <td style={{ padding: '14px' }}>{g.internal}</td>
                  <td style={{ padding: '14px' }}>{g.external}</td>
                  <td style={{ padding: '14px', fontWeight: 700 }}>{g.total}</td>
                  <td style={{ padding: '14px', fontWeight: 700, color: '#059669' }}>{g.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
