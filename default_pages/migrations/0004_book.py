# Generated by Django 5.0.6 on 2024-05-20 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('default_pages', '0003_alter_user_country_code_alter_user_profile_picture'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('first_author', models.CharField(max_length=100)),
                ('second_author', models.CharField(blank=True, max_length=100, null=True)),
                ('third_author', models.CharField(blank=True, max_length=100, null=True)),
                ('isbn', models.CharField(max_length=13)),
                ('publish_year', models.PositiveIntegerField()),
                ('genre', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('cover_image', models.ImageField(upload_to='book_covers/')),
            ],
        ),
    ]
