# Generated by Django 5.0.3 on 2024-11-05 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0043_appointment_created_at_careertracking_grade_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='careertracking',
            name='grade',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='careertracking',
            name='section',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]