from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import State


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = "__all__"

    # COMPORTAMIENTO EVALUADO ANTES DE CREAR EL OBJETO
    # def create(self, validated_data):
    #     state = super(StateSerializer, self).create(validated_data)
    #     State.objects.create(
    #         name='COPY>>>' + validated_data['name'],
    #         description='COPY>>>' + validated_data['description']
    #     )
    #     return state


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    is_superuser = serializers.BooleanField(required=True)
    first_name = serializers.CharField(min_length=2)
    last_name = serializers.CharField(allow_blank=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "password", "is_superuser", "first_name", "last_name"]  # "__all__"

    def create(self, validated_data):  # over raid password to encrypt
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            is_superuser=validated_data['is_superuser'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        return user


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["username", "id", "is_superuser"]
