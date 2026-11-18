from django.contrib import admin
from django.urls import path, re_path
from django.http import HttpResponse, FileResponse
from pathlib import Path
from django.conf import settings
from accounts.views import LoginView, RegisterView, CurrentUserView, LogoutView
from college.views import (
    CollegeInfoView, DepartmentListView, CourseListView, FacilityListView,
    PlacementView, AnnouncementListView, FaqListView, TimetableView, UpcomingExamsView
)
from chat.views import (
    ChatEndpointView, ConversationListView, ConversationDetailView, MessageFeedbackView
)
from dashboard.views import DashboardSummaryView

def serve_frontend_spa(request):
    index_file = settings.FRONTEND_DIR / 'index.html'
    if index_file.exists():
        return FileResponse(open(index_file, 'rb'), content_type='text/html')
    return HttpResponse(
        "<h1>RM College of Arts and Science API is Running.</h1>"
        "<p>Frontend is building. Please visit /api/dashboard/summary/ or build frontend.</p>"
    )

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Auth Endpoints (SRS 4.1)
    path('api/auth/login/', LoginView.as_view(), name='login'),
    path('api/auth/register/', RegisterView.as_view(), name='register'),
    path('api/auth/logout/', LogoutView.as_view(), name='logout'),
    path('api/auth/user/', CurrentUserView.as_view(), name='current_user'),

    # Dashboard Summary Endpoint (SRS 4.2)
    path('api/dashboard/summary/', DashboardSummaryView.as_view(), name='dashboard_summary'),

    # Chatbot Endpoints (SRS 4.3 & 4.4)
    path('api/chat/', ChatEndpointView.as_view(), name='chat_send'),
    path('api/conversations/', ConversationListView.as_view(), name='conversations_list'),
    path('api/conversations/<uuid:pk>/', ConversationDetailView.as_view(), name='conversation_detail'),
    path('api/messages/<uuid:pk>/feedback/', MessageFeedbackView.as_view(), name='message_feedback'),

    # College Knowledge Base Endpoints (SRS 4.5)
    path('api/college/info/', CollegeInfoView.as_view(), name='college_info'),
    path('api/college/departments/', DepartmentListView.as_view(), name='college_departments'),
    path('api/college/courses/', CourseListView.as_view(), name='college_courses'),
    path('api/college/facilities/', FacilityListView.as_view(), name='college_facilities'),
    path('api/college/placements/', PlacementView.as_view(), name='college_placements'),
    path('api/college/announcements/', AnnouncementListView.as_view(), name='college_announcements'),
    path('api/college/faqs/', FaqListView.as_view(), name='college_faqs'),
    path('api/college/timetable/', TimetableView.as_view(), name='college_timetable'),
    path('api/college/exams/', UpcomingExamsView.as_view(), name='college_exams'),

    # SPA Fallback for React routing
    re_path(r'^(?!api/|admin/|assets/).*$', serve_frontend_spa),
]
