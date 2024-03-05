from rest_framework import serializers
from .models import Customers, Guitars


class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ['id', 'firstname', 'lastname', 'phone']


class GuitarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guitars
        fields = ['id', 'customer', 'guitar_type', 'brand', 'model',
                  'serial_number', 'color', 'date_of_entry', 'repair_notes', 'repair_status']
