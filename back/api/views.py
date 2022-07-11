# import generics as generics from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import State
from api.serializers import StateSerializer, RegisterSerializer, MeSerializer


class StateViewSet(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    # queryset = State.objects.filter(price__gt)(name__contains=)(location__exact=)
    queryset = State.objects.all()
    # PERMISSIONS
    # permission_classes = [IsAuthenticated]  # for all http request
    # def get_permissions(self):  # Only for POST
    #     if self.action == 'create':
    #         self.permission_classes = [IsAuthenticated]
    #     else:
    #         self.permission_classes = []
    #     return super(StateViewSet, self).get_permissions()


class SalesViewSet(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    queryset = State.objects.filter(sale=True)


class RentalsViewSet(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    queryset = State.objects.filter(rent=True)


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    # queryset is not needed because it is a POST


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    print(MeSerializer(request.user).data)  # request.user
    return Response(MeSerializer(request.user).data, 200)
