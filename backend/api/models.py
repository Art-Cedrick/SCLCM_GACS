from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    USER_ROLE = [
        ('Counselor', 'counselor'),
        ('Psychometrician', 'psychometrician'),
        ('Student', 'student')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, choices=USER_ROLE)

class RoutineInterview(models.Model):
    name = models.CharField(max_length=255)
    section = models.CharField(max_length=100)
    grade = models.CharField(max_length=100)
    date = models.DateField()

    family_problem = models.JSONField(default=list, blank=True, null=True)
    family_details = models.TextField(blank=True, null=True)
    friends_problem = models.JSONField(default=list, blank=True, null=True)
    friends_details = models.TextField(blank=True, null=True)
    health_problem = models.JSONField(default=list, blank=True, null=True)
    health_details = models.TextField(blank=True, null=True)
    
    academic_problem = models.JSONField(default=list, blank=True, null=True)
    academic_details = models.TextField(blank=True, null=True)

    career_problem = models.JSONField(default=list, blank=True, null=True)
    career_details = models.TextField(blank=True, null=True)

    remarks = models.TextField(blank=True, null=True)
    recommendation = models.JSONField(default=list, blank=True, null=True)
    other_recommendation = models.CharField(max_length=255, blank=True, null=True)

class Project(models.Model):
    name = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    comments = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name