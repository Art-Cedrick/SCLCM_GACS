from rest_framework import serializers
from .models import *

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'start_date', 'end_date', 'comments', 'status')

class RoutineInterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineInterview
        fields = '__all__'