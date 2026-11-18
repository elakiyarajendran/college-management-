import React, { useState } from 'react';
import { Calendar, Clock, Download, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

export default function TimetablePage({ onOpenRimi }) {
  const [activeDay, setActiveDay] = useState("Wednesday");

  const weeklySchedule = {
    "Monday": [
      { time: "9:00 AM - 10:00 AM", subject: "Discrete Mathematics", code: "MA301", venue: "Room 204", faculty: "Dr. Meenakshi Sundaram" },
      { time: "10:15 AM - 11:15 AM", subject: "Operating Systems", code: "CS304", venue: "Room 201", faculty: "Prof. S. Karthik" },
      { time: "11:30 AM - 12:30 PM", subject: "Database Management", code: "CS303", venue: "Room 201", faculty: "Dr. V. Kavitha" },
      { time: "1:30 PM - 3:30 PM", subject: "OS & Shell Scripting Lab", code: "CS304P", venue: "Turing Lab 1", faculty: "Prof. S. Karthik" }
    ],
    "Tuesday": [
      { time: "9:00 AM - 10:00 AM", subject: "Computer Networks", code: "CS305", venue: "Room 201", faculty: "Dr. Anand Kumar" },
      { time: "10:15 AM - 11:15 AM", subject: "Web Technologies", code: "CS302", venue: "Room 201", faculty: "Prof. Priya Dharshini" },
      { time: "11:30 AM - 12:30 PM", subject: "Data Structures", code: "CS301", venue: "Room 201", faculty: "Dr. K. Ranganathan" },
      { time: "1:30 PM - 3:30 PM", subject: "Web Development Lab", code: "CS302P", venue: "Grace Hopper Lab 2", faculty: "Prof. Priya Dharshini" }
    ],
    "Wednesday": [
      { time: "9:00 AM - 10:00 AM", subject: "Data Structures", code: "CS301", venue: "Lab 1", faculty: "Dr. K. Ranganathan", status: "Completed" },
      { time: "11:00 AM - 12:00 PM", subject: "Web Technologies", code: "CS302", venue: "Lab 2", faculty: "Prof. Priya Dharshini", status: "Ongoing" },
      { time: "2:00 PM - 3:00 PM", subject: "Mathematics", code: "MA301", venue: "Room 204", faculty: "Dr. Meenakshi Sundaram", status: "Upcoming" }
    ],
    "Thursday": [
      { time: "9:00 AM - 10:00 AM", subject: "Operating Systems", code: "CS304", venue: "Room 201", faculty: "Prof. S. Karthik" },
      { time: "10:15 AM - 11:15 AM", subject: "Database Management", code: "CS303", venue: "Room 201", faculty: "Dr. V. Kavitha" },
      { time: "11:30 AM - 12:30 PM", subject: "Environmental Studies", code: "EVS101", venue: "Room 105", faculty: "Dr. Christina Samuel" },
      { time: "1:30 PM - 3:30 PM", subject: "Data Structures C++ Lab", code: "CS301P", venue: "Turing Lab 1", faculty: "Dr. K. Ranganathan" }
    ],
    "Friday": [
      { time: "9:00 AM - 10:00 AM", subject: "Computer Networks", code: "CS305", venue: "Room 201", faculty: "Dr. Anand Kumar" },
      { time: "10:15 AM - 11:15 AM", subject: "Data Structures", code: "CS301", venue: "Room 201", faculty: "Dr. K. Ranganathan" },
      { time: "11:30 AM - 12:30 PM", subject: "Technical Communication", code: "ENG301", venue: "Language Lab", faculty: "Dr. Christina Samuel" },
      { time: "1:30 PM - 3:30 PM", subject: "DBMS SQL Practical Lab", code: "CS303P", venue: "Turing Lab 2", faculty: "Dr. V. Kavitha" }
    ]
  };

  const exams = [
    { code: "CS303", subject: "Database Management Systems", date: "28 Nov 2026", time: "10:00 AM - 1:00 PM", venue: "Exam Hall 3 (Auditorium Wing)", maxMarks: 100 },
    { code: "CS304", subject: "Operating Systems Architecture", date: "02 Dec 2026", time: "10:00 AM - 1:00 PM", venue: "Exam Hall 1 (Science Block)", maxMarks: 100 },
    { code: "CS305", subject: "Computer Networks & Security", date: "06 Dec 2026", time: "10:00 AM - 1:00 PM", venue: "Exam Hall 2 (Main Block)", maxMarks: 100 },
    { code: "MA301", subject: "Discrete Mathematics & Graph Theory", date: "10 Dec 2026", time: "10:00 AM - 1:00 PM", venue: "Exam Hall 1 (Science Block)", maxMarks: 100 }
  ];

  return (
    <div className="dashboard-content">
      {/* Top Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
            Class Schedule & Semester Examinations
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            B.Sc. Computer Science • Semester V • Academic Year 2026-2027
          </p>
        </div>

        <button
          onClick={() => alert("Downloading verified Hall Ticket (Reg: 25BCA019) for Semester Examinations starting Nov 28, 2026...")}
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
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
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}
        >
          <Download size={16} />
          <span>Download Hall Ticket (PDF)</span>
        </button>
      </div>

      {/* Day Selector Tabs */}
      <div className="card-box">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <h3 className="card-heading">Weekly Class Timetable</h3>
          <div style={{ display: 'flex', gap: '6px' }}>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  background: activeDay === day ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : '#f8fafc',
                  color: activeDay === day ? '#ffffff' : '#475569',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {day} {day === 'Wednesday' && '• Today'}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable List for selected day */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(weeklySchedule[activeDay] || []).map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              background: '#f8fafc',
              border: '1px solid #eef2f6',
              borderRadius: '12px',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: '10px',
                  background: '#ede9fe',
                  color: '#7c3aed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>
                    {item.subject}
                    <span style={{ fontSize: '11px', color: '#6366f1', background: '#e0e7ff', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px' }}>
                      {item.code}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    Faculty: {item.faculty} • 📍 {item.venue}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1e1b4b' }}>
                  {item.time}
                </span>
                {item.status && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '10px',
                    background: item.status === 'Completed' ? '#f1f5f9' : item.status === 'Ongoing' ? '#dcfce7' : '#fef3c7',
                    color: item.status === 'Completed' ? '#64748b' : item.status === 'Ongoing' ? '#15803d' : '#b45309'
                  }}>
                    {item.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Exams Table Card */}
      <div className="card-box">
        <div className="card-header-flex">
          <div>
            <h3 className="card-heading">Semester Examination Timetable</h3>
            <p style={{ fontSize: '12px', color: '#64748b' }}>Commencing 28 November 2026 • Controller of Examinations Office</p>
          </div>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '12px',
            color: '#15803d',
            background: '#dcfce7',
            padding: '4px 10px',
            borderRadius: '12px',
            fontWeight: 700
          }}>
            <CheckCircle2 size={14} /> Eligible (92% Attendance)
          </span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#475569', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px 14px' }}>Date & Day</th>
                <th style={{ padding: '12px 14px' }}>Course Code</th>
                <th style={{ padding: '12px 14px' }}>Subject Title</th>
                <th style={{ padding: '12px 14px' }}>Session / Time</th>
                <th style={{ padding: '12px 14px' }}>Venue</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((ex, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px', fontWeight: 700, color: '#7c3aed' }}>{ex.date}</td>
                  <td style={{ padding: '14px', fontWeight: 600 }}>{ex.code}</td>
                  <td style={{ padding: '14px', fontWeight: 700, color: '#1e293b' }}>{ex.subject}</td>
                  <td style={{ padding: '14px', color: '#475569' }}>{ex.time}</td>
                  <td style={{ padding: '14px', color: '#64748b' }}>{ex.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
