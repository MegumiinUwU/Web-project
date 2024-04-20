// Array of books
var books = [
    { title: "One Piece", author: "Eiichiro Oda", genre: "Manga", url: "book1.html", image: "Images/book1.jpg" },
    { title: "Head First Objects-Oriented Analysis and Design", author: "Brett D. McLaughlin", genre: "Programming", url: "book2.html", image: "Images/book2.jpg" },
    { title: "Fullmetal Alchemist", author: "Hiromu Arakawa", genre: "Manga", url: "book3.html", image: "Images/book3.jpg" },
    { title: "Stewart Calculus", author: "James Stewart", genre: "Mathematics", url: "book4.html", image: "Images/book4.jpg" },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", url: "book5.html", image: "Images/book5.jpg" }
];

// Function to search books by title, author, or genre
function searchBooks(query) {
    // Filtering books based on the query
    var filteredBooks = books.filter(function(book) {
        return book.title.toLowerCase().includes(query.toLowerCase()) ||
               book.author.toLowerCase().includes(query.toLowerCase()) ||
               book.genre.toLowerCase().includes(query.toLowerCase());
    });

    return filteredBooks;
}

// Function to display search results
// Function to display search results
function displayResults(results) {
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; 

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
    } else {
        results.forEach(function(book) {
            // Create container for each book
            var div = document.createElement("div");
            div.classList.add("book-container");

            // Create image element
            var img = document.createElement("img");
            img.src = book.image; // Set the image source
            img.alt = book.title; // Set alt text for accessibility
            img.classList.add("book-image"); // Apply CSS class for styling
            div.appendChild(img);

            // Create element for book details
            var details = document.createElement("div");
            details.classList.add("book-details");

            // Create link element for book title
            var link = document.createElement("a");
            link.href = "#"; // Set a dummy href
            link.textContent = book.title;
            link.addEventListener("click", function(event) {
                event.preventDefault();
                // Call function to display book details modal
                displayBookDetails(book);
            });
            details.appendChild(link);

            // Add author information
            var author = document.createElement("p");
            author.textContent = "By " + book.author;
            details.appendChild(author);

            // Append details to the container
            div.appendChild(details);

            // Append container to the results container
            resultsContainer.appendChild(div);
        });
    }
}

// Function to display book details modal
function displayBookDetails(book) {
    // Get modal element
    var modal = document.getElementById("bookDetailsModal");

    // Populate modal with book details
    var modalTitle = modal.querySelector(".modal-title");
    modalTitle.textContent = book.title;

    var modalAuthor = modal.querySelector(".modal-author");
    modalAuthor.textContent = "By " + book.author;

    var modalGenre = modal.querySelector(".modal-genre");
    modalGenre.textContent = "Genre: " + book.genre;

    // Display modal
    modal.style.display = "block";
}

// Event listener for closing the modal
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-modal")) {
        var modal = event.target.closest(".modal");
        modal.style.display = "none";
    }
});

// Event listener for the search form submission
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var query = document.getElementById("searchInput").value.trim();

        var results = searchBooks(query);

        displayResults(results);
    });
});



