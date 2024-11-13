from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from ckeditor.fields import RichTextField

# Create your models here.
GRADE_LEVEL = [
    ('Grade 1', 'grade 1'),
    ('Grade 2', 'grade 2'),
    ('Grade 3', 'grade 3'),
    ('Grade 4', 'grade 4'),
    ('Grade 5', 'grade 5'),
    ('Grade 6', 'grade 6'),
    ('Grade 7', 'grade 7'),
    ('Grade 8', 'grade 8'),
    ('Grade 9', 'grade 9'),
    ('Grade 10', 'grade 10'),
    ('Grade 11', 'grade 11'),
    ('Grade 12', 'grade 12'),
    ('1st Year', '1st year'),
    ('2nd Year', '2nd year'),
    ('3rd Year', '3rd year'),
    ('4th Year', '4th year'),
]

class Profile(models.Model):
    USER_ROLE = [
        ('counselor', 'counselor'),
        ('psychometrician', 'psychometrician'),
        ('student', 'student')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, choices=USER_ROLE)

    def __str__(self):
        return f'{self.user} - {self.role}'

class User(models.Model):
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=255)

class RoutineInterview(models.Model):
    name = models.CharField(max_length=255)
    section = models.CharField(max_length=100)
    grade = models.CharField(max_length=100, choices=GRADE_LEVEL)
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

class IndividualRecordForm(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True)
    sr_code = models.CharField(max_length=100, blank=True, null=True, unique=True)
    lastname = models.CharField(max_length=255, blank=True, null=True)
    firstname = models.CharField(max_length=255, blank=True, null=True)
    middlename = models.CharField(max_length=255, blank=True, null=True)
    year = models.CharField(max_length=255, blank=True, null=True)
    section = models.CharField(max_length=255, blank=True, null=True)
    completeAddress = models.CharField(max_length=500, blank=True, null=True)

    fatherName = models.CharField(max_length=255, blank=True, null=True)
    fatherOccupation = models.CharField(max_length=255, blank=True, null=True)
    fatherContactNumber = models.CharField(max_length=255, blank=True, null=True)
    fatherEmailAddress = models.CharField(max_length=255, blank=True, null=True)

    motherName = models.CharField(max_length=255, blank=True, null=True)
    motherOccupation = models.CharField(max_length=255, blank=True, null=True)
    motherContactNumber = models.CharField(max_length=255, blank=True, null=True)
    motherEmailAddress = models.CharField(max_length=255, blank=True, null=True)

    parents = models.JSONField(default=list)

    living_with = models.JSONField(default=list)
    relationship = models.CharField(max_length=255, blank=True, null=True)

    club = models.CharField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.profile and hasattr(self, 'user') and self.user.is_authenticated:
            self.profile = Profile.objects.get(user=self.user)
        super().save(*args, **kwargs)

class CareerTracking(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    grade = models.CharField(max_length=255, blank=True, null=True)
    section = models.CharField(max_length=255, blank=True, null=True)
    
    cle = models.IntegerField()
    english = models.IntegerField()
    filipino = models.IntegerField()
    ap = models.IntegerField()
    science = models.IntegerField()
    math = models.IntegerField()
    mapeh = models.IntegerField()
    tle = models.IntegerField()
    computer = models.IntegerField()
    fl = models.IntegerField()

    academic_track = models.JSONField(default=list, blank=True, null=True)
    other_track = models.CharField(max_length=255, blank=True, null=True)
    tech_voc = models.JSONField(default=list, blank=True, null=True)
    other_techvoc = models.CharField(max_length=255, blank=True, null=True)
    preferredCourse = models.CharField(max_length=255, blank=True, null=True)

    medical_records = models.JSONField(default=list)
    specify = models.CharField(max_length=255, blank=True, null=True)
    academic_status = models.JSONField(default=list)
    psych_results = models.CharField(max_length=255)

class ConferenceForm(models.Model):
    type = models.JSONField(default=list, blank=True, null=True)
    name = models.CharField(max_length=255)
    date = models.DateField()
    grade = models.CharField(max_length=255)
    section = models.CharField(max_length=255)
    teachers = models.CharField(max_length=500)
    purpose = models.JSONField(default=list)
    others = models.CharField(max_length=255, blank=True, null=True)
    note = models.TextField()
    recommendations = models.TextField()

class Grade_Two(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=100)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.CharField(max_length=255)
    totalEQ = models.CharField(max_length=255, blank=True, null=True)
    verbalInterpretation = models.CharField(max_length=500)
    stanine = models.CharField(max_length=255)
    sa = models.CharField(max_length=255)
    mme = models.CharField(max_length=255)
    sm = models.CharField(max_length=255)
    e = models.CharField(max_length=255)
    hr = models.CharField(max_length=255)

class Grade_Three(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.CharField(max_length=255)
    raw_score = models.CharField(max_length=255)
    percentile = models.CharField(max_length=255)
    stanine = models.CharField(max_length=255)
    verbal_interpretation = models.CharField(max_length=255)

class Grade_Four(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255, blank=True, null=True)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.JSONField(default=list)
    conduct = models.JSONField(default=list)
    self_image = models.JSONField(default=list)
    worry = models.JSONField(default=list)
    neg_perl_rel = models.JSONField(default=list)
    antisocial = models.JSONField(default=list)
    lie = models.JSONField(default=list)
    problem_index = models.JSONField(default=list)
    c = models.CharField(max_length=255)
    si = models.CharField(max_length=255)
    w = models.CharField(max_length=255)
    npr = models.CharField(max_length=255)
    a_s = models.CharField(max_length=255)
    l = models.CharField(max_length=255)
    pi = models.CharField(max_length=255)

class Grade_Five(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.JSONField(default=list)
    raw_score = models.CharField(max_length=255)
    percentile = models.CharField(max_length=255)
    stanine = models.CharField(max_length=255)
    verbal_interpretation = models.JSONField(default=list)

class Grade_Six(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.JSONField(default=list)
    raw_score = models.CharField(max_length=255)
    percentile = models.CharField(max_length=255)
    stanine = models.CharField(max_length=255)
    verbal_interpretation = models.JSONField(default=list)

class Grade_Seven(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255, choices=GRADE_LEVEL)
    section = models.JSONField(default=list)
    tot = models.JSONField(default=list)
    beh = models.JSONField(default=list)
    inte = models.JSONField(default=list)
    phy = models.JSONField(default=list)
    fre = models.JSONField(default=list)
    popularity = models.JSONField(default=list)
    hap = models.JSONField(default=list)
    beh_num = models.CharField(max_length=255, blank=True, null=True)
    int_num = models.CharField(max_length=255, blank=True, null=True)
    phy_num = models.CharField(max_length=255, blank=True, null=True)
    fre_num = models.CharField(max_length=250, blank=True, null=True)
    popularity_num = models.CharField(max_length=250, blank=True, null=True)
    hap_num = models.CharField(max_length=250, blank=True, null=True)

class Grade_Eight(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255, blank=True, null=True)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.JSONField(default=list)
    conduct = models.JSONField(default=list)
    self_image = models.JSONField(default=list)
    worry = models.JSONField(default=list)
    neg_perl_rel = models.JSONField(default=list)
    antisocial = models.JSONField(default=list)
    lie = models.JSONField(default=list)
    problem_index = models.JSONField(default=list)
    c = models.CharField(max_length=255)
    si = models.CharField(max_length=255)
    w = models.CharField(max_length=255)
    npr = models.CharField(max_length=255)
    a_s = models.CharField(max_length=255)
    l = models.CharField(max_length=255)
    pi = models.CharField(max_length=255)

class Grade_Nine(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255, blank=True, null=True)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.JSONField(default=list)
    top_one = models.JSONField(default=list)
    top_two = models.JSONField(default=list)
    top_three = models.JSONField(default=list)
    self_control = models.JSONField(default=list)
    mas_fem = models.JSONField(default=list)
    status = models.JSONField(default=list)
    infrequency = models.JSONField(default=list)
    acquiescence = models.JSONField(default=list)
    r = models.CharField(max_length=250)
    i = models.CharField(max_length=250)
    a = models.CharField(max_length=250)
    s = models.CharField(max_length=250)
    e = models.CharField(max_length=250)
    c = models.CharField(max_length=250)
    se = models.CharField(max_length=250)
    mf = models.CharField(max_length=250)
    st = models.CharField(max_length=250)
    inf = models.CharField(max_length=250)
    ac = models.CharField(max_length=250)

class Grade_Ten(models.Model):
    name = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    sex = models.JSONField(default=list)
    gradeLevel = models.CharField(max_length=255)
    section = models.JSONField(default=list)
    raw_score = models.CharField(max_length=255)
    percentile = models.CharField(max_length=255)
    stanine = models.CharField(max_length=255)
    verbal_interpretation = models.JSONField(default=list)

class Resource(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    author = models.ManyToManyField(get_user_model(), related_name='resource')
    attachment = models.FileField(upload_to='resource/', blank=True, null=True)


    def __str__(self) -> str:
        return self.title

class Appointment(models.Model):
    PURPOSE_CHOICES = [
        ('Routine Interview', 'Routine Interview'),
        ('Referral', 'Referral'),
        ('Individual Planning', 'Individual Planning'),
        ('Counseling', 'Counseling'),
        ('Others', 'Others'),
    ]

    sr_code = models.ForeignKey(IndividualRecordForm, on_delete=models.CASCADE, related_name='appointments', default=1)
    counselor = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='counselor_appointments', default=1)
    name = models.CharField(max_length=255)
    grade = models.CharField(max_length=50)
    section = models.CharField(max_length=50)
    date = models.DateField()
    purpose = models.CharField(max_length=50, choices=PURPOSE_CHOICES)
    other_purpose = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Counselor: {self.counselor} - Student: {self.name} on {self.date}"


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