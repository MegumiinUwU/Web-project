let booooooks = [
    {title: "One Piece",
    author: "Eiichiro Oda",
    genre: ["Shonen", "Adventure", "Fantasy"],
    publicationDate: "Serialized since July 22, 1997",
    ISBN: "22",
    description: "One Piece follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary treasure known as One Piece in order to become the Pirate King. Set in a world of vast oceans and islands, the series is known for its imaginative characters, epic battles, and rich world-building.",
    url: "book1.html"
},
{title: "Head First Objects-Oriented Analysis and Design",
author: "Brett D. McLaughlin, Gary Pollice, and David West",
genre: ["Educational", "Computer Science", "Object-Oriented Programming"],
publicationDate: "First published in December 2006",
ISBN: "978-0596008673",
description: "Head First Object-Oriented Analysis and Design is a book that provides a unique and engaging approach to learning the principles of object-oriented analysis and design (OOAD). Written by Brett D. McLaughlin, Gary Pollice, and David West, the book uses a visually rich format with illustrations, diagrams, and humor to teach readers how to apply object-oriented concepts effectively in software design and development. It covers essential topics such as modeling, requirements gathering, use case analysis, class design, and design patterns, making it a valuable resource for software engineers, developers, and students looking to master OOAD principles.",
url: "book2.html"
},
{
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    genre: ["Shonen", "Fantasy", "Adventure"],
    publicationDate: "Serialized from August 2001 to June 2010",
    ISBN: "978-0888808673",
    description: "Fullmetal Alchemist is a Japanese manga series written and illustrated by Hiromu Arakawa. It was serialized in Square Enix's Monthly Shōnen Gangan magazine between August 2001 and June 2010, with the publisher later collecting the individual chapters into twenty-seven tankōbon volumes. The world of Fullmetal Alchemist is styled after the European Industrial Revolution. Set in a fictional universe in which alchemy is one of the most advanced scientific techniques, the story follows two alchemist brothers named Edward and Alphonse Elric, who are searching for the philosopher's stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.",
    url: "book3.html"
},
{
    title: "Stewart Calculus",
    author: "James Stewart",
    genre: ["Educational", "Mathematics", "Calculus"],
    publicationDate: "First published in 1985 (Different editions and versions have been published over the years)",
    ISBN: "978-1305266643",
    description: "Stewart Calculus is a widely used textbook for calculus courses at the university level. Authored by James Stewart, the book covers various topics in calculus including limits, derivatives, integrals, applications of integration, infinite series, vectors, and multivariable calculus. Known for its clear explanations, numerous examples, and exercises ranging from basic to challenging, Stewart Calculus is a comprehensive resource for students studying calculus. It has been praised for its pedagogical approach, making calculus more accessible to learners.",
    url: "book4.html"
},
{
    title: "Dune",
    author: "Frank Herbert",
    genre: ["Science Fiction", "Epic", "Adventure"],
    publicationDate: "Originally published in 1965",
    ISBN: "978-130557899",
    description: "Dune is a science fiction novel set in a distant future where noble houses vie for control over the desert planet of Arrakis, the only source of the valuable spice melange. The story follows young Paul Atreides as he becomes embroiled in political intrigue, prophecy, and rebellion against the ruling powers. Dune is known for its intricate world-building, complex characters, and exploration of themes such as politics, religion, and ecology.",
    url: "book5.html"
}];

  
  
document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form input values
    const title = document.getElementById("name").value;
    const author1 = document.getElementById("author1").value;
    const author2 = document.getElementById("author2").value;
    const author3 = document.getElementById("author3").value;
    const genre = document.getElementById("genre").value;
    const publicationDate = document.getElementById("publishYear").value;
    const ISBN = document.getElementById("ISBN").value;
    const description = document.getElementById("description").value;

    // Create a new book object
    const newBook = {
        title: title,
        author1: author1,
        author2: author2,
        author3: author3,
        genre: genre,
        publicationDate: publicationDate,
        ISBN: ISBN,
        description: description
    };

    // Retrieve existing books from local storage
    let existingBooks = JSON.parse(localStorage.getItem("books")) || [];

    // Add the new book to existing books
    existingBooks.push(newBook);

    // Update the books array in local storage
    localStorage.setItem("books", JSON.stringify(existingBooks));

    // Optionally, clear the form fields after submission
    document.getElementById("addBookForm").reset();

    // Call a function to update the book list display or perform other actions
    // For example:
    // DisplayAllBooks(); // Update book list display
});