from django.urls import path
from .views import ai,hello

urlpatterns = [
    path("",hello),
    path("process", ai)
]