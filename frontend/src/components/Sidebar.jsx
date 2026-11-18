import React from 'react';
import {
  Home,
  User,
  GraduationCap,
  Calendar,
  Clock,
  BarChart2,
  Bell,
  MessageCircle,
  Bot,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
  LogOut
} from 'lucide-react';
import { RmCollegeLogo } from '../assets/svgs';

export default function Sidebar({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  user,
  onLogout
}) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'academics', label: 'Academics', icon: GraduationCap },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'results', label: 'Results', icon: BarChart2 },
    { id: 'announcements', label: 'Announcements', icon: Bell, badge: 3 },
    { id: 'chat', label: 'RIMI Buddy', icon: Bot },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (user?.role === 'admin') {
    navItems.push({ id: 'admin', label: 'Admin Panel', icon: Shield });
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 35
          }}
        />
      )}

      <aside className={`sidebar ${collapsed ? 'collapsed' : 'expanded'} ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-header">
          <RmCollegeLogo size={collapsed ? 36 : 42} />
          {!collapsed && (
            <div>
              <div className="sidebar-brand-title">RM COLLEGE</div>
              <div className="sidebar-brand-subtitle">OF ARTS AND SCIENCE</div>
            </div>
          )}
        </div>

        {/* Navigation links */}
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (mobileOpen) setMobileOpen(false);
                }}
                className={`nav-item ${isActive ? 'active' : ''}`}
                title={collapsed ? item.label : undefined}
              >
                <Icon size={19} style={{ flexShrink: 0 }} />
                {!collapsed && <span>{item.label}</span>}
                {!collapsed && item.badge && <span className="nav-badge">{item.badge}</span>}
              </div>
            );
          })}
        </nav>

        {/* Footer with collapse toggle and logout */}
        <div className="sidebar-footer">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="collapse-btn"
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            {!collapsed && <span>Collapse Sidebar</span>}
          </button>

          <button
            onClick={onLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: collapsed ? 'center' : 'flex-start',
              gap: '10px',
              width: '100%',
              padding: '9px 12px',
              marginTop: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: '#ef4444',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            title="Log Out"
          >
            <LogOut size={16} />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
