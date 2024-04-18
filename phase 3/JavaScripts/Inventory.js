// Array of books
const boooks = [
    { title: "One Piece", author: "Eiichiro Oda", genre: "Manga", url: "book1.html", image: "Images/book1.jpg" },
    { title: "Head First Objects-Oriented Analysis and Design", author: "Brett D. McLaughlin", genre: "Programming", url: "book2.html", image: "Images/book2.jpg" },
    { title: "Fullmetal Alchemist", author: "Hiromu Arakawa", genre: "Manga", url: "book3.html", image: "Images/book3.jpg" },
    { title: "Stewart Calculus", author: "James Stewart", genre: "Mathematics", url: "book4.html", image: "Images/book4.jpg" },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", url: "book5.html", image: "Images/book5.jpg" }
];

// Function to add a book to the borrowed list
function addToBorrowed(bookId) {
    // Get the book URL based on the book ID
    const book = boooks[bookId - 1];
    const bookUrl = book.url;

    // Get the current list of borrowed books from localStorage or initialize an empty array
    let borrowed = JSON.parse(localStorage.getItem('borrowed')) || [];

    // Add the new book URL to the borrowed list
    borrowed.push(bookUrl);

    // Save the updated borrowed list back to localStorage
    localStorage.setItem('borrowed', JSON.stringify(borrowed));

    // Generate the borrowed list display
    generateBorrowed();

    // Debugging: Log the book URL and updated borrowed list
    console.log("Added to borrowed:", book.title);
    console.log("Updated borrowed list:", borrowed);
}

// Function to remove a book from the borrowed list
function removeFromBorrowed(bookUrl) {
    // Get the current list of borrowed books from localStorage
    let borrowed = JSON.parse(localStorage.getItem('borrowed')) || [];

    // Debugging: Log the book URL and current borrowed list before removal
    console.log("Removing from borrowed:", bookUrl);
    console.log("Current borrowed list:", borrowed);

    // Find the index of the book URL to remove
    const index = borrowed.findIndex(url => url === bookUrl);

    // If the book URL is found in the borrowed list, remove it
    if (index !== -1) {
        borrowed.splice(index, 1);
        // Update the borrowed list in localStorage
        localStorage.setItem('borrowed', JSON.stringify(borrowed));
        // Regenerate the borrowed list display
        generateBorrowed();
    }

    // Debugging: Log the updated borrowed list after removal
    console.log("Updated borrowed list after removal:", borrowed);
}

// Function to generate the borrowed list on the inventory page
function generateBorrowed() {
    // Get the borrowed list from localStorage
    const borrowed = JSON.parse(localStorage.getItem('borrowed')) || [];

    // Debugging: Log the retrieved borrowed list
    console.log("Retrieved borrowed list:", borrowed);

    // Get the container element where borrowed items will be displayed
    const borrowedContainer = document.querySelector('.inventory-items');

    // Clear any existing content in the container
    borrowedContainer.innerHTML = '';

    // Generate borrowed items for each book in the borrowed list and append them to the container
    borrowed.forEach((bookUrl, index) => {
        // Find the corresponding book object based on the URL
        const book = boooks.find(book => book.url === bookUrl);

        // Debugging: Log the found book object
        console.log("Book object:", book);

        // Create a div element for the borrowed item
        const borrowedItem = document.createElement('div');
        borrowedItem.classList.add('inventory-item');

        // Create an image element for the book cover
        const bookCover = document.createElement('img');
        bookCover.src = book.image;
        bookCover.alt = book.title;
        borrowedItem.appendChild(bookCover);

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

        // Append the book details to the borrowed item
        borrowedItem.appendChild(bookDetails);

        // Create a button element for removing the book from the borrowed list
        const returnButton = document.createElement('button');
        returnButton.classList.add('return-button');
        returnButton.textContent = 'Return';
        // Set the book URL as a data attribute
        returnButton.dataset.bookUrl = bookUrl;
        returnButton.addEventListener('click', function() {
            removeFromBorrowed(bookUrl);
        });
        borrowedItem.appendChild(returnButton);

        // Append the borrowed item to the borrowed container
        borrowedContainer.appendChild(borrowedItem);
    });

    // Debugging: Log a message indicating successful generation of borrowed items
    console.log("Borrowed items generated successfully.");
}

// Call the generateBorrowed function when the inventory page loads
document.addEventListener('DOMContentLoaded', generateBorrowed);

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('borrow-button')) {
        console.log('Borrow button clicked');
        const bookId = parseInt(event.target.id.split('-')[2]);
        addToBorrowed(bookId);
    }
});

// Add event listener to handle clicks on any return button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('return-button')) {
        const bookUrl = event.target.dataset.book-url;
        removeFromBorrowed(bookUrl);
    }
});