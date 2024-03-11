from rest_framework import generics

from .models import Repairs
from .serializers import RepairSerializer


class RepairsList(generics.ListCreateAPIView):
    serializer_class = RepairSerializer

    def get_queryset(self):
        queryset = Repairs.objects.all()
        firstname = self.request.query_params.get('firstname', None)
        if firstname is not None:
            queryset = queryset.filter(firstname=firstname)
        return queryset


class RepairsDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RepairSerializer
    queryset = Repairs.objects.all()
