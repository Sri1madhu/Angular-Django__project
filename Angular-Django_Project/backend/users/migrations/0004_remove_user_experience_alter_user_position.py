# Generated by Django 4.2.3 on 2023-07-21 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_experience_alter_user_position'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='Experience',
        ),
        migrations.AlterField(
            model_name='user',
            name='position',
            field=models.CharField(default='value', max_length=255),
        ),
    ]