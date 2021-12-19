# Generated by Django 3.2.7 on 2021-09-04 14:08

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20210904_1924'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='saving_history',
            field=models.CharField(default='', max_length=1000000000000),
        ),
        migrations.AlterField(
            model_name='user',
            name='expenses',
            field=models.CharField(default='', max_length=100000),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_earning_add',
            field=models.DateTimeField(default=datetime.datetime(2021, 9, 4, 19, 38, 30, 596470)),
        ),
        migrations.AlterField(
            model_name='user',
            name='today',
            field=models.DateTimeField(default=datetime.datetime(2021, 9, 4, 19, 38, 30, 596470)),
        ),
    ]