# Generated by Django 4.2.11 on 2024-03-11 09:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_guitars_repair_notes_guitars_repair_status_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Repairs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
                ('guitar_type', models.CharField(max_length=50)),
                ('brand', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('serial_number', models.CharField(blank=True, max_length=100)),
                ('color', models.CharField(max_length=50)),
                ('repair_notes', models.TextField(default='')),
                ('date_of_entry', models.DateField()),
                ('repair_status', models.CharField(default='Pending', max_length=50)),
            ],
        ),
        migrations.RemoveField(
            model_name='guitars',
            name='customer',
        ),
        migrations.DeleteModel(
            name='Customers',
        ),
        migrations.DeleteModel(
            name='Guitars',
        ),
    ]