from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from django.db import connection, transaction
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator

# Create your views here.
class StudentListView(APIView):
    def get(self, request):
        students = IndividualRecordForm.objects.all().values("sr_code", "name")  # or any other field
        return Response(students)

class setPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class BaseViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    pagination_class = setPagination    

    def close_connection(self):
        """Close any existing database connections to avoid stale data."""
        connection.close()

    @method_decorator(never_cache)
    def list(self, request):
        self.close_connection()
        queryset = self.queryset.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    @method_decorator(never_cache)
    def create(self, request):
        self.close_connection()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            with transaction.atomic():
                serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    @method_decorator(never_cache)
    def retrieve(self, request, pk=None):
        self.close_connection()
        project = get_object_or_404(self.queryset, pk=pk)
        project.refresh_from_db()
        serializer = self.serializer_class(project)
        return Response(serializer.data)

    @method_decorator(never_cache)
    def update(self, request, pk=None):
        self.close_connection()
        project = get_object_or_404(self.queryset, pk=pk)
        project.refresh_from_db()
        serializer = self.serializer_class(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    @method_decorator(never_cache)
    def destroy(self, request, pk=None):
        self.close_connection()
        project = get_object_or_404(self.queryset, pk=pk)
        project.refresh_from_db()
        project.delete()
        return Response(status=204)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            # User is authenticated, return token and role
            token, created = Token.objects.get_or_create(user=user)
            user_role = user.profile.role  # Assuming you have a `role` field in a `profile` model
            return Response({'token': token.key, 'role': user_role}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
class RoutineInterviewViewset(BaseViewSet):
    queryset = RoutineInterview.objects.all()
    serializer_class = RoutineInterviewSerializer
    
class IndividualRecordFormViewset(BaseViewSet):
    queryset = IndividualRecordForm.objects.order_by('-id')
    serializer_class = IndividualRecordFormSerializer

    def perform_create(self, request, *args, **kwargs):
        self.close_connection()

        # Retrieve the logged-in user's profile
        try:
            user_profile = Profile.objects.get(user=request.user)
        except Profile.DoesNotExist:
            return Response({"error": "User profile not found."}, status=status.HTTP_404_NOT_FOUND)

        # Create the serializer with data and manually set the profile
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            with transaction.atomic():
                # Save the instance with the logged-in user's profile
                serializer.save(profile=user_profile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CareerTrackingViewset(BaseViewSet):
    queryset = CareerTracking.objects.order_by('-id')
    serializer_class = CareerTrackingSerializer 

class ConferenceFormViewset(BaseViewSet):
    queryset = ConferenceForm.objects.order_by('-id')
    serializer_class = ConferenceFormSerializer

class Grade_TwoViewset(BaseViewSet):
    queryset = Grade_Two.objects.order_by('-id')
    serializer_class = Grade_TwoSerializer  
    
class Grade_ThreeViewset(BaseViewSet):
    queryset = Grade_Three.objects.order_by('-id')
    serializer_class = Grade_ThreeSerializer

class Grade_FourViewset(BaseViewSet):
    queryset = Grade_Four.objects.order_by('-id')
    serializer_class = Grade_FourSerializer

class Grade_FiveViewset(BaseViewSet):
    queryset = Grade_Five.objects.order_by('-id')
    serializer_class = Grade_FiveSerializer

class Grade_SixViewset(BaseViewSet):
    queryset = Grade_Six.objects.order_by('-id')
    serializer_class = Grade_SixSerializer

class Grade_SevenViewset(BaseViewSet):
    queryset = Grade_Seven.objects.order_by('-id')
    serializer_class = Grade_SevenSerializer

class Grade_EightViewset(BaseViewSet):
    queryset = Grade_Eight.objects.order_by('-id')
    serializer_class = Grade_EightSerializer

class Grade_NineViewset(BaseViewSet):
    queryset = Grade_Nine.objects.order_by('-id')
    serializer_class = Grade_NineSerializer

class Grade_TenViewset(BaseViewSet):
    queryset = Grade_Ten.objects.order_by('-id')
    serializer_class = Grade_TenSerializer

class ProjectViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Project.objects.order_by('-id')
    serializer_class = ProjectSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=404)

    def retrieve(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project)
        return Response(serializer.data)

    def update(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=404)

    def destroy(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        project.delete()
        return Response(status=204)
    
class ResourceViewSet(BaseViewSet):

    queryset = Resource.objects.order_by('-created', '-modified')
    serializer_class = ResourceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        print(type(request.user))  # Debug: Should print <class 'django.contrib.auth.models.User'>
        print(request.user)  # Debug: Confirm the user object

        try:
            with transaction.atomic():  # Ensure atomic transaction
                # Create the resource instance
                resource = Resource.objects.create(
                    title=request.data.get('title'),
                    content=request.data.get('content'),
                )

                # Add the logged-in user to the author field
                resource.author.add(request.user)  

            return Response(
                {"detail": "Resource created successfully."},
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            print(f"Error: {e}")  # Log error for debugging
            return Response(
                {"detail": "Something went wrong."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        
class AppointmentView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user_profile = Profile.objects.get(user=request.user)
        if user_profile.role == 'counselor':
            appointments = Appointment.objects.filter(counselor=user_profile)
        elif user_profile.role == 'student':
            # Filter appointments based on the student number associated with the user's profile
            appointments = Appointment.objects.filter(sr_code__student_number=user_profile.IndividualRecordForm.sr_code)
        else: 
            return Response({'error': 'Access denied'}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        user_profile = Profile.objects.get(user=request.user)
        if user_profile.role != 'counselor':
            return Response({'error': 'Only counselors can create schedules'}, status=status.HTTP_403_FORBIDDEN)
        
        # Extract student details from the submitted form and create appointment
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(counselor=user_profile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
