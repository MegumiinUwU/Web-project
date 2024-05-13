from django.shortcuts import render
from django.http import HttpResponse
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
    return render(request, 'pages/Profile.html')


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
