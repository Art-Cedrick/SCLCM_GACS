from django.urls import path, include
from . views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('project', ProjectViewset, basename='project')
router.register(r'routine_interview', RoutineInterviewViewset, basename='routine_interview')

urlpatterns = [
    path('api/', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
]
