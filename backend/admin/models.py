from django.db import models

# Create your models here.


class User(models.Model):
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150)
    email=models.EmailField(max_length=150,unique=True)
    password=models.CharField(max_length=20)
    contact_number=models.BigIntegerField(max_length=10)
    role=models.CharField(max_length=50)
    isAccountActive=models.CharField(max_length=50)
    createdOn=models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.first_name + " " +self.last_name



