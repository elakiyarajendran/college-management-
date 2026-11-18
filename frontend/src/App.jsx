import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import RimiWidget from './components/RimiWidget';
import QuickModal from './components/QuickModal';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AcademicsPage from './pages/AcademicsPage';
import TimetablePage from './pages/TimetablePage';
import AttendancePage from './pages/AttendancePage';
import ResultsPage from './pages/ResultsPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';

export default function App() {
  // Auth state - initialized with default student session matching screenshot
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('rmcas_user');
    return saved ? JSON.parse(saved) : {
      name: "Elakiya Rajendran",
      role: "student",
      identifier: "25BCA019",
      email: "elakiya.rajendran@student.rmcas.edu.in",
      program: "B.Sc. Computer Science",
      year: "3rd Year (Sem V)",
      roll_no: "23BCS108",
      reg_no: "25BCA019",
      cgpa: 8.75,
      attendance: 92
    };
  });

  const [activeTab, setActiveTab] = useState('home');
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('rmcas_sidebar_collapsed') === 'true';
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isRimiOpen, setIsRimiOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    localStorage.setItem('rmcas_sidebar_collapsed', collapsed ? 'true' : 'false');
  }, [collapsed]);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('rmcas_user', JSON.stringify(userData));
    setActiveTab('home');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('rmcas_user');
  };

  // If logged out, render LoginPage
  if (!user) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="app-layout">
      {/* Collapsible Left Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Area */}
      <div className="main-area">
        {/* Top Navigation Bar */}
        <Topbar
          user={user}
          onOpenMobileMenu={() => setMobileOpen(true)}
          onQuickNavigate={(tab) => setActiveTab(tab)}
        />

        {/* Dynamic Page Views */}
        <main style={{ flex: 1 }}>
          {activeTab === 'home' && (
            <DashboardPage
              user={user}
              onNavigate={(tab) => setActiveTab(tab)}
              onOpenRimi={() => setIsRimiOpen(true)}
              onOpenModal={(type) => setActiveModal(type)}
            />
          )}

          {activeTab === 'profile' && <ProfilePage user={user} />}
          {activeTab === 'academics' && <AcademicsPage onOpenRimi={() => setIsRimiOpen(true)} />}
          {activeTab === 'timetable' && <TimetablePage onOpenRimi={() => setIsRimiOpen(true)} />}
          {activeTab === 'attendance' && <AttendancePage onOpenRimi={() => setIsRimiOpen(true)} />}
          {activeTab === 'results' && <ResultsPage />}
          {activeTab === 'announcements' && <AnnouncementsPage onOpenRimi={() => setIsRimiOpen(true)} />}
          {activeTab === 'chat' && <ChatPage />}
          {activeTab === 'admin' && <AdminPage />}
          {activeTab === 'messages' && (
            <div className="dashboard-content">
              <div className="card-box" style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800 }}>
                  Campus Messaging & Office Hours
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', maxWidth: '480px', margin: '8px auto' }}>
                  Connect with your Faculty Mentor Dr. K. Ranganathan, Academic Advisor, or Department Office directly.
                </p>
                <button
                  onClick={() => setIsRimiOpen(true)}
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '16px'
                  }}
                >
                  Ask RIMI for Faculty Contacts & Cabin Locations
                </button>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="dashboard-content">
              <div className="card-box" style={{ maxWidth: '640px' }}>
                <h3 className="card-heading" style={{ marginBottom: '18px' }}>Student Portal Settings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '10px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1e293b' }}>SMS & WhatsApp Notifications</div>
                      <div style={{ fontSize: '11.5px', color: '#64748b' }}>Receive exam alerts & hall ticket updates</div>
                    </div>
                    <input type="checkbox" defaultChecked style={{ accentColor: '#7c3aed', transform: 'scale(1.2)' }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '10px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1e293b' }}>Attendance Warning Threshold</div>
                      <div style={{ fontSize: '11.5px', color: '#64748b' }}>Alert me if attendance drops below 80%</div>
                    </div>
                    <input type="checkbox" defaultChecked style={{ accentColor: '#7c3aed', transform: 'scale(1.2)' }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '10px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1e293b' }}>AI Core Engine</div>
                      <div style={{ fontSize: '11.5px', color: '#64748b' }}>Connected to Google Gemini 3.5 Flash</div>
                    </div>
                    <span style={{ fontSize: '11px', color: '#15803d', fontWeight: 700, background: '#dcfce7', padding: '3px 8px', borderRadius: '6px' }}>
                      Active
                    </span>
                  </div>

                  <div style={{ marginTop: '12px' }}>
                    <button
                      onClick={handleLogout}
                      style={{
                        padding: '10px 18px',
                        background: '#fee2e2',
                        color: '#b91c1c',
                        border: 'none',
                        borderRadius: '10px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Sign Out from Portal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Floating RIMI Chatbot Widget (Present on all screens) */}
      <RimiWidget isOpen={isRimiOpen} setIsOpen={setIsRimiOpen} />

      {/* Quick Action Modals (Syllabus, Library, Fees) */}
      <QuickModal type={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
