import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';

export default function Topbar({ user, onOpenMobileMenu, onQuickNavigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, title: "Internal Exam Hall Tickets Released", time: "10 mins ago", unread: true },
    { id: 2, title: "College Fest Tarang '26 Registrations Open", time: "2 hours ago", unread: true },
    { id: 3, title: "Library Timings extended till 9:30 PM", time: "1 day ago", unread: true },
  ];

  const searchResults = searchQuery.trim() ? [
    { title: "Data Structures & Algorithms (CS301)", category: "Courses", tab: "academics" },
    { title: "Dr. K. Ranganathan (HOD Computer Science)", category: "Faculty", tab: "academics" },
    { title: "Semester Exam: Database Management (Nov 28)", category: "Exams", tab: "timetable" },
    { title: "Attendance Policy (75% Minimum Rule)", category: "Rules", tab: "attendance" },
    { title: "Tarang 2026 Cultural Fest Registrations", category: "Events", tab: "announcements" }
  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onOpenMobileMenu}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#1e293b',
            display: 'flex',
            alignItems: 'center'
          }}
          className="mobile-only-btn"
          title="Open Menu"
        >
          <Menu size={24} />
        </button>

        {/* Search bar */}
        <div className="search-bar-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />

          {/* Live Search Dropdown */}
          {searchQuery.trim().length > 0 && (
            <div style={{
              position: 'absolute',
              top: '46px',
              left: 0,
              width: '100%',
              background: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
              border: '1px solid #e2e8f0',
              zIndex: 50,
              overflow: 'hidden',
              padding: '8px 0'
            }}>
              {searchResults.length > 0 ? (
                searchResults.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onQuickNavigate(item.tab);
                      setSearchQuery("");
                    }}
                    style={{
                      padding: '10px 14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #f8fafc',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>{item.title}</div>
                      <div style={{ fontSize: '10.5px', color: '#6366f1', fontWeight: 500 }}>{item.category}</div>
                    </div>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>Jump →</span>
                  </div>
                ))
              ) : (
                <div style={{ padding: '12px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
                  No campus results found for "{searchQuery}". Ask RIMI!
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Topbar Right Controls */}
      <div className="topbar-right">
        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="notif-btn"
            title="Notifications"
          >
            <Bell size={18} />
            <span className="notif-badge">3</span>
          </button>

          {showNotifications && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '50px',
              width: '320px',
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
              border: '1px solid #e2e8f0',
              zIndex: 50,
              overflow: 'hidden'
            }}>
              <div style={{ padding: '14px 18px', borderBottom: '1px solid #f1f5f9', fontWeight: 700, fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Announcements</span>
                <span style={{ fontSize: '11px', color: '#6366f1', cursor: 'pointer' }}>Mark all read</span>
              </div>
              <div>
                {notifications.map((n) => (
                  <div key={n.id} style={{ padding: '12px 18px', borderBottom: '1px solid #f8fafc', background: n.unread ? '#fdf4ff' : '#ffffff' }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1e293b' }}>{n.title}</div>
                    <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: '3px' }}>{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User profile capsule */}
        <div style={{ position: 'relative' }}>
          <div
            className="user-profile-capsule"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            {/* Realistic stylized avatar */}
            <div style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '14px',
              border: '2px solid #ddd6fe',
              boxShadow: '0 2px 6px rgba(139, 92, 246, 0.25)'
            }}>
              {user?.name ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2) : 'ER'}
            </div>

            <div className="user-info-text">
              <div className="user-name-title">
                {user?.name || "Elakiya Rajendran"}
                <ChevronDown size={14} color="#64748b" />
              </div>
              <div className="user-sub-title">
                {user?.program || "B.Sc. Computer Science"}
              </div>
            </div>
          </div>

          {showProfileMenu && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '52px',
              width: '220px',
              background: '#ffffff',
              borderRadius: '14px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              border: '1px solid #e2e8f0',
              zIndex: 50,
              padding: '8px',
              fontSize: '13px'
            }}>
              <div style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontWeight: 700, color: '#1e293b' }}>{user?.name}</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Roll: {user?.roll_no || '23BCS108'}</div>
              </div>
              <div
                onClick={() => {
                  onQuickNavigate('profile');
                  setShowProfileMenu(false);
                }}
                style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '8px', color: '#334155' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                View Profile
              </div>
              <div
                onClick={() => {
                  onQuickNavigate('settings');
                  setShowProfileMenu(false);
                }}
                style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '8px', color: '#334155' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Account Settings
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
