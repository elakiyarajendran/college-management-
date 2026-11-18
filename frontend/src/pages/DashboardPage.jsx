import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Library, Bell, Receipt, Award, Calendar, Clock, CheckCircle } from 'lucide-react';
import { CampusBuildingArt, TrophyGold } from '../assets/svgs';
import PerformanceChart from '../components/PerformanceChart';
import { fetchDashboardSummary } from '../api/client';

export default function DashboardPage({ user, onNavigate, onOpenRimi, onOpenModal }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetchDashboardSummary();
        setData(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const studentName = user?.name ? user.name.split(' ')[0] : 'Elakiya';

  // Circular progress calculations
  const attendanceVal = data?.attendance?.percentage || 92;
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (attendanceVal / 100) * circumference;

  return (
    <div className="dashboard-content">
      {/* 1. Welcome Banner Card */}
      <div className="welcome-banner">
        <div className="banner-left">
          <h2 className="banner-greeting">
            Hello, {studentName}! 👋
          </h2>
          <p className="banner-subtitle">
            Welcome back to RM College!
          </p>
          <p className="banner-quote">
            “Dream bigger, achieve more.”
          </p>
        </div>

        {/* Building Backdrop SVG */}
        <div className="banner-building-bg">
          <CampusBuildingArt />
        </div>
      </div>

      {/* 2. Stat Cards Row: Attendance & CGPA */}
      <div className="stats-cards-row">
        {/* Attendance Card with Radial Gauge */}
        <div className="stat-card" onClick={() => onNavigate('attendance')} style={{ cursor: 'pointer' }}>
          <div className="progress-ring-container">
            <svg width="76" height="76" className="progress-ring-svg">
              <circle
                cx="38"
                cy="38"
                r={radius}
                strokeWidth="7"
                fill="transparent"
                className="ring-bg"
              />
              <circle
                cx="38"
                cy="38"
                r={radius}
                strokeWidth="7"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="ring-progress"
              />
            </svg>
            <div className="ring-text">
              {attendanceVal}%
            </div>
          </div>

          <div>
            <div className="stat-info-title">Attendance</div>
            <div className="stat-info-val">{attendanceVal}%</div>
            <div className="stat-info-delta">
              <span>{data?.attendance?.delta || '+2% ↑'}</span>
            </div>
          </div>
        </div>

        {/* CGPA Trophy Card */}
        <div className="stat-card" onClick={() => onNavigate('results')} style={{ cursor: 'pointer' }}>
          <div style={{
            width: 76,
            height: 76,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <TrophyGold size={44} />
          </div>

          <div>
            <div className="stat-info-title">CGPA</div>
            <div className="stat-info-val">{data?.cgpa?.score || 8.75}</div>
            <span style={{
              display: 'inline-block',
              background: '#dcfce7',
              color: '#15803d',
              fontSize: '11px',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '10px',
              marginTop: '4px'
            }}>
              {data?.cgpa?.badge || 'Excellent!'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Dashboard Grid (12 Columns) */}
      <div className="dashboard-grid">
        {/* Left Column (Span 8) */}
        <div className="grid-col-8">
          {/* Today's Timetable Card */}
          <div className="card-box">
            <div className="card-header-flex">
              <h3 className="card-heading">Today's Timetable</h3>
              <span className="card-action-link" onClick={() => onNavigate('timetable')}>
                View All <ArrowRight size={13} />
              </span>
            </div>

            <div className="timetable-list">
              {(data?.timetable || []).map((item, idx) => (
                <div key={idx} className="timetable-row" style={{ borderLeftColor: item.color || '#6366f1' }}>
                  <div className="time-slot" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color || '#6366f1' }} />
                    {item.time}
                  </div>
                  <div className="subject-details">
                    <div className="subject-name">{item.subject}</div>
                    <div className="venue-tag">{item.venue}</div>
                  </div>
                  <span className="status-badge" style={{
                    background: item.status === 'Completed' ? '#f1f5f9' : item.status === 'Ongoing' ? '#dcfce7' : '#ede9fe',
                    color: item.status === 'Completed' ? '#64748b' : item.status === 'Ongoing' ? '#16a34a' : '#7c3aed'
                  }}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart Card */}
          <div className="card-box">
            <PerformanceChart data={data?.performance} />
          </div>

          {/* Recent Announcements Card */}
          <div className="card-box">
            <div className="card-header-flex">
              <h3 className="card-heading">Recent Announcements</h3>
              <span className="card-action-link" onClick={() => onNavigate('announcements')}>
                View All <ArrowRight size={13} />
              </span>
            </div>

            <div className="announcement-list">
              {(data?.announcements || []).map((item) => (
                <div key={item.id} className="announcement-item" onClick={() => onNavigate('announcements')}>
                  <div className="announcement-icon-badge">
                    {item.tag === 'Events' ? '🎉' : item.tag === 'Academics' ? '📑' : '📢'}
                  </div>
                  <div className="announcement-content">
                    <div className="announcement-title">{item.title}</div>
                    <div className="announcement-date">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Span 4) */}
        <div className="grid-col-4">
          {/* Upcoming Exams Card */}
          <div className="card-box">
            <div className="card-header-flex">
              <h3 className="card-heading">Upcoming Exams</h3>
              <span className="card-action-link" onClick={() => onNavigate('timetable')}>
                View All <ArrowRight size={13} />
              </span>
            </div>

            <div className="exam-list">
              {(data?.upcoming_exams || []).map((exam, idx) => (
                <div key={idx} className="exam-item">
                  <div className="exam-icon-box">
                    <Calendar size={18} />
                  </div>
                  <div className="exam-details">
                    <div className="exam-name">{exam.subject}</div>
                    <div className="exam-date">{exam.date}</div>
                  </div>
                  <span style={{ fontSize: '11px', color: '#9333ea', fontWeight: 700 }}>
                    {exam.days_left}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links 2x2 Grid */}
          <div className="card-box">
            <h3 className="card-heading" style={{ marginBottom: '16px' }}>Quick Links</h3>
            <div className="quick-links-grid">
              <div className="quick-link-box" onClick={() => onOpenModal('syllabus')}>
                <div className="quick-link-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
                  <BookOpen size={22} />
                </div>
                <span className="quick-link-title">Syllabus</span>
              </div>

              <div className="quick-link-box" onClick={() => onOpenModal('library')}>
                <div className="quick-link-icon" style={{ background: '#fefce8', color: '#ca8a04' }}>
                  <Library size={22} />
                </div>
                <span className="quick-link-title">Library</span>
              </div>

              <div className="quick-link-box" onClick={() => onNavigate('announcements')}>
                <div className="quick-link-icon" style={{ background: '#e0e7ff', color: '#4338ca' }}>
                  <Bell size={22} />
                </div>
                <span className="quick-link-title">Notice Board</span>
              </div>

              <div className="quick-link-box" onClick={() => onOpenModal('fees')}>
                <div className="quick-link-icon" style={{ background: '#fff7ed', color: '#ea580c' }}>
                  <Receipt size={22} />
                </div>
                <span className="quick-link-title">Fees</span>
              </div>
            </div>
          </div>

          {/* Motivational Card */}
          <div className="motivational-card">
            <div>
              <div className="motivational-headline">Keep Going!</div>
              <div className="motivational-sub">You're doing great! 💜</div>
            </div>
            <TrophyGold size={50} />
          </div>

          {/* RIMI Campus Assistant Teaser Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
            color: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: '#8b5cf6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🤖
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px' }}>Meet RIMI</div>
                <div style={{ fontSize: '11px', color: '#cbd5e1' }}>Your 24/7 Campus AI Buddy</div>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: '#e2e8f0', lineHeight: 1.4 }}>
              Have questions about exam dates, fee deadlines, HOD contacts, or bus routes? Ask RIMI anytime!
            </p>
            <button
              onClick={onOpenRimi}
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                color: 'white',
                border: 'none',
                padding: '9px 14px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              Ask RIMI a Question →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
