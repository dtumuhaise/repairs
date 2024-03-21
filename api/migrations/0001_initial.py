# Generated by Django 4.2.11 on 2024-03-05 07:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Guitars',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('guitar_type', models.CharField(max_length=50)),
                ('brand', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('serial_number', models.CharField(blank=True, max_length=100)),
                ('color', models.CharField(max_length=50)),
                ('date_of_entry', models.DateField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.customers')),
            ],
        ),
        migrations.CreateModel(
            name='Repairs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('repair_notes', models.TextField()),
                ('repair_status', models.CharField(max_length=50)),
                ('guitar', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.guitars')),
            ],
        ),
    ]