from django.contrib.auth import get_user_model
from rest_framework import serializers
# from rest_framework.exceptions import ValidationError

from api.models import State


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = "__all__"

    # COMPARTMENT
    # BEHAVIOR EVALUATED BEFORE CREATING THE OBJECT
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
        fields = [
            "username",
            "password",
            "is_superuser",
            "first_name",
            "last_name"
        ]  # "__all__"

    def create(self, validated_data):  # over raid password to encrypt
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            is_superuser=validated_data['is_superuser'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        return user

    # validate username field
    # def validate_username(self, username):
    #     if username == 'no':
    #         raise ValidationError("username not valid")
    #     return username


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["username", "id", "is_superuser", 'last_name', 'first_name', 'email']


# class ActivitySerializer(serializers.ModelSerializer):
#     state = StateSerializer()   # in the 'state' field replace the 'id' with the 'state' object
#     state_serialized = StateSerializer(source='state')  # add another field 'state_serialized' with the 'state' object
#     custom_field = serializers.SerializerMethodField()  # add a custom field --> get_custom_field()
#
#     class Meta:
#         model = Activity
#         fields = ["___all__"]
#
#     def get_custom_field(self,activity):
#         return activity.name + ' - mod'
