// Array of books
var books = [
    { title: "One Piece", author: "Eiichiro Oda", genre: "Manga", url: "book1.html" },
    { title: "Head First Objects-Oriented Analysis and Design", author: "Brett D. McLaughlin", genre: "Programming", url: "book2.html" },
    { title: "Fullmetal Alchemist", author: "Hiromu Arakawa", genre: "Manga", url: "book3.html" },
    { title: "Stewart Calculus", author: "James Stewart", genre: "Mathematics", url: "book4.html" },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", url: "book5.html" }
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
function displayResults(results) {
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; 

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
    } else {
        var ul = document.createElement("ul");
        results.forEach(function(book) {
            var li = document.createElement("li");
            var link = document.createElement("a");
            link.href = book.url; // Set the URL of the book page
            link.textContent = book.title;
            li.appendChild(link);
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    }
}

// Event listener for the search form submission
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var query = document.getElementById("searchInput").value.trim();

        var results = searchBooks(query);

        displayResults(results);
    });
});


