from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Hash the password automatically with create_user
        user = User.objects.create_user(**validated_data)
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']  # Include any other fields you want

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'start_date', 'end_date', 'comments', 'status')

class RoutineInterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineInterview
        fields = '__all__'

class IndividualRecordFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualRecordForm
        fields = '__all__'

class CareerTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerTracking
        fields = '__all__'  

class ConferenceFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConferenceForm
        fields = '__all__'  

class KinderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kinder
        fields = '__all__'

class Grade_OneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_One
        fields = '__all__'

class Grade_TwoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Two
        fields = '__all__'

class Grade_ThreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Three
        fields = '__all__'        

class Grade_FourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Four
        fields = '__all__'       

class Grade_FiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Five
        fields = '__all__'  

class Grade_SixSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Six
        fields = '__all__'  

class Grade_SevenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Seven
        fields = '__all__'  

class Grade_EightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Eight
        fields = '__all__'  

class Grade_NineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Nine
        fields = '__all__'  

class Grade_TenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Ten
        fields = '__all__'  

class Grade_ElevenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Eleven
        fields = '__all__'  

class Grade_TwelveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade_Twelve
        fields = '__all__'  

class First_YearSerializer(serializers.ModelSerializer):
    class Meta:
        model = First_Year
        fields = '__all__'  

class Second_YearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Second_Year
        fields = '__all__'  

class Third_YearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Third_Year
        fields = '__all__'  

class Fourth_YearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fourth_Year
        fields = '__all__'  

class ResourceSerializer(serializers.ModelSerializer):
    author = UserSerializer(many=True, read_only=True)  # Nested serializer for author

    class Meta:
        model = Resource
        fields = '__all__'  # Include all fields, author will be populated automatically
        extra_kwargs = {
            'author': {'required': False},  # This ensures the author field is optional
        }

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        read_only_fields = ['counselor']

    def validate(self, data):
        # Example: Ensure 'other_purpose' is only required if 'purpose' is 'Others'
        if data.get('purpose') == 'Others' and not data.get('other_purpose'):
            raise serializers.ValidationError("Other purpose must be specified.")
        return data