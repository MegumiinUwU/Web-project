function generateWishlist() {
    // Get the wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Get the container element where wishlist items will be displayed
    const wishlistContainer = document.querySelector('.wishlist-container');

    // Clear any existing content in the container
    wishlistContainer.innerHTML = '';

    // Iterate over each book in the wishlist
    wishlist.forEach((book, index) => {
        
        if (!book) {
            console.log("Book at index", index, "is null or undefined");
            return;
        }

        // Create a div element for the wishlist item
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');

        // Create an image element for the book cover
        const bookCover = document.createElement('img');
        // Determine the correct image path based on the book title
        let imagePath;
        switch (book.title) {
            case 'One Piece':
                imagePath = 'Images/Book1.jpg';
                break;
            case 'Head First Objects-Oriented Analysis and Design':
                imagePath = 'Images/Book2.jpg';
                break;
            case 'Fullmetal Alchemist':
                imagePath = 'Images/Book3.jpg';
                break;
            case 'Stewart Calculus':
                imagePath = 'Images/Book4.jpg';
                break;
            case 'Dune':
                imagePath = 'Images/Book5.jpg';
                break;
            default:
                // Use a default image path for other books
                imagePath = 'Images/default.jpg';
        }
        bookCover.src = imagePath;
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
        // Set the book index as a data attribute
        removeButton.dataset.bookIndex = index;
        removeButton.addEventListener('click', function() {
            removeFromWishlist(index); // Pass the index to the remove function
        });
        wishlistItem.appendChild(removeButton);

        // Append the wishlist item to the wishlist container
        wishlistContainer.appendChild(wishlistItem);
    });
}

// Function to remove a book from the wishlist
function removeFromWishlist(index) {
    // Get the current list of books from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // If the index is valid, remove the book at that index from the wishlist
    if (index >= 0 && index < wishlist.length) {
        wishlist.splice(index, 1);
        // Update the wishlist in localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        // Regenerate the wishlist display
        generateWishlist();
    }
}

// Call the generateWishlist function when the wishlist page loads
document.addEventListener('DOMContentLoaded', generateWishlist);

// Add event listener to handle clicks on any remove button in the wishlist
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-button')) {
        // Retrieve the book index from the dataset
        const bookIndex = parseInt(event.target.dataset.bookIndex);
        removeFromWishlist(bookIndex);
    }
});