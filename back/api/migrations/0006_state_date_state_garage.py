# Generated by Django 4.0.6 on 2022-07-10 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_state_bathrooms_state_bedrooms_state_rooms_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='state',
            name='date',
            field=models.DateTimeField(default='2021-12-02'),
        ),
        migrations.AddField(
            model_name='state',
            name='garage',
            field=models.IntegerField(default=0),
        ),
    ]
