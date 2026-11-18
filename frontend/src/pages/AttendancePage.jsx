import React from 'react';
import { Clock, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

export default function AttendancePage({ onOpenRimi }) {
  const subjects = [
    { code: "CS301", name: "Data Structures & Algorithms", attended: 47, total: 50, percentage: 94, status: "Safe" },
    { code: "CS302", name: "Web Technologies", attended: 45, total: 50, percentage: 90, status: "Safe" },
    { code: "CS303", name: "Database Management Systems", attended: 46, total: 50, percentage: 92, status: "Safe" },
    { code: "CS304", name: "Operating Systems", attended: 48, total: 50, percentage: 96, status: "Safe" },
    { code: "MA301", name: "Discrete Mathematics", attended: 44, total: 50, percentage: 88, status: "Safe" }
  ];

  const overallPercentage = 92;

  return (
    <div className="dashboard-content">
      {/* Header */}
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
          Attendance Tracking & Eligibility
        </h2>
        <p style={{ fontSize: '13px', color: '#64748b' }}>
          Real-time biometric & period-wise attendance records for Odd Semester 2026.
        </p>
      </div>

      {/* Hero Overview Cards */}
      <div className="stats-cards-row">
        {/* Overall Percentage */}
        <div className="stat-card">
          <div style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#15803d',
            fontWeight: 800,
            fontSize: '22px'
          }}>
            {overallPercentage}%
          </div>
          <div>
            <div className="stat-info-title">Aggregate Attendance</div>
            <div className="stat-info-val">92%</div>
            <div className="stat-info-delta">+2% ↑ Since Last Week</div>
          </div>
        </div>

        {/* Exam Eligibility */}
        <div className="stat-card">
          <div style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7c3aed'
          }}>
            <ShieldCheck size={36} />
          </div>
          <div>
            <div className="stat-info-title">University Eligibility</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#15803d' }}>
              Qualified for Exams
            </div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              75% Required • Current Margin: +17%
            </div>
          </div>
        </div>

        {/* Safe Margin Calculator Card */}
        <div className="stat-card">
          <div style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4338ca',
            fontWeight: 800,
            fontSize: '20px'
          }}>
            11
          </div>
          <div>
            <div className="stat-info-title">Bunk Cushion / Buffer</div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#1e293b' }}>
              11 Classes Safe to Miss
            </div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              Without dropping below 75%
            </div>
          </div>
        </div>
      </div>

      {/* Subject-Wise Breakdown Table Card */}
      <div className="card-box">
        <h3 className="card-heading" style={{ marginBottom: '16px' }}>Subject-Wise Attendance Breakdown</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {subjects.map((sub) => (
            <div key={sub.code} style={{
              background: '#f8fafc',
              border: '1px solid #eef2f6',
              borderRadius: '14px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#6366f1', background: '#e0e7ff', padding: '2px 6px', borderRadius: '4px', marginRight: '6px' }}>
                    {sub.code}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>
                    {sub.name}
                  </span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: sub.percentage >= 75 ? '#15803d' : '#b91c1c' }}>
                  {sub.attended} / {sub.total} Classes ({sub.percentage}%)
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${sub.percentage}%`,
                  height: '100%',
                  background: sub.percentage >= 90 ? 'linear-gradient(90deg, #10b981, #059669)' : 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                  borderRadius: '4px',
                  transition: 'width 0.6s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Guidelines Alert Box */}
      <div style={{
        background: '#fffbeb',
        border: '1px solid #fef3c7',
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px'
      }}>
        <AlertTriangle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#92400e', marginBottom: '4px' }}>
            RM College Attendance Policy & Regulations (University Standard)
          </h4>
          <ul style={{ fontSize: '12.5px', color: '#78350f', paddingLeft: '18px', lineHeight: 1.6 }}>
            <li><strong>75% and Above:</strong> Normal hall ticket issuance and exam eligibility.</li>
            <li><strong>65% to 74.9%:</strong> Condonation of attendance is granted only on valid medical certificate submitted within 3 working days to the Principal’s Office.</li>
            <li><strong>Below 65%:</strong> Student is detained and not allowed to appear for the semester exams; courses must be repeated in the subsequent year.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
