# Generated by Django 5.0.3 on 2024-10-13 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_individualrecordform_completeaddress'),
    ]

    operations = [
        migrations.AlterField(
            model_name='individualrecordform',
            name='club',
            field=models.CharField(max_length=500),
        ),
    ]