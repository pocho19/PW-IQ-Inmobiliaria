from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import State


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = "__all__"


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "password", "is_superuser"]  # "__all__"

    def create(self, validated_data):  # over raid password to encrypt
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            is_superuser=validated_data['is_superuser']
        )
        return user
