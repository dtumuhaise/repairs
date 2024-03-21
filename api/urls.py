from django.contrib import admin
from django.urls import path
from .views import repairs_list, repairs_detail

urlpatterns = [
    path('repairs/', repairs_list.as_view()),
    path('repairs/<int:pk>/', repairs_detail.as_view()),
]
