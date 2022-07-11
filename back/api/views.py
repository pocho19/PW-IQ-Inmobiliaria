import generics as generics
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics

from api.models import State
from api.serializers import StateSerializer, RegisterSerializer


class StateViewSet(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    # queryset = State.objects.filter(price__gt)(name__contains=)(location__exact=)
    queryset = State.objects.all()


class SalesViewSet(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    queryset = State.objects.filter(sale=True)


class RentalsViewSet(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    queryset = State.objects.filter(rent=True)


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    # no hace falta queryset porque es un POST
