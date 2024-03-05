from django.urls import path
from .views import CustomerList, CustomerDetail, GuitarList, GuitarDetail

urlpatterns = [
    path('customers/', CustomerList.as_view()),
    path('customers/<int:pk>/', CustomerDetail.as_view()),
    path('guitars/', GuitarList.as_view()),
    path('guitars/<int:pk>/', GuitarDetail.as_view()),
]
