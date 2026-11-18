import React, { useState } from 'react';
import { Bell, Calendar, Tag, Search, CheckCircle, Sparkles } from 'lucide-react';

export default function AnnouncementsPage({ onOpenRimi }) {
  const [filter, setFilter] = useState("all");
  const [registeredFest, setRegisteredFest] = useState(false);

  const notices = [
    {
      id: 1,
      title: "College Fest 2026 - Registrations Open! 🎉",
      date: "20 Nov 2026",
      tag: "Events",
      badgeColor: "#ec4899",
      body: "The annual inter-collegiate mega festival 'Tarang 2026' is scheduled from December 18 to December 20, 2026. Events include Choreonite, Battle of Bands, TechNexus AI Hackathon, Quiz, and Street Theatre. Over 40 colleges across South India are competing for cash prizes worth ₹3,50,000!",
      actionRequired: true
    },
    {
      id: 2,
      title: "Internal Exam Schedule Released",
      date: "18 Nov 2026",
      tag: "Academics",
      badgeColor: "#8b5cf6",
      body: "Model Examinations for Odd Semester (UG Sem III & Sem V) will commence from Nov 28, 2026. Hall tickets can be downloaded from the examinations tab starting Nov 24. Students must carry valid college ID cards.",
      actionRequired: false
    },
    {
      id: 3,
      title: "Library Timings Extended",
      date: "15 Nov 2026",
      tag: "Campus",
      badgeColor: "#f59e0b",
      body: "In view of upcoming semester examinations, Dr. APJ Abdul Kalam Central Library will remain open until 9:30 PM on all weekdays and Saturdays starting Monday. Digital cubicles and Kindle lending services are operating normally.",
      actionRequired: false
    },
    {
      id: 4,
      title: "Zoho On-Campus Placement Drive for 2026 Batch",
      date: "12 Nov 2026",
      tag: "Placements",
      badgeColor: "#10b981",
      body: "Zoho Corporation will conduct an on-campus hiring drive for Software Developer, Quality Analyst, and Technical Support Engineer roles on December 12, 2026. Eligible students with CGPA 7.0 and above must register on the placement portal before Nov 30.",
      actionRequired: false
    },
    {
      id: 5,
      title: "Inter-Department Football Tournament Finals",
      date: "10 Nov 2026",
      tag: "Sports",
      badgeColor: "#3b82f6",
      body: "The final match between Computer Science and Commerce will be played on Friday, 21st November at 4:30 PM at the Main Sports Arena. Come and cheer for your department!",
      actionRequired: false
    }
  ];

  const filtered = filter === "all" ? notices : notices.filter(n => n.tag.toLowerCase() === filter.toLowerCase());

  return (
    <div className="dashboard-content">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
            Campus Circulars & Announcements
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            Official bulletins from the Office of the Principal and Student Affairs Council.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {["All", "Events", "Academics", "Campus", "Placements", "Sports"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t.toLowerCase())}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid #cbd5e1',
                background: filter === t.toLowerCase() ? '#1e1b4b' : '#ffffff',
                color: filter === t.toLowerCase() ? '#ffffff' : '#475569',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Announcements List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map((notice) => (
          <div key={notice.id} className="card-box" style={{ borderLeft: `5px solid ${notice.badgeColor || '#6366f1'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: notice.badgeColor || '#6366f1',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  textTransform: 'uppercase'
                }}>
                  {notice.tag}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 800, color: '#1e293b', marginTop: '6px' }}>
                  {notice.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>
                <Calendar size={14} />
                <span>{notice.date}</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, marginTop: '10px' }}>
              {notice.body}
            </p>

            {notice.id === 1 && (
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setRegisteredFest(true)}
                  disabled={registeredFest}
                  style={{
                    background: registeredFest ? '#dcfce7' : 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
                    color: registeredFest ? '#15803d' : '#ffffff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: registeredFest ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: registeredFest ? 'none' : '0 4px 12px rgba(236, 72, 153, 0.3)'
                  }}
                >
                  {registeredFest ? (
                    <>
                      <CheckCircle size={15} />
                      <span>Registered for Tarang '26!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={15} />
                      <span>Register for Tarang 2026 Events</span>
                    </>
                  )}
                </button>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Free registration for all RM College students
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
