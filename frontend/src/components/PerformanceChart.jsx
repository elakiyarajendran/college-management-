import React, { useState } from 'react';

export default function PerformanceChart({ data = [] }) {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [filter, setFilter] = useState("This Semester");

  const points = data.length > 0 ? data : [
    { semester: "Sem 1", gpa: 8.20 },
    { semester: "Sem 2", gpa: 8.45 },
    { semester: "Sem 3", gpa: 8.60 },
    { semester: "Sem 4", gpa: 8.90 },
    { semester: "Sem 5 (Current)", gpa: 8.75 }
  ];

  const width = 540;
  const height = 180;
  const paddingX = 40;
  const paddingY = 25;

  const minGpa = 7.5;
  const maxGpa = 9.5;

  const getX = (index) => paddingX + (index * (width - 2 * paddingX)) / (points.length - 1);
  const getY = (val) => height - paddingY - ((val - minGpa) / (maxGpa - minGpa)) * (height - 2 * paddingY);

  // Smooth bezier curve path
  const pathD = points.reduce((acc, curr, idx, arr) => {
    const x = getX(idx);
    const y = getY(curr.gpa);
    if (idx === 0) return `M ${x} ${y}`;
    const prevX = getX(idx - 1);
    const prevY = getY(arr[idx - 1].gpa);
    const cpX1 = prevX + (x - prevX) / 2;
    const cpX2 = prevX + (x - prevX) / 2;
    return `${acc} C ${cpX1} ${prevY}, ${cpX2} ${y}, ${x} ${y}`;
  }, "");

  // Gradient area fill
  const areaD = `${pathD} L ${getX(points.length - 1)} ${height - paddingY} L ${getX(0)} ${height - paddingY} Z`;

  return (
    <div className="performance-chart-card">
      <div className="card-header-flex">
        <h3 className="card-heading">Your Performance</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            fontSize: "12px",
            fontWeight: 600,
            padding: "4px 8px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            backgroundColor: "#f8fafc",
            color: "#475569",
            outline: "none",
            cursor: "pointer"
          }}
        >
          <option>This Semester</option>
          <option>All Semesters</option>
          <option>Internal Tests</option>
        </select>
      </div>

      <div style={{ position: "relative", width: "100%", overflowX: "auto" }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", display: "block" }}>
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
            </linearGradient>
            <filter id="dotShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#2563eb" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Horizontal grid lines */}
          {[8.0, 8.5, 9.0].map((val) => {
            const y = getY(val);
            return (
              <g key={val}>
                <line x1={paddingX} y1={y} x2={width - paddingX} y2={y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <text x={paddingX - 10} y={y + 3} fill="#94a3b8" fontSize="10" textAnchor="end">{val}</text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={areaD} fill="url(#chartGrad)" />

          {/* Curve Stroke */}
          <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />

          {/* Data Points */}
          {points.map((p, idx) => {
            const cx = getX(idx);
            const cy = getY(p.gpa);
            const isHovered = selectedPoint === idx;

            return (
              <g key={idx} onMouseEnter={() => setSelectedPoint(idx)} onMouseLeave={() => setSelectedPoint(null)} style={{ cursor: "pointer" }}>
                <circle cx={cx} cy={cy} r={isHovered ? 7 : 5} fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" filter="url(#dotShadow)" />
                <text x={cx} y={height - 6} fill="#64748b" fontSize="11" fontWeight="600" textAnchor="middle">
                  {p.semester.replace(" (Current)", "")}
                </text>
                {/* GPA Value Flag on active or default last */}
                {(isHovered || idx === points.length - 1) && (
                  <g>
                    <rect x={cx - 18} y={cy - 24} width="36" height="18" rx="6" fill="#1e1b4b" />
                    <text x={cx} y={cy - 12} fill="#ffffff" fontSize="10" fontWeight="700" textAnchor="middle">
                      {p.gpa.toFixed(2)}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
