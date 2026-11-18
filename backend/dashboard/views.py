from rest_framework.views import APIView
from rest_framework.response import Response
from college.data import (
    SAMPLE_STUDENT, TODAY_TIMETABLE_STUDENT, UPCOMING_EXAMS_STUDENT,
    RECENT_ANNOUNCEMENTS
)

class DashboardSummaryView(APIView):
    def get(self, request):
        return Response({
            "greeting": {
                "title": f"Hello, {SAMPLE_STUDENT['name'].split()[0]}!",
                "welcome_text": "Welcome back to RM College!",
                "quote": "“Dream bigger, achieve more.”"
            },
            "student": SAMPLE_STUDENT,
            "attendance": {
                "percentage": SAMPLE_STUDENT['attendance_percentage'],
                "delta": SAMPLE_STUDENT['attendance_delta'],
                "status": "Safe & Good Standing"
            },
            "cgpa": {
                "score": SAMPLE_STUDENT['cgpa'],
                "badge": SAMPLE_STUDENT['cgpa_status']
            },
            "timetable": TODAY_TIMETABLE_STUDENT,
            "upcoming_exams": UPCOMING_EXAMS_STUDENT,
            "quick_links": [
                {"title": "Syllabus", "icon": "BookOpen", "color": "blue", "action": "syllabus"},
                {"title": "Library", "icon": "Library", "color": "amber", "action": "library"},
                {"title": "Notice Board", "icon": "Bell", "color": "indigo", "action": "notices"},
                {"title": "Fees", "icon": "Receipt", "color": "orange", "action": "fees"}
            ],
            "performance": SAMPLE_STUDENT['performance_trend'],
            "announcements": RECENT_ANNOUNCEMENTS,
            "motivational_badge": {
                "headline": "Keep Going!",
                "subtitle": "You're doing great! 💜"
            }
        })
