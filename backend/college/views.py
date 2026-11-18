from rest_framework.views import APIView
from rest_framework.response import Response
from .data import (
    COLLEGE_INFO, DEPARTMENTS, COURSES, FACILITIES,
    PLACEMENTS, ATTENDANCE_RULES, FEE_STRUCTURE_SUMMARY,
    TODAY_TIMETABLE_STUDENT, UPCOMING_EXAMS_STUDENT,
    RECENT_ANNOUNCEMENTS, SAMPLE_STUDENT, FAQS
)

class CollegeInfoView(APIView):
    def get(self, request):
        return Response(COLLEGE_INFO)

class DepartmentListView(APIView):
    def get(self, request):
        return Response(DEPARTMENTS)

class CourseListView(APIView):
    def get(self, request):
        dept = request.query_params.get('department')
        if dept:
            filtered = [c for c in COURSES if dept.lower() in c['department'].lower()]
            return Response(filtered)
        return Response(COURSES)

class FacilityListView(APIView):
    def get(self, request):
        return Response(FACILITIES)

class PlacementView(APIView):
    def get(self, request):
        return Response(PLACEMENTS)

class AnnouncementListView(APIView):
    def get(self, request):
        return Response(RECENT_ANNOUNCEMENTS)

class FaqListView(APIView):
    def get(self, request):
        return Response(FAQS)

class TimetableView(APIView):
    def get(self, request):
        return Response({
            'today': TODAY_TIMETABLE_STUDENT,
            'academic_year': '2026-2027',
            'semester': 'Odd Semester (V)',
            'student': SAMPLE_STUDENT['name']
        })

class UpcomingExamsView(APIView):
    def get(self, request):
        return Response({
            'exams': UPCOMING_EXAMS_STUDENT,
            'hall_ticket_status': 'Available for Download',
            'student': SAMPLE_STUDENT['name']
        })
