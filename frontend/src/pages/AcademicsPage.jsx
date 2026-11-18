import React, { useState } from 'react';
import { BookOpen, Users, Award, Download, ExternalLink, GraduationCap, ChevronRight } from 'lucide-react';

export default function AcademicsPage({ onOpenRimi }) {
  const [selectedDept, setSelectedDept] = useState("all");

  const departments = [
    {
      id: "cs",
      name: "Computer Science & Applications",
      hod: "Dr. K. Ranganathan, M.Tech., Ph.D.",
      hod_email: "hod.cs@rmcas.edu.in",
      location: "Turing Tech Block, 3rd Floor, Room T-302",
      description: "Equipped with AI & GPU computing labs, modern cloud infrastructure, and active ACM student chapter.",
      courses: [
        { code: "BCS", name: "B.Sc. Computer Science", duration: "3 Years", fee: "₹48,000 / yr", seats: 120 },
        { code: "BCA", name: "Bachelor of Computer Applications", duration: "3 Years", fee: "₹52,000 / yr", seats: 120 },
        { code: "MSC-DS", name: "M.Sc. Data Science & Analytics", duration: "2 Years", fee: "₹65,000 / yr", seats: 40 }
      ]
    },
    {
      id: "comm",
      name: "Commerce & Professional Accounting",
      hod: "Dr. S. Malathi, M.Com., Ph.D., FCS",
      hod_email: "hod.commerce@rmcas.edu.in",
      location: "Commerce Bhavan, 2nd Floor, Room C-205",
      description: "Featuring a dedicated Bloomberg Terminal, corporate auditing clinics, and ICAI/CMA mentorship.",
      courses: [
        { code: "BCOM-GEN", name: "B.Com General", duration: "3 Years", fee: "₹42,000 / yr", seats: 180 },
        { code: "BCOM-AF", name: "B.Com Accounting & Finance", duration: "3 Years", fee: "₹45,000 / yr", seats: 120 }
      ]
    },
    {
      id: "mgmt",
      name: "Management Studies (BBA)",
      hod: "Prof. A. Rajesh Khanna, MBA, Ph.D.",
      hod_email: "hod.mgmt@rmcas.edu.in",
      location: "Management Tower, 1st Floor, Room M-104",
      description: "Leadership development through Harvard case studies, incubation hub, and corporate guest lectures.",
      courses: [
        { code: "BBA", name: "Bachelor of Business Administration", duration: "3 Years", fee: "₹46,000 / yr", seats: 120 }
      ]
    },
    {
      id: "math",
      name: "Mathematics & Statistics",
      hod: "Dr. Meenakshi Sundaram, M.Sc., Ph.D.",
      hod_email: "hod.maths@rmcas.edu.in",
      location: "Ramanujan Science Block, Room R-204",
      description: "Strong theoretical rigor and practical data analytics using MATLAB, Python, and R.",
      courses: [
        { code: "BSC-MATH", name: "B.Sc. Mathematics", duration: "3 Years", fee: "₹38,000 / yr", seats: 60 }
      ]
    }
  ];

  const filteredDepts = selectedDept === "all" ? departments : departments.filter(d => d.id === selectedDept);

  return (
    <div className="dashboard-content">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#1e1b4b' }}>
            Academic Programs & Departments
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            Explore departments, faculty leadership, curriculums, and degree requirements.
          </p>
        </div>

        <button
          onClick={onOpenRimi}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: 'white',
            border: 'none',
            padding: '9px 16px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <span>Ask RIMI About Admissions & Syllabus</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setSelectedDept("all")}
          style={{
            padding: '7px 14px',
            borderRadius: '20px',
            border: '1px solid #cbd5e1',
            background: selectedDept === 'all' ? '#1e1b4b' : '#ffffff',
            color: selectedDept === 'all' ? '#ffffff' : '#475569',
            fontSize: '12.5px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          All Departments
        </button>
        {departments.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDept(d.id)}
            style={{
              padding: '7px 14px',
              borderRadius: '20px',
              border: '1px solid #cbd5e1',
              background: selectedDept === d.id ? '#1e1b4b' : '#ffffff',
              color: selectedDept === d.id ? '#ffffff' : '#475569',
              fontSize: '12.5px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {d.name.split('&')[0]}
          </button>
        ))}
      </div>

      {/* Departments Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredDepts.map((dept) => (
          <div key={dept.id} className="card-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#7c3aed', background: '#f5f3ff', padding: '3px 8px', borderRadius: '6px' }}>
                  Department
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, color: '#1e293b', marginTop: '4px' }}>
                  {dept.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', maxWidth: '700px' }}>
                  {dept.description}
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', minWidth: '240px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>HEAD OF DEPARTMENT</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>{dept.hod}</div>
                <div style={{ fontSize: '11.5px', color: '#6366f1' }}>{dept.hod_email}</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '3px' }}>📍 {dept.location}</div>
              </div>
            </div>

            {/* Courses Table */}
            <div style={{ marginTop: '18px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                Programs Offered:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                {dept.courses.map((course) => (
                  <div key={course.code} style={{
                    background: '#f8fafc',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid #eef2f6',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb', background: '#eff6ff', padding: '2px 6px', borderRadius: '4px' }}>
                          {course.code}
                        </span>
                        <span style={{ fontSize: '11.5px', color: '#64748b' }}>{course.duration}</span>
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', marginTop: '6px' }}>
                        {course.name}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669' }}>
                        {course.fee}
                      </span>
                      <button
                        onClick={() => alert(`Downloading official syllabus for ${course.name} (${course.code})...`)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#6366f1',
                          fontSize: '11.5px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Download size={13} />
                        Syllabus PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
