# Generated by Django 4.0.6 on 2022-07-10 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_state_address_state_postcode'),
    ]

    operations = [
        migrations.AddField(
            model_name='state',
            name='bathrooms',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='state',
            name='bedrooms',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='state',
            name='rooms',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='state',
            name='sqrMeterBuilt',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='state',
            name='sqrMeterCovered',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='state',
            name='sqrMeterLand',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='state',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]