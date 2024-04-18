// Array of books
const books = [
    { title: "One Piece", author: "Eiichiro Oda", genre: "Manga", url: "book1.html", image: "Images/book1.jpg" },
    { title: "Head First Objects-Oriented Analysis and Design", author: "Brett D. McLaughlin", genre: "Programming", url: "book2.html", image: "Images/book2.jpg" },
    { title: "Fullmetal Alchemist", author: "Hiromu Arakawa", genre: "Manga", url: "book3.html", image: "Images/book3.jpg" },
    { title: "Stewart Calculus", author: "James Stewart", genre: "Mathematics", url: "book4.html", image: "Images/book4.jpg" },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", url: "book5.html", image: "Images/book5.jpg" }
];

// Function to add a book to the wishlist
function addToWishlist(bookId) {
    // Get the book URL based on the book ID
    const book = boooks[bookId - 1];
    const bookUrl = book.url;

    // Get the current list of books from localStorage or initialize an empty array
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Add the new book URL to the wishlist
    wishlist.push(bookUrl);

    // Save the updated wishlist back to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Generate the wishlist display
    generateWishlist();
}

// Function to remove a book from the wishlist
function removeFromWishlist(bookUrl) {
    // Get the current list of books from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Find the index of the book URL to remove
    const index = wishlist.findIndex(url => url === bookUrl);

    // If the book URL is found in the wishlist, remove it
    if (index !== -1) {
        wishlist.splice(index, 1);
        // Update the wishlist in localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        // Regenerate the wishlist display
        generateWishlist();
    }
}

// Function to generate the wishlist on the wishlist page
function generateWishlist() {
    // Get the wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Get the container element where wishlist items will be displayed
    const wishlistContainer = document.querySelector('.wishlist-container');

    // Clear any existing content in the container
    wishlistContainer.innerHTML = '';

    // Generate wishlist items for each book in the wishlist and append them to the container
    wishlist.forEach((bookUrl, index) => {
        // Find the corresponding book object based on the URL
        const book = boooks.find(book => book.url === bookUrl);

        // Create a div element for the wishlist item
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');

        // Create an image element for the book cover
        const bookCover = document.createElement('img');
        bookCover.src = book.image;
        bookCover.alt = book.title;
        wishlistItem.appendChild(bookCover);

        // Create a div element for the book details
        const bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details');

        // Create a heading element for the book title
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;
        bookDetails.appendChild(bookTitle);

        // Create a paragraph element for the book author
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = 'Author: ' + book.author;
        bookDetails.appendChild(bookAuthor);

        // Create a paragraph element for the book genre
        const bookGenre = document.createElement('p');
        bookGenre.textContent = 'Genre: ' + book.genre;
        bookDetails.appendChild(bookGenre);

        // Append the book details to the wishlist item
        wishlistItem.appendChild(bookDetails);

        // Create a button element for removing the book from the wishlist
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';
        // Set the book URL as a data attribute
        removeButton.dataset.bookUrl = bookUrl;
        removeButton.addEventListener('click', function() {
            removeFromWishlist(bookUrl);
        });
        wishlistItem.appendChild(removeButton);

        // Append the wishlist item to the wishlist container
        wishlistContainer.appendChild(wishlistItem);
    });
}




// Call the generateWishlist function when the wishlist page loads
document.addEventListener('DOMContentLoaded', generateWishlist);

// Add event listener to handle clicks on any wishlist button
document.addEventListener('click', function(event) {
    // Check if the clicked element has the class 'wishlist-button'
    if (event.target.classList.contains('wishlist-button')) {
        // Get the book ID from the ID of the clicked button
        const bookId = parseInt(event.target.id.split('-')[2]);
        // Call addToWishlist function with the book ID
        addToWishlist(bookId);
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-button')) {
        const bookUrl = event.target.dataset.book-url;
        removeFromWishlist(bookUrl);
    }
});




