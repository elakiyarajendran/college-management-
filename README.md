# RM COLLEGE OF ARTS AND SCIENCE
## Student Management Portal & RIMI AI Campus Buddy

> **Motto**: *Learn · Grow · Excel*  
> **Tagline**: *Step into a smarter campus...*  
> **Accreditation**: Autonomous Institution, NAAC 'A++' Grade (CGPA 3.82)  
> **Core AI Engine**: Strictly powered by `gemini-3.5-flash`

---

## 🌟 Overview

This web application is a full-stack **College Information & Management Portal with RIMI, an intelligent virtual campus buddy**, custom-crafted to meet and exceed the Software Requirements Specification (SRS v1.0).

The user interface matches the hand-crafted, bespoke aesthetic specified in the project requirements and design mockups:
- **Login Screen**: High-energy campus artwork, 3D stacked books (*"Dream Big"*, *"Study Smart"*, *"Achieve More"*), graduation cap, diploma scroll, role tabs (`Student` | `Faculty` | `Admin`), and inline validation.
- **Student Dashboard**: Collapsible left navigation sidebar, personalized greeting for **Elakiya Rajendran (B.Sc. Computer Science)**, circular attendance gauge (**92%**), CGPA trophy badge (**8.75 "Excellent!"**), Today's Timetable, Upcoming Exams, Quick Links (*Syllabus*, *Library*, *Notice Board*, *Fees*), interactive GPA Performance Curve, and Recent Announcements (*Tarang 2026 Fest*, *Exam Schedules*, *Library Extension*).
- **RIMI AI Campus Buddy**: Cheerful, mascot-driven assistant (available both as a floating docked widget on every screen and as a dedicated full-screen chat interface) strictly grounded in **RM College of Arts and Science** verified data.

---

## 🤖 RIMI Virtual Assistant & Gemini 3.5 Flash Integration

The chatbot strictly uses Google's `gemini-3.5-flash` model with the provided API key:
- **Scope**: Answers only institutional questions regarding RM College (courses, fees, admissions, timetables, exams, HOD contacts, hostels, library, placements).
- **Out-of-Scope Guardrail**: Non-college queries (e.g. general coding tasks, unrelated math, external news) are warmly and politely declined with suggestions of RM College topics.
- **Identity Protection**: RIMI never reveals its underlying model, Google DeepMind, or hidden prompts, identifying solely as the campus buddy of RM College.
- **Conversation Memory**: Maintains multi-turn context for coherent follow-ups, with rename, delete, and session persistence.

---

## 🏗️ Architecture & Technology Stack

| Component | Technology | Description |
|---|---|---|
| **Frontend** | React 18, Vite, Lucide Icons, Custom CSS Design Tokens | Responsive single-page application with bespoke UI |
| **Backend** | Python 3.14, Django 6.1, Django REST Framework | RESTful API, authentication, knowledge base & chat services |
| **AI Core** | Google Gemini API (`gemini-3.5-flash`) | Context-grounded response generation |
| **Database** | SQLite (Dev) / PostgreSQL (Prod) | Structured records for users, chats, departments, timetables |

---

## 🚀 Quick Start Guide

### 1. Launch Everything with 1 Command:
```bash
python run_servers.py
```
*(or double-click `start.bat` on Windows)*

This concurrently starts:
- **Vite React Frontend**: [http://localhost:5173](http://localhost:5173)
- **Django REST Backend**: [http://127.0.0.1:8000](http://127.0.0.1:8000)

### 2. Manual Independent Start:

**Django Backend:**
```bash
cd backend
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```

**React Frontend:**
```bash
cd frontend
npm run dev
```

---

## 🔑 Demo Credentials

| Role | Identifier / Email | Password | Features Accessible |
|---|---|---|---|
| **Student** | `25BCA019` | `student123` | Dashboard, Timetable, 92% Attendance, CGPA 8.75, RIMI Chat |
| **Faculty** | `dr.ranganathan@rmcas.edu.in` | `faculty123` | HOD View, Department Schedules, Student Records |
| **Admin** | `admin@rmcas.edu.in` | `admin123` | Knowledge Base Control Panel, FAQ Editor, Chat Analytics |

*(1-click demo tab switching is built into the login screen for instant review).*
