from django.db import models

# Create your models here.
class Cuisine(models.Model):
    id = models.BigAutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    customer_rating = models.IntegerField(null=True, blank=True, default=0)
    distance = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
