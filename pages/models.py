from django.db import models
from . import regex

# Create your models here.

regex.check("20230607@stud.fci-cu.edu.eg")
class Profile(models.Model):
     image=models.ImageField(upload_to="photos/%y/%m/%d" , default="PfP.jpg")
     username = models.CharField(max_length=50)
     password = models.CharField(max_length=50)
     email = models.CharField(max_length=50, default="user@gmail.com")
     phoneNumber=models.IntegerField(default=111111111111)
     date = models.DateField(null=True,blank=True)

