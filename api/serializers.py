from rest_framework import serializers
from .models import Repairs


class RepairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repairs
        fields = '__all__'
