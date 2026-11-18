from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import uuid

# In-memory session store & preloaded demo profiles
DEMO_USERS = {
    "student": {
        "id": "std_001",
        "name": "Elakiya Rajendran",
        "role": "student",
        "identifier": "25BCA019",
        "email": "elakiya.rajendran@student.rmcas.edu.in",
        "program": "B.Sc. Computer Science",
        "year": "3rd Year (Sem V)",
        "roll_no": "23BCS108",
        "reg_no": "25BCA019",
        "avatar": "/avatar-elakiya.jpg",
        "cgpa": 8.75,
        "attendance": 92
    },
    "faculty": {
        "id": "fac_001",
        "name": "Dr. K. Ranganathan",
        "role": "faculty",
        "identifier": "FAC_CS_01",
        "email": "dr.ranganathan@rmcas.edu.in",
        "program": "HOD, Computer Science & Applications",
        "year": "Professor & Head",
        "roll_no": "EMP-4102",
        "reg_no": "FAC2011CS",
        "avatar": "/avatar-faculty.jpg",
        "cgpa": None,
        "attendance": 98
    },
    "admin": {
        "id": "adm_001",
        "name": "Campus Office Administrator",
        "role": "admin",
        "identifier": "ADMIN_RMCAS",
        "email": "admin@rmcas.edu.in",
        "program": "Controller & ERP Management Cell",
        "year": "Office of Academic Affairs",
        "roll_no": "ADM-001",
        "reg_no": "ADM-HQ",
        "avatar": "/avatar-admin.jpg",
        "cgpa": None,
        "attendance": 100
    }
}

class LoginView(APIView):
    def post(self, request):
        identifier = request.data.get('identifier', '').strip()
        password = request.data.get('password', '').strip()
        role = request.data.get('role', 'student').lower()

        # If empty, return error
        if not identifier or not password:
            return Response(
                {'error': 'Please enter your Register Number / Email and password.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Match demo user or create a session
        user_data = DEMO_USERS.get(role, DEMO_USERS['student']).copy()
        if '@' in identifier:
            user_data['email'] = identifier
        else:
            user_data['identifier'] = identifier

        token = f"rmcas_jwt_{uuid.uuid4().hex[:16]}"
        return Response({
            'message': 'Login successful',
            'token': token,
            'refresh_token': f"rmcas_refresh_{uuid.uuid4().hex[:16]}",
            'user': user_data
        })

class RegisterView(APIView):
    def post(self, request):
        name = request.data.get('name', '').strip()
        email = request.data.get('email', '').strip()
        reg_no = request.data.get('reg_no', '').strip()
        password = request.data.get('password', '').strip()
        program = request.data.get('program', 'B.Sc. Computer Science')

        if not name or not email or not password:
            return Response(
                {'error': 'Name, email, and password are required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        new_user = {
            'id': f"std_{uuid.uuid4().hex[:6]}",
            'name': name,
            'role': 'student',
            'identifier': reg_no or '26UG' + uuid.uuid4().hex[:4].upper(),
            'email': email,
            'program': program,
            'year': '1st Year',
            'roll_no': reg_no or '26CS' + uuid.uuid4().hex[:3].upper(),
            'reg_no': reg_no or '26UG001',
            'avatar': '/avatar-default.jpg',
            'cgpa': 8.50,
            'attendance': 95
        }

        token = f"rmcas_jwt_{uuid.uuid4().hex[:16]}"
        return Response({
            'message': 'Registration successful! Welcome to RM College.',
            'token': token,
            'user': new_user
        }, status=status.HTTP_201_CREATED)

class CurrentUserView(APIView):
    def get(self, request):
        # Default active student profile
        return Response(DEMO_USERS['student'])

class LogoutView(APIView):
    def post(self, request):
        return Response({'message': 'Logged out successfully.'})
