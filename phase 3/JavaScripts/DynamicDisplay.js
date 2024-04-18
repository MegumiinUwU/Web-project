let books = [
    {title: "One Piece",
    author: "Eiichiro Oda",
    genre: ["Shonen", "Adventure", "Fantasy"],
    publicationDate: "Serialized since July 22, 1997",
    ISBN: "22",
    description: "One Piece follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary treasure known as One Piece in order to become the Pirate King. Set in a world of vast oceans and islands, the series is known for its imaginative characters, epic battles, and rich world-building."
},
{title: "Head First Objects-Oriented Analysis and Design",
author: "Brett D. McLaughlin, Gary Pollice, and David West",
genre: ["Educational", "Computer Science", "Object-Oriented Programming"],
publicationDate: "First published in December 2006",
ISBN: "978-0596008673",
description: "Head First Object-Oriented Analysis and Design is a book that provides a unique and engaging approach to learning the principles of object-oriented analysis and design (OOAD). Written by Brett D. McLaughlin, Gary Pollice, and David West, the book uses a visually rich format with illustrations, diagrams, and humor to teach readers how to apply object-oriented concepts effectively in software design and development. It covers essential topics such as modeling, requirements gathering, use case analysis, class design, and design patterns, making it a valuable resource for software engineers, developers, and students looking to master OOAD principles."
},
{
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    genre: ["Shonen", "Fantasy", "Adventure"],
    publicationDate: "Serialized from August 2001 to June 2010",
    ISBN: "978-0888808673",
    description: "Fullmetal Alchemist is a Japanese manga series written and illustrated by Hiromu Arakawa. It was serialized in Square Enix's Monthly Shōnen Gangan magazine between August 2001 and June 2010, with the publisher later collecting the individual chapters into twenty-seven tankōbon volumes. The world of Fullmetal Alchemist is styled after the European Industrial Revolution. Set in a fictional universe in which alchemy is one of the most advanced scientific techniques, the story follows two alchemist brothers named Edward and Alphonse Elric, who are searching for the philosopher's stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy."
},
{
    title: "Stewart Calculus",
    author: "James Stewart",
    genre: ["Educational", "Mathematics", "Calculus"],
    publicationDate: "First published in 1985 (Different editions and versions have been published over the years)",
    ISBN: "978-1305266643",
    description: "Stewart Calculus is a widely used textbook for calculus courses at the university level. Authored by James Stewart, the book covers various topics in calculus including limits, derivatives, integrals, applications of integration, infinite series, vectors, and multivariable calculus. Known for its clear explanations, numerous examples, and exercises ranging from basic to challenging, Stewart Calculus is a comprehensive resource for students studying calculus. It has been praised for its pedagogical approach, making calculus more accessible to learners."
},
{
    title: "Dune",
    author: "Frank Herbert",
    genre: ["Science Fiction", "Epic", "Adventure"],
    publicationDate: "Originally published in 1965",
    ISBN: "978-130557899",
    description: "Dune is a science fiction novel set in a distant future where noble houses vie for control over the desert planet of Arrakis, the only source of the valuable spice melange. The story follows young Paul Atreides as he becomes embroiled in political intrigue, prophecy, and rebellion against the ruling powers. Dune is known for its intricate world-building, complex characters, and exploration of themes such as politics, religion, and ecology."
}];

let images = ["Images/Book1.jpg","Images/book2.jpg","Images/book3.jpg","Images/book4.jpg","Images/book5.jpg"];

function DisplayAllBooks(){
    const titleElement = document.getElementById('title');
    const authorElement = document.getElementById('author');
    const genreElement = document.getElementById('genre');
    const publicationDateElement = document.getElementById('publicationDate');
    const ISBNElement = document.getElementById('ISBN');
    const descriptionElement = document.getElementById('description');
    const img = document.getElementsByClassName('Book Image')[0];
    let index = 0;
    if(localStorage.getItem('indexVal')){
        index = localStorage.getItem('indexVal');
    }
    img.src = images[index]; 
    let Book = books[index];

    const borrowButton = document.getElementsByClassName('borrow-button');
    borrowButton.id = "borrow-button-" + (index + 1);
    console.log(borrowButton);  //

    const wishlistButton = document.getElementsByClassName('wishlist-button');
    wishlistButton.id = "wishlist-button-" + (index + 1);
    console.log(wishlistButton); //

    titleElement.textContent = Book.title;
    authorElement.textContent = Book.author;
    genreElement.textContent = Book.genre.join(', '); // Convert the genre array to a comma-separated string
    publicationDateElement.textContent = Book.publicationDate;
    ISBNElement.textContent = Book.ISBN;
    descriptionElement.textContent = Book.description;
};

function createBookDisplay() {
    const bookContainer = document.querySelector('.books');
    books.forEach((book, index) => { 
        const div = document.createElement('div');
        div.classList.add('book-display');
        div.setAttribute('data-index', index);

        const linkImg = document.createElement('a');
        linkImg.href = "book.html";
        const img = document.createElement('img');
        img.src = images[index];
        img.alt = book.title + " Cover";

        const linkTitle = document.createElement('a');
        linkTitle.textContent = book.title;
        linkTitle.href = "book.html"; //
        
        linkImg.appendChild(img);
        div.appendChild(linkImg);
        div.appendChild(linkTitle);
        bookContainer.appendChild(div);
    });
};

function createBorrowBookDisplay() {
    const bookContainer = document.querySelector('.books');
    books.forEach((book, index) => { // Loop through books array with index
        const div = document.createElement('div');
        div.classList.add('book');
        div.setAttribute('data-index', index);

        const linkImg = document.createElement('a');
        linkImg.href = "book.html"; //
        const img = document.createElement('img');
        img.src = images[index];
        img.alt = 'book' + (index + 1); // Adjust index

        const linkTitle = document.createElement('a');
        linkTitle.textContent = book.title;
        linkTitle.href = "book.html"; //

        const borrowButton = document.createElement('button');
        borrowButton.classList.add('borrow-button');
        borrowButton.textContent = 'Borrow now';
        borrowButton.id = "borrow-button-" + (index + 1);

        const wishlistButton = document.createElement('button');
        wishlistButton.classList.add('wishlist-button');
        wishlistButton.textContent = 'Add to wish list';
        wishlistButton.id = "wishlist-button-" + (index + 1);
        
        linkImg.appendChild(img);
        div.appendChild(linkImg);
        div.appendChild(document.createElement('br'));
        div.appendChild(linkTitle);
        div.appendChild(document.createElement('br'));
        div.appendChild(borrowButton);
        div.appendChild(document.createElement('br'));
        div.appendChild(wishlistButton);
        bookContainer.appendChild(div);
    });
};

export {DisplayAllBooks, createBookDisplay, createBorrowBookDisplay};

document.addEventListener('click', function(event) {
    // Check if the clicked element is an <a> tag
    console.log("Entered event");
    if (event.target.tagName === 'A') {
        // Get the parent <div> element with class 'book-display'
        const bookDisplayDiv = event.target.parentNode;
        // Check if the parent <div> element exists and has the class 'book-display'
        if (bookDisplayDiv && bookDisplayDiv.matches('.book-display, .book')) {
            // Retrieve the value of the 'data-index' attribute
            const dataIndex = bookDisplayDiv.getAttribute('data-index');
            // Convert the dataIndex to an integer if needed
            let index = parseInt(dataIndex);
            localStorage.setItem('indexVal', index);
            console.log('Index of clicked book:', index);
        }
    }else if(event.target.tagName === 'IMG'){
        const bookDisplayDiv = event.target.parentNode.parentNode;
        if (bookDisplayDiv && bookDisplayDiv.matches('.book-display, .book')) {
            // Retrieve the value of the 'data-index' attribute
            const dataIndex = bookDisplayDiv.getAttribute('data-index');
            // Convert the dataIndex to an integer if needed
            let index = parseInt(dataIndex);
            localStorage.setItem('indexVal', index);
            console.log('Index of clicked book:', index);
        }
    }
});