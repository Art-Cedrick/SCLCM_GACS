# Generated by Django 5.0.3 on 2024-10-14 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_grade_four'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade_four',
            name='age',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]