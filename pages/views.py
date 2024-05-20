from django.shortcuts import render
from django.http import HttpResponse
from .models import Profile
from django.contrib import messages
from django.core.paginator import Paginator
from django.urls import reverse
# from django.contrib.auth.decorators import login_required

# Create your views here.

books_dict = {
    'book1': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 2'},
    'book2': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book1': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book4': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book5': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book6': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book7': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book8': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book9': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book10': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book11': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book12': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 2'},
    'book13': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book14': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 2'},
    'book15': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book16': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 2'},
    'book17': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book18': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 2'},
    'book19': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book20': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 2'},
    'book21': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 2'},
    'book22': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book23': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book24': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book25': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book26': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book27': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book28': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book29': {'title': 'Book 1', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'C 1'},
    'book30': {'title': 'Book 2', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'C 2'},
    'book31': {'title': 'Book 31', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book32': {'title': 'Book 32', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 1'},
    'book33': {'title': 'Book 33', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book34': {'title': 'Book 34', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 1'},
    'book35': {'title': 'Book 35', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book36': {'title': 'Book 36', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 1'},
    'book37': {'title': 'Book 37', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book38': {'title': 'Book 38', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 1'},
    'book39': {'title': 'Book 39', 'author': 'Author 1', 'publication_date': '2023-01-01', 'category': 'Category 1'},
    'book40': {'title': 'Book 40', 'author': 'Author 2', 'publication_date': '2023-02-01', 'category': 'Category 1'},
}


def bookListing(request):
    category = request.POST.get('category', '') if request.method == 'POST' else request.GET.get('category', '')

    # Filter books based on category
    filtered_books = [book for book in books_dict.values() if category.lower() in book['category'].lower()]
    paginator = Paginator(filtered_books, 8)  # Paginate filtered books
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    # Construct the URL for pagination links with the category parameter
    base_url = reverse('bookListing')
    if category:
        base_url += f'?category={category}'

    return render(request, 'pages/Book Listing.html', {'page_obj': page_obj, 'category': category, 'base_url': base_url})

def bookList(request):
    return render(request, 'pages/BookList.html')


def borrowBooks(request):
    return render(request, 'pages/BorrowBooks.html')


def borrowedBooks(request):
    category = request.POST.get('category', '') if request.method == 'POST' else request.GET.get('category', '')
    
    # Filter books based on category
    filtered_books = [book for book in books_dict.values() if category.lower() in book['category'].lower()]
    paginator = Paginator(filtered_books, 8)  # Paginate filtered books
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    # Construct the URL for pagination links with the category parameter
    base_url = reverse('bookListing')
    if category:
        base_url += f'?category={category}'

    return render(request, 'pages/Borrowed Books.html', {'page_obj': page_obj, 'category': category, 'base_url': base_url})


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
            profile.username = request.POST.get('username')
            profile.email = request.POST.get('email')
            profile.phoneNumber = request.POST.get('phoneNumber')
            profile.date = request.POST.get('dateOfBirth')
            if profile_picture:
                profile.image.save(profile_picture.name, profile_picture)
            profile.save()
            
            if new_password == confirm_password:
                 if new_password:
                    profile.password = new_password
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

def adminsview(request):
    return render(request, 'pages/adminsview.html')
