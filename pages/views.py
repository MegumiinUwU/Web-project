from django.shortcuts import render
from django.http import HttpResponse
from .models import Profile
from django.contrib import messages
# from django.contrib.auth.decorators import login_required

# Create your views here.




def bookListing(request):
    return render(request, 'pages/Book Listing.html')


def bookList(request):
    return render(request, 'pages/BookList.html')


def borrowBooks(request):
    return render(request, 'pages/BorrowBooks.html')


def borrowedBooks(request):
    return render(request, 'pages/Borrowed Books.html')


def homePage(request):
    return render(request, 'pages/HomePage.html') 


def inventory(request):
    return render(request, 'pages/Inventory.html')


def profile(request):
    profile=Profile.objects.get(username='Ronii')
    if request.method == 'POST':
        old_password = request.POST.get('oldpassword')
        new_password = request.POST.get('newpassword')
        confirm_password = request.POST.get('confirmpassword')
     

        if old_password == profile.password:
            profile_picture = request.FILES.get('profilePicture')
            if profile_picture:
                profile.image.save(profile_picture.name, profile_picture)
            
            if new_password == confirm_password:
                 if new_password:
                    profile.password = new_password
                    profile.username = request.POST.get('username')
                    profile.email = request.POST.get('email')
                    profile.phoneNumber = request.POST.get('phoneNumber')
                    profile.date = request.POST.get('dateOfBirth')
                    profile.save()
            else:
                messages.error(request, 'New password and confirmation do not match.')
        
        else:
            messages.error(request, 'The password you entered is incorrect.')
  
    return render(request, 'pages/Profile.html',{"profile":profile})
 

def addBook(request):
    return render(request, 'pages/addBook.html')


def login(request):
    return render(request,'pages/login.html')


def search(request):
    return render(request, 'pages/search.html')


def signup(request):
    return render(request, 'pages/signup.html')


def wishlist(request):
    return render(request, 'pages/wishlist.html')
