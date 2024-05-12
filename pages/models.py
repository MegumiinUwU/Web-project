from django.db import models

# Create your models here.

class Profile(models.Model):
     image=models.ImageField(upload_to="photos/%y/%m/%d" , default="PfP.jpg")
     username = models.CharField(max_length=50)
     password = models.CharField(max_length=50)
     email = models.CharField(max_length=50, default="user@gmail.com")
     phoneNumber=models.IntegerField(default=111111111111)
     date = models.DateField(null=True,blank=True)
