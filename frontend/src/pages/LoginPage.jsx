import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, UserCheck, Shield, GraduationCap, Lock, Mail, Sparkles } from 'lucide-react';
import { RmCollegeLogo, CampusBooks3D, CampusBuildingArt } from '../assets/svgs';
import { loginUser } from '../api/client';

export default function LoginPage({ onLoginSuccess }) {
  const [role, setRole] = useState('student');
  const [identifier, setIdentifier] = useState('25BCA019');
  const [password, setPassword] = useState('student123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Quick preset fills
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'student') {
      setIdentifier('25BCA019');
      setPassword('student123');
    } else if (selectedRole === 'faculty') {
      setIdentifier('dr.ranganathan@rmcas.edu.in');
      setPassword('faculty123');
    } else if (selectedRole === 'admin') {
      setIdentifier('admin@rmcas.edu.in');
      setPassword('admin123');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setError('Please provide your Register Number / Email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await loginUser(identifier, password, role);
      if (data?.user) {
        onLoginSuccess(data.user);
      } else {
        setError('Login failed. Please verify credentials.');
      }
    } catch (err) {
      setError('Connection error. Continuing in demo mode.');
      onLoginSuccess({
        name: role === 'student' ? 'Elakiya Rajendran' : role === 'faculty' ? 'Dr. K. Ranganathan' : 'Campus Administrator',
        role: role,
        program: role === 'student' ? 'B.Sc. Computer Science' : 'Department Head',
        roll_no: identifier
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top left, #f3e8ff 0%, #e0e7ff 40%, #f8fafc 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px 16px',
      position: 'relative'
    }}>
      {/* Top Banner Tagline */}
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        padding: '0 8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <RmCollegeLogo size={48} />
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, color: '#1e1b4b', letterSpacing: '0.5px' }}>
              RM COLLEGE OF ARTS AND SCIENCE
            </h1>
            <p style={{ fontSize: '11.5px', color: '#6d28d9', fontWeight: 600, letterSpacing: '1px' }}>
              Learn · Grow · Excel
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12px',
          fontWeight: 600,
          color: '#7c3aed',
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '6px 14px',
          borderRadius: '20px',
          boxShadow: '0 2px 8px rgba(124, 58, 237, 0.08)'
        }}>
          <Sparkles size={14} color="#f59e0b" />
          <span>Step into a smarter campus...</span>
        </div>
      </div>

      {/* Main Split Hero Banner Card matching the uploaded screenshot */}
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        background: '#ffffff',
        borderRadius: '28px',
        boxShadow: '0 20px 50px -10px rgba(99, 102, 241, 0.15), 0 8px 20px -5px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        position: 'relative'
      }}>
        {/* Left Visual Column */}
        <div style={{
          background: 'linear-gradient(145deg, #faf5ff 0%, #f3e8ff 50%, #ede9fe 100%)',
          padding: '40px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div>
            <span style={{
              display: 'inline-block',
              background: '#8b5cf6',
              color: 'white',
              fontSize: '10.5px',
              fontWeight: 800,
              padding: '3px 10px',
              borderRadius: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '12px'
            }}>
              Autonomous · NAAC A++
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px',
              fontWeight: 800,
              color: '#2e1065',
              lineHeight: 1.25,
              maxWidth: '380px'
            }}>
              Your Journey <br />
              Towards a <span style={{ color: '#7c3aed' }}>Brighter Future</span> Begins Here...
            </h2>
          </div>

          {/* 3D Stacked Books & Cap Illustration */}
          <div style={{ margin: '24px 0', display: 'flex', justifyContent: 'center' }}>
            <CampusBooks3D className="w-full max-w-xs drop-shadow-lg" />
          </div>

          <div style={{
            fontSize: '11.5px',
            color: '#64748b',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(139, 92, 246, 0.15)',
            paddingTop: '12px'
          }}>
            <span>🏛️ Knowledge City Campus</span>
            <span>Est. 1984</span>
          </div>
        </div>

        {/* Right Form Column */}
        <div style={{ padding: '40px 38px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Form Header */}
          <div style={{ marginBottom: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: '#ede9fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7c3aed'
              }}>
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
                Welcome Back!
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: '#64748b' }}>
              Login to continue your academic journey
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            padding: '4px',
            borderRadius: '12px',
            marginBottom: '22px'
          }}>
            {[
              { id: 'student', label: 'Student', icon: GraduationCap },
              { id: 'faculty', label: 'Faculty', icon: UserCheck },
              { id: 'admin', label: 'Admin', icon: Shield }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = role === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleRoleChange(tab.id)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '10px',
                    background: isSelected ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : 'transparent',
                    color: isSelected ? '#ffffff' : '#64748b',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: isSelected ? '0 2px 8px rgba(139, 92, 246, 0.35)' : 'none'
                  }}
                >
                  <TabIcon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {error && (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#b91c1c',
              fontSize: '12px',
              padding: '8px 12px',
              borderRadius: '8px',
              marginBottom: '16px'
            }}>
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Identifier Input */}
            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px', display: 'block' }}>
                Register Number / Email
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. 25BCA019 or email@rmcas.edu.in"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 40px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13.5px',
                    color: '#1e293b',
                    outline: 'none',
                    transition: 'border 0.2s'
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px', display: 'block' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 40px 11px 40px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13.5px',
                    color: '#1e293b',
                    outline: 'none',
                    transition: 'border 0.2s'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ accentColor: '#7c3aed' }}
                />
                <span>Remember Me</span>
              </label>
              <span
                onClick={() => alert("Please contact the RM College Office or your Department HOD to reset your password.")}
                style={{ color: '#7c3aed', fontWeight: 600, cursor: 'pointer' }}
              >
                Forgot Password?
              </span>
            </div>

            {/* Login Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '13px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(139, 92, 246, 0.4)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                marginTop: '6px'
              }}
            >
              {loading ? 'Authenticating...' : (
                <>
                  <span>Login</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#64748b' }}>
            Don't have an account?{' '}
            <span
              onClick={() => alert("New student enrollment is managed through the RM College Admissions Cell (Room A-102) or online application.")}
              style={{ color: '#7c3aed', fontWeight: 700, cursor: 'pointer' }}
            >
              Contact Admin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
