from django.urls import path
from .views import RepairsList, RepairsDetail

urlpatterns = [
    path('repairs/', RepairsList.as_view()),
    path('repairs/<int:pk>/', RepairsDetail.as_view()),
]
