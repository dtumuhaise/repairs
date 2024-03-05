from rest_framework import generics

from .models import Customers, Guitars
from .serializers import CustomersSerializer, GuitarsSerializer


class CustomerList(generics.ListCreateAPIView):
    serializer_class = CustomersSerializer

    def get_queryset(self):
        queryset = Customers.objects.all()
        firstname = self.request.query_params.get('firstname', None)
        if firstname is not None:
            queryset = queryset.filter(firstname=firstname)
        return queryset


class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CustomersSerializer
    queryset = Customers.objects.all()


class GuitarList(generics.ListCreateAPIView):
    queryset = Guitars.objects.all()
    serializer_class = GuitarsSerializer


class GuitarDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GuitarsSerializer
    queryset = Guitars.objects.all()
