# Generated by Django 5.0.3 on 2024-11-02 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0041_alter_resource_author'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('grade', models.CharField(max_length=50)),
                ('section', models.CharField(max_length=50)),
                ('date', models.DateField()),
                ('purpose', models.CharField(choices=[('Routine Interview', 'Routine Interview'), ('Referral', 'Referral'), ('Individual Planning', 'Individual Planning'), ('Counseling', 'Counseling'), ('Others', 'Others')], max_length=50)),
                ('other_purpose', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]