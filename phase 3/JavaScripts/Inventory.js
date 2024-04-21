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

    // Iterate over each book object in the borrowed list
    borrowed.forEach((book, index) => {
        // Skip if the book is null or undefined
        if (!book) {
            console.log("Book at index", index, "is null or undefined");
            return;
        }

        console.log("Generating HTML for book at index:", index);
        // Create a div element for the borrowed item
        const borrowedItem = document.createElement('div');
        borrowedItem.classList.add('inventory-item');

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

        // Create an image element for the book cover
        const bookCover = document.createElement('img');
        bookCover.src = imagePath;
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

        // Append the book details to the borrowed item
        borrowedItem.appendChild(bookDetails);

        // Create a button element for removing the book from the borrowed list
        const returnButton = document.createElement('button');
        returnButton.classList.add('return-button');
        returnButton.textContent = 'Return';
        // Set the book index as a data attribute
        returnButton.dataset.bookIndex = index;
        returnButton.addEventListener('click', function() {
            removeFromBorrowed(index);
        });
        borrowedItem.appendChild(returnButton);

        // Append the borrowed item to the borrowed container
        borrowedContainer.appendChild(borrowedItem);
    });

    // Debugging: Log a message indicating successful generation of borrowed items
    console.log("Borrowed items generated successfully.");
}

// Function to remove a book from the borrowed list
// Function to remove a book from the borrowed list
// Function to remove a book from the borrowed list
// Function to remove a book from the borrowed list
function removeFromBorrowed(index) {
    console.log("Removing book at index:", index);
    // Get the current list of borrowed books from localStorage
    let borrowed = JSON.parse(localStorage.getItem('borrowed')) || [];

    // If the index is valid, remove the book at that index from the borrowed list
    if (index >= 0 && index < borrowed.length) {
        console.log("Before removal:", borrowed);
        borrowed.splice(index, 1);
        console.log("After removal:", borrowed);

        // Update the borrowed list in localStorage
        localStorage.setItem('borrowed', JSON.stringify(borrowed));

        // Regenerate the borrowed list display
        generateBorrowed();

        // Debugging: Log the updated borrowed list after removal
        console.log("Updated borrowed list after removal:", borrowed);
    }
}


// Call the generateBorrowed function when the inventory page loads
document.addEventListener('DOMContentLoaded', generateBorrowed);

// Add event listener to handle clicks on any return button
document.addEventListener('click', function(event) {
    const returnButton = event.target.closest('.return-button');
    if (returnButton) {
        const bookIndex = parseInt(returnButton.dataset.bookIndex);
        removeFromBorrowed(bookIndex);
    }
});
