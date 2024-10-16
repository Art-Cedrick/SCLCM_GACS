from django.db import models
from django.contrib.auth.models import User

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
        ('Counselor', 'counselor'),
        ('Psychometrician', 'psychometrician'),
        ('Student', 'student')
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, choices=USER_ROLE)

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
    lastname = models.CharField(max_length=255)
    firstname = models.CharField(max_length=255)
    middlename = models.CharField(max_length=255)
    year = models.CharField(max_length=255)
    section = models.CharField(max_length=255)
    completeAddress = models.CharField(max_length=500)

    fatherName = models.CharField(max_length=255)
    fatherOccupation = models.CharField(max_length=255)
    fatherContactNumber = models.CharField(max_length=255)
    fatherEmailAddress = models.CharField(max_length=255)

    motherName = models.CharField(max_length=255)
    motherOccupation = models.CharField(max_length=255)
    motherContactNumber = models.CharField(max_length=255)
    motherEmailAddress = models.CharField(max_length=255)

    parents = models.JSONField(default=list)

    living_with = models.JSONField(default=list)
    relationship = models.CharField(max_length=255, blank=True, null=True)

    club = models.CharField(max_length=500)

class CareerTracking(models.Model):
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