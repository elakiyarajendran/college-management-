import React from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Calendar, Award, Shield, CheckCircle } from 'lucide-react';
import { RmCollegeLogo } from '../assets/svgs';

export default function ProfilePage({ user }) {
  const student = {
    name: user?.name || "Elakiya Rajendran",
    regNo: user?.reg_no || "25BCA019",
    rollNo: user?.roll_no || "23BCS108",
    email: user?.email || "elakiya.rajendran@student.rmcas.edu.in",
    department: user?.program || "B.Sc. Computer Science",
    semester: "Semester V (3rd Year)",
    section: "CS-A",
    mentor: "Dr. K. Ranganathan, M.Tech., Ph.D. (HOD CS)",
    dob: "14 May 2005",
    bloodGroup: "B+ Positive",
    phone: "+91 98765 43210",
    parentName: "M. Rajendran",
    parentPhone: "+91 98765 43211",
    address: "No. 42, Lotus Garden, Tambaram East, Chennai - 600059",
    admissionYear: "2024",
    status: "Active Full-Time Student"
  };

  return (
    <div className="dashboard-content">
      {/* Header */}
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
          Student Identity & Academic Profile
        </h2>
        <p style={{ fontSize: '13px', color: '#64748b' }}>
          Verified institutional record • RM College of Arts and Science
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {/* Left: Official Digital Student ID Card */}
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)',
          borderRadius: '24px',
          color: '#ffffff',
          padding: '28px 24px',
          boxShadow: '0 20px 40px -10px rgba(30, 27, 75, 0.35)',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Top Logo and College Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', paddingBottom: '16px' }}>
            <RmCollegeLogo size={40} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 800, letterSpacing: '0.5px' }}>
                RM COLLEGE OF ARTS AND SCIENCE
              </div>
              <div style={{ fontSize: '10px', color: '#cbd5e1', letterSpacing: '1px' }}>
                STUDENT IDENTITY CARD • 2024-2027
              </div>
            </div>
          </div>

          {/* Student Info and Avatar */}
          <div style={{ display: 'flex', gap: '18px', marginTop: '22px', alignItems: 'center' }}>
            <div style={{
              width: 80,
              height: 80,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)',
              border: '3px solid #ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 800,
              color: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              ER
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800 }}>
                {student.name}
              </h3>
              <div style={{ fontSize: '13px', color: '#c4b5fd', fontWeight: 600 }}>
                {student.department}
              </div>
              <div style={{ fontSize: '11.5px', color: '#e2e8f0', marginTop: '4px' }}>
                Reg: <strong>{student.regNo}</strong> | Roll: <strong>{student.rollNo}</strong>
              </div>
            </div>
          </div>

          {/* Quick details */}
          <div style={{
            marginTop: '24px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '14px',
            fontSize: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px'
          }}>
            <div>
              <span style={{ color: '#94a3b8' }}>Year / Sem: </span>
              <strong>{student.semester}</strong>
            </div>
            <div>
              <span style={{ color: '#94a3b8' }}>Section: </span>
              <strong>{student.section}</strong>
            </div>
            <div>
              <span style={{ color: '#94a3b8' }}>Blood Group: </span>
              <strong>{student.bloodGroup}</strong>
            </div>
            <div>
              <span style={{ color: '#94a3b8' }}>Valid Thru: </span>
              <strong>May 2027</strong>
            </div>
          </div>

          <div style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            color: '#94a3b8'
          }}>
            <span>Authorized Signatory</span>
            <span style={{ color: '#4ade80', fontWeight: 700 }}>● Active Status</span>
          </div>
        </div>

        {/* Right: Academic & Personal Details */}
        <div className="card-box">
          <h3 className="card-heading" style={{ marginBottom: '16px' }}>Institutional Particulars</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={18} color="#6366f1" />
              <div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>College Email</div>
                <strong>{student.email}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <GraduationCap size={18} color="#6366f1" />
              <div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Faculty Mentor</div>
                <strong>{student.mentor}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={18} color="#6366f1" />
              <div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Student Contact</div>
                <strong>{student.phone}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MapPin size={18} color="#6366f1" />
              <div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Residential Address</div>
                <div>{student.address}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Shield size={18} color="#6366f1" />
              <div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Parent / Guardian</div>
                <strong>{student.parentName} ({student.parentPhone})</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
