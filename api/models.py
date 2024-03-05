from django.db import models


class Customers(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.firstname + ' ' + self.lastname


class Guitars(models.Model):
    customer = models.ForeignKey(Customers, on_delete=models.CASCADE)
    guitar_type = models.CharField(max_length=50)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    serial_number = models.CharField(max_length=100, blank=True)
    color = models.CharField(max_length=50)
    repair_notes = models.TextField(default='')
    date_of_entry = models.DateField()
    repair_status = models.CharField(max_length=50, default='Pending')

    def __str__(self):
        return self.brand + ' ' + self.model + ' ' + self.repair_status
