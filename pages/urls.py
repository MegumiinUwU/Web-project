from django.urls import path
from . import views

urlpatterns = [
    path('bookListing', views.bookListing, name='bookListing'),
    
    path('bookList', views.bookList, name='bookList'),
    
    path('borrowBooks', views.borrowBooks, name='borrowBooks'),
    
    path('borrowedBooks', views.borrowedBooks, name='borrowedBooks'),
    
    path('homePage', views.homePage, name='homePage'), 
    
    path('inventory', views.inventory, name='inventory'),
    
    path('profile', views.profile, name='profile'),
    
    path('addBook', views.addBook, name='addBook'),
            
    path('login', views.login, name='login'),
    
    path('search', views.search, name='search'),
    
    path('signup',views.signup, name='signup'),
    
    path('wishlist', views.wishlist, name='wishlist'),
    
]
