from django.db import models


# Create your models here.
#  id = models.BigAutoField(auto_created=True, primary_key=True, serialize=False,verbose_name='ID')

class State(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50, default='Ejemplo 123')
    location = models.CharField(max_length=25, default='Rosario')
    postCode = models.IntegerField(default=2000)
    type = models.CharField(max_length=25, default='Otra')
    available = models.BooleanField(default=True)
    sale = models.BooleanField(default=True)
    price = models.IntegerField(default=0)
    rent = models.BooleanField(default=False)
    rentPrice = models.IntegerField(default=0)
    rentMode = models.CharField(max_length=20, default='Mensual')
    owner = models.CharField(max_length=50)
    description = models.CharField(max_length=500, default='info')
    sqrMeterBuilt = models.IntegerField(default=1)
    sqrMeterCovered = models.IntegerField(default=1)
    sqrMeterLand = models.IntegerField(default=1)
    rooms = models.IntegerField(default=1)
    bedrooms = models.IntegerField(default=1)
    bathrooms = models.IntegerField(default=1)
    garage = models.IntegerField(default=0)
    date = models.DateTimeField(default='2021-12-02')


# class Activity(models.Model):
#     name = models.CharField(max_length=20)
#     state = models.ForeignKey(State, on_delete=models.SET_NULL, null=True)
    # on_delete=models.CASCADE --> tambien se borra la activity
    # on_delete=models.SET_NULL, null=True --> solo transforma el campo state en null
