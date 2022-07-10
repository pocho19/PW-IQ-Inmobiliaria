from django.db import models

# Create your models here.

class State( models.Model):
    name = models.CharField(max_length=25)
    price = models.IntegerField()
    location = models.CharField(max_length=25)
    owner = models.CharField(max_length=50)
    description = models.CharField(max_length=500)