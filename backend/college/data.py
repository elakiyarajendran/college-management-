# Knowledge Base for RM COLLEGE OF ARTS AND SCIENCE
# Verified college data to feed RIMI (the Campus Buddy) and dashboard endpoints

COLLEGE_INFO = {
    "name": "RM COLLEGE OF ARTS AND SCIENCE",
    "short_name": "RMCAS",
    "tagline": "Step into a smarter campus...",
    "motto": "Learn · Grow · Excel",
    "established": 1984,
    "accreditation": "Autonomous Institution, NAAC 'A++' Grade (CGPA 3.82), Affiliated to State University",
    "address": "Green Valley Boulevard, Knowledge City, Chennai - 600048, Tamil Nadu, India",
    "contact": {
        "phone": "+91 (044) 2890-4400 / 2890-4401",
        "admissions_helpline": "+91 98401 23456",
        "email": "info@rmcas.edu.in",
        "admissions_email": "admissions@rmcas.edu.in",
        "office_hours": "Monday to Saturday, 8:30 AM to 4:45 PM"
    },
    "key_officials": {
        "chancellor": "Dr. R. Manickam, Ph.D. (Eminent Educationist)",
        "principal": "Dr. V. Sundaramoorthy, M.Sc., Ph.D.",
        "vice_principal": "Dr. Lakshmi Narayanan, M.A., Ph.D.",
        "dean_academics": "Dr. Revathi Parthasarathy, Ph.D.",
        "controller_of_examinations": "Dr. P. Senthil Kumar, Ph.D."
    }
}

DEPARTMENTS = [
    {
        "id": "cs",
        "name": "Department of Computer Science & Applications",
        "hod": "Dr. K. Ranganathan, M.Tech., Ph.D.",
        "hod_email": "hod.cs@rmcas.edu.in",
        "office": "Turing Tech Block, 3rd Floor, Room T-302",
        "description": "Offering cutting-edge education in Software Engineering, Artificial Intelligence, Web Technologies, Data Structures, and Cloud Computing with high-tech laboratories.",
        "labs": ["Alan Turing Lab 1 (High Performance GPU Workstations)", "Grace Hopper Web Tech Lab 2", "IoT & Robotics Center"],
        "courses_offered": ["B.Sc. Computer Science", "Bachelor of Computer Applications (BCA)", "M.Sc. Data Science & Analytics", "Master of Computer Applications (MCA)"]
    },
    {
        "id": "comm",
        "name": "Department of Commerce & Professional Accounting",
        "hod": "Dr. S. Malathi, M.Com., M.Phil., Ph.D., FCS",
        "hod_email": "hod.commerce@rmcas.edu.in",
        "office": "Commerce Bhavan, 2nd Floor, Room C-205",
        "description": "Fostering corporate leadership, fintech acumen, professional auditing, and international trade mastery.",
        "labs": ["Bloomberg Business & Fintech Terminal Lab", "Tally & Corporate Accounting Studio"],
        "courses_offered": ["B.Com General", "B.Com Accounting & Finance", "B.Com Corporate Secretaryship", "M.Com"]
    },
    {
        "id": "mgmt",
        "name": "Department of Management Studies (BBA / MBA)",
        "hod": "Prof. A. Rajesh Khanna, MBA, Ph.D.",
        "hod_email": "hod.mgmt@rmcas.edu.in",
        "office": "Management Tower, 1st Floor, Room M-104",
        "description": "Nurturing modern entrepreneurs, managers, and strategic thinkers with case-study driven pedagogy.",
        "labs": ["Executive Case Analysis Boardroom", "Digital Marketing Simulation Lab"],
        "courses_offered": ["Bachelor of Business Administration (BBA)", "BBA in Digital Marketing & Logistics"]
    },
    {
        "id": "math",
        "name": "Department of Mathematics & Statistics",
        "hod": "Dr. Meenakshi Sundaram, M.Sc., Ph.D.",
        "hod_email": "hod.maths@rmcas.edu.in",
        "office": "Ramanujan Science Block, 2nd Floor, Room R-204",
        "description": "Strong foundation in Pure Mathematics, Applied Statistics, Discrete Maths, and Actuarial Science.",
        "labs": ["MATLAB & Statistical Computing Center"],
        "courses_offered": ["B.Sc. Mathematics", "M.Sc. Applied Mathematics & Big Data"]
    },
    {
        "id": "eng",
        "name": "Department of English & Foreign Languages",
        "hod": "Dr. Christina Samuel, M.A., Ph.D.",
        "hod_email": "hod.english@rmcas.edu.in",
        "office": "Humanities Wing, 1st Floor, Room H-102",
        "description": "Empowering communication skills, British & World literature, Journalism, and German/French training.",
        "labs": ["Language & Phonetics Audio-Visual Studio"],
        "courses_offered": ["B.A. English Literature", "Diploma in Business Communication & Foreign Languages"]
    }
]

COURSES = [
    {
        "code": "BCS",
        "name": "B.Sc. Computer Science",
        "department": "Department of Computer Science & Applications",
        "duration": "3 Years (6 Semesters)",
        "intake": 120,
        "annual_fee": "₹48,000 / year (₹24,000 per semester)",
        "eligibility": "Pass in Higher Secondary (+2) with Mathematics / Computer Science, minimum 55% aggregate.",
        "key_subjects": ["Data Structures & Algorithms", "Web Technologies", "Operating Systems", "Database Management", "Computer Networks", "Python & Machine Learning"],
        "syllabus_link": "/academics/syllabus/bsc-cs.pdf"
    },
    {
        "code": "BCA",
        "name": "Bachelor of Computer Applications (BCA)",
        "department": "Department of Computer Science & Applications",
        "duration": "3 Years (6 Semesters)",
        "intake": 120,
        "annual_fee": "₹52,000 / year (₹26,000 per semester)",
        "eligibility": "Pass in Higher Secondary (+2) with Mathematics or Business Mathematics or Computer Science.",
        "key_subjects": ["Java Programming", "Web Application Development", "Cloud Computing", "Software Engineering", "Mobile App Development", "Cyber Security Basics"],
        "syllabus_link": "/academics/syllabus/bca.pdf"
    },
    {
        "code": "BCOM-GEN",
        "name": "B.Com General",
        "department": "Department of Commerce & Professional Accounting",
        "duration": "3 Years (6 Semesters)",
        "intake": 180,
        "annual_fee": "₹42,000 / year (₹21,000 per semester)",
        "eligibility": "Pass in Higher Secondary (+2) with Commerce and Accountancy stream.",
        "key_subjects": ["Financial Accounting", "Corporate Law", "Income Tax Practice", "Cost Accounting", "Auditing", "Banking & Financial Services"],
        "syllabus_link": "/academics/syllabus/bcom.pdf"
    },
    {
        "code": "BBA",
        "name": "Bachelor of Business Administration (BBA)",
        "department": "Department of Management Studies",
        "duration": "3 Years (6 Semesters)",
        "intake": 120,
        "annual_fee": "₹46,000 / year (₹23,000 per semester)",
        "eligibility": "Pass in Higher Secondary (+2) in any stream with minimum 50% marks.",
        "key_subjects": ["Principles of Management", "Marketing Management", "Human Resource Management", "Financial Management", "Entrepreneurship Development"],
        "syllabus_link": "/academics/syllabus/bba.pdf"
    },
    {
        "code": "MSC-DS",
        "name": "M.Sc. Data Science & Analytics",
        "department": "Department of Computer Science & Applications",
        "duration": "2 Years (4 Semesters)",
        "intake": 40,
        "annual_fee": "₹65,000 / year",
        "eligibility": "Undergraduate degree in Computer Science, BCA, Mathematics, or Statistics with minimum 60% aggregate.",
        "key_subjects": ["Deep Learning", "Big Data Analytics", "Natural Language Processing", "Cloud DevOps", "Statistical Inference"],
        "syllabus_link": "/academics/syllabus/msc-ds.pdf"
    }
]

FACILITIES = [
    {
        "name": "Dr. A.P.J. Abdul Kalam Central Library",
        "timings": "Monday to Saturday: 8:00 AM – 8:00 PM (Extended till 9:30 PM during semester exam period)",
        "details": "Houses over 65,000 printed volumes, 12,000 e-journals (IEEE, Springer, Elsevier), 40 Kindle readers, air-conditioned study cubicles, and RFID self-checkout kiosks."
    },
    {
        "name": "Computing & High-Performance AI Labs",
        "timings": "8:30 AM – 6:30 PM",
        "details": "Over 450 networked Core i7/i9 desktop systems, 4 NVIDIA RTX GPU AI workstations, Gigabit optical fiber network, and 24/7 dedicated UPS backup."
    },
    {
        "name": "Campus Hostels (Ganga Block for Boys & Kaveri Block for Girls)",
        "timings": "Hostel Gate closes at 8:30 PM",
        "details": "Furnished 2-sharing and 3-sharing rooms with Wi-Fi, hygienic vegetarian & non-vegetarian mess, gym, solar water heaters, and 24/7 biometric security."
    },
    {
        "name": "Sports Arena & Gymnasium",
        "timings": "6:00 AM – 8:00 AM & 4:30 PM – 7:30 PM",
        "details": "Standard 400m athletic synthetic track, floodlit basketball court, badminton indoor courts, cricket nets, football ground, and certified physical instructors."
    },
    {
        "name": "Campus Cafeteria & Food Court ('The Canopy')",
        "timings": "7:30 AM – 7:00 PM",
        "details": "Offers fresh South Indian, North Indian, fresh juices, health salads, and bakery items prepared under FSSAI certified standards."
    },
    {
        "name": "Transport Service",
        "timings": "Departs 7:15 AM from 24 city routes, returns 4:45 PM",
        "details": "Fleet of 32 GPS-tracked college buses covering Chennai Central, Tambaram, Guindy, Porur, Velachery, Avadi, and Kanchipuram."
    }
]

PLACEMENTS = {
    "placement_percentage": "94.2% for 2025-2026 academic batch",
    "total_offers": "486 Offers across UG and PG programs",
    "highest_package": "₹14.50 LPA (Secured at Amazon Cloud Support)",
    "average_package": "₹5.20 LPA",
    "top_recruiters": [
        "Zoho Corporation", "Tata Consultancy Services (TCS)", "Infosys", 
        "Cognizant (CTS)", "Wipro", "Amazon", "Accenture", "HCL Tech", 
        "Federal Bank", "Kaar Technologies", "L&T Infotech"
    ],
    "placement_cell_head": "Prof. Anand Kumar, M.E., Head of Training & Corporate Relations",
    "placement_office": "Placement & Career Advancement Cell, Admin Block 2nd Floor, Room A-210"
}

ATTENDANCE_RULES = {
    "minimum_requirement": "75% overall attendance is strictly mandatory to appear for Semester End Examinations (University Regulations).",
    "condonation_bracket": "Between 65% and 74.9% may be condoned by the Principal only on verified medical grounds (with registered medical practitioner certificate submitted within 3 days).",
    "detention": "Below 65% attendance results in semester detention; student must repeat the semester courses.",
    "tracking": "Attendance is marked biometrically and period-wise on the RM Campus Portal by subject faculty."
}

FEE_STRUCTURE_SUMMARY = {
    "payment_deadline_odd_sem": "30th June (with grace period till 10th July)",
    "payment_deadline_even_sem": "10th December (with grace period till 20th December)",
    "payment_modes": "Online NetBanking / UPI via Student Portal, HDFC Bank Challan, or Campus Accounts Counter",
    "scholarships": [
        "RM Merit Scholarship: 100% tuition waiver for +2 board exam scorers above 95%",
        "Sports Excellence Award: 50% to 100% fee concession for state/national medalists",
        "First Graduate Scheme & Govt Post-Matric SC/ST/OBC Scholarships accepted"
    ]
}

TODAY_TIMETABLE_STUDENT = [
    {
        "time": "9:00 AM - 10:00 AM",
        "subject": "Data Structures",
        "code": "CS301",
        "venue": "Lab 1",
        "faculty": "Dr. K. Ranganathan",
        "color": "#3b82f6",
        "status": "Completed"
    },
    {
        "time": "11:00 AM - 12:00 PM",
        "subject": "Web Technologies",
        "code": "CS302",
        "venue": "Lab 2",
        "faculty": "Prof. Priya Dharshini",
        "color": "#10b981",
        "status": "Ongoing"
    },
    {
        "time": "2:00 PM - 3:00 PM",
        "subject": "Mathematics",
        "code": "MA301",
        "venue": "Room 204",
        "faculty": "Dr. Meenakshi Sundaram",
        "color": "#8b5cf6",
        "status": "Upcoming"
    }
]

UPCOMING_EXAMS_STUDENT = [
    {
        "subject": "Database Management",
        "code": "CS303",
        "date": "28 Nov 2026",
        "time": "10:00 AM - 1:00 PM",
        "venue": "Exam Hall 3 (Auditorium Wing)",
        "days_left": "10 days"
    },
    {
        "subject": "Operating Systems",
        "code": "CS304",
        "date": "02 Dec 2026",
        "time": "10:00 AM - 1:00 PM",
        "venue": "Exam Hall 1 (Science Block)",
        "days_left": "14 days"
    },
    {
        "subject": "Computer Networks",
        "code": "CS305",
        "date": "06 Dec 2026",
        "time": "10:00 AM - 1:00 PM",
        "venue": "Exam Hall 2 (Main Block)",
        "days_left": "18 days"
    }
]

RECENT_ANNOUNCEMENTS = [
    {
        "id": 1,
        "title": "College Fest 2026 - Registrations Open! 🎉",
        "date": "20 Nov 2026",
        "tag": "Events",
        "pinned": True,
        "body": "Annual Inter-Collegiate Cultural Festival 'Tarang 2026' will be held from Dec 18-20. Registrations for Battle of Bands, Choreonite, Hackathon, and Literary events are now live on the student dashboard."
    },
    {
        "id": 2,
        "title": "Internal Exam Schedule Released",
        "date": "18 Nov 2026",
        "tag": "Academics",
        "pinned": False,
        "body": "Model Examinations for Odd Semester (UG Sem III & Sem V) will commence from Nov 28, 2026. Hall tickets can be downloaded starting Nov 24 from the examinations tab."
    },
    {
        "id": 3,
        "title": "Library Timings Extended",
        "date": "15 Nov 2026",
        "tag": "Campus",
        "pinned": False,
        "body": "In view of upcoming semester examinations, Dr. APJ Abdul Kalam Central Library will remain open until 9:30 PM on all weekdays and Saturdays starting Monday."
    },
    {
        "id": 4,
        "title": "Zoho On-Campus Placement Drive for 2026 Batch",
        "date": "12 Nov 2026",
        "tag": "Placements",
        "pinned": False,
        "body": "Zoho Corporation will conduct an on-campus hiring drive for Software Developer and Quality Analyst roles on December 12, 2026. Eligible candidates must register before Nov 30."
    }
]

SAMPLE_STUDENT = {
    "name": "Elakiya Rajendran",
    "roll_no": "23BCS108",
    "reg_no": "25BCA019",
    "email": "elakiya.rajendran@student.rmcas.edu.in",
    "department": "B.Sc. Computer Science",
    "year": "3rd Year (Semester 5)",
    "section": "CS-A",
    "mentor": "Dr. K. Ranganathan (HOD CS)",
    "attendance_percentage": 92,
    "attendance_delta": "+2% ↑",
    "cgpa": 8.75,
    "cgpa_status": "Excellent!",
    "subjects_attendance": [
        {"code": "CS301", "name": "Data Structures & Algorithms", "attended": 47, "total": 50, "percentage": 94},
        {"code": "CS302", "name": "Web Technologies", "attended": 45, "total": 50, "percentage": 90},
        {"code": "CS303", "name": "Database Management Systems", "attended": 46, "total": 50, "percentage": 92},
        {"code": "CS304", "name": "Operating Systems", "attended": 48, "total": 50, "percentage": 96},
        {"code": "MA301", "name": "Discrete Mathematics", "attended": 44, "total": 50, "percentage": 88}
    ],
    "performance_trend": [
        {"semester": "Sem 1", "gpa": 8.20},
        {"semester": "Sem 2", "gpa": 8.45},
        {"semester": "Sem 3", "gpa": 8.60},
        {"semester": "Sem 4", "gpa": 8.90},
        {"semester": "Sem 5 (Current)", "gpa": 8.75}
    ]
}

FAQS = [
    {
        "q": "What are the college working hours?",
        "a": "Classes run Monday to Friday from 8:45 AM to 3:45 PM. Administrative offices are open until 4:45 PM."
    },
    {
        "q": "What is the minimum attendance required for semester exams?",
        "a": "A minimum of 75% aggregate attendance is strictly required to qualify for writing the semester examinations. Between 65% and 74% requires Principal condonation on medical grounds."
    },
    {
        "q": "How can I contact the Computer Science HOD?",
        "a": "Dr. K. Ranganathan, HOD Computer Science, can be reached at hod.cs@rmcas.edu.in or at Room T-302, Turing Tech Block, 3rd Floor during consultation hours (2:30 PM - 4:00 PM)."
    },
    {
        "q": "What is the fee payment deadline for this semester?",
        "a": "Even semester fees must be cleared by December 10, 2026. The grace period ends on December 20, 2026."
    },
    {
        "q": "When do the upcoming semester exams begin?",
        "a": "The upcoming semester examinations for RM College commence on 28th November 2026 with Database Management, followed by Operating Systems on 02 Dec 2026 and Computer Networks on 06 Dec 2026."
    },
    {
        "q": "What are the Central Library timings?",
        "a": "Dr. APJ Abdul Kalam Central Library operates from 8:00 AM to 8:00 PM normally, and timings are extended to 9:30 PM during semester exam periods."
    },
    {
        "q": "How do I register for College Fest 2026?",
        "a": "Registrations for 'Tarang 2026' (Dec 18-20) are open! You can register through the student portal Announcements section or by visiting the Student Affairs Council room at Ramanujan Block."
    }
]
