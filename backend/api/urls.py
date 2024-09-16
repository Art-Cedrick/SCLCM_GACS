from django.urls import path, include
from . views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('project', ProjectViewset, basename='project')

urlpatterns = [
    path('', home),
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login')
]
