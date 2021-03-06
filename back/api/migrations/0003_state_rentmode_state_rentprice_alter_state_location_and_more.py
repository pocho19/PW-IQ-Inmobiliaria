# Generated by Django 4.0.6 on 2022-07-10 04:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_state_rent_state_sale_alter_state_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='state',
            name='rentMode',
            field=models.CharField(default='Mensual', max_length=20),
        ),
        migrations.AddField(
            model_name='state',
            name='rentPrice',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='state',
            name='location',
            field=models.CharField(default='Rosario', max_length=25),
        ),
        migrations.AlterField(
            model_name='state',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
