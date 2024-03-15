from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('repairs/', views.repairs_list),
    path('repairs_detail/<int:pk>/', views.repairs_detail),
]
