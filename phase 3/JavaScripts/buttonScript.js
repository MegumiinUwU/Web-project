function getUserType() {
    const isAdminElement = document.getElementById("is_admin");
    if (isAdminElement) {
        const isAdmin = isAdminElement.value;
        if (isAdmin === "1") {
            userType = 'admin';
            localStorage.setItem('userType', 'admin'); 
            window.location.href = "adminsview.html";
        } else if (isAdmin === "0") {
            userType = 'user';
            localStorage.setItem('userType', 'user'); 
            window.location.href = "usersView.html";
        } else {
            userType = 'default';
        }
    } else {
        userType = 'default';
    }
}

function getUserTypeFromStorage() {
    return localStorage.getItem('userType');
}

function clearUserType() {
    localStorage.removeItem('userType'); 
}

function logout() {
    clearUserType();
    window.location.href = "defaultview.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    });

    const showButtons = document.getElementsByClassName("buttons")[0];
    const showWishlist = document.querySelector('.wishlist');

    function updateButtonVisibility(){
        const userType = getUserTypeFromStorage(); 
        if(userType == 'admin' || userType == 'user'){
            showButtons.classList.toggle('active');
        }
    }

    /*function displayWishlist(){
        const userType = getUserTypeFromStorage(); 
        if(userType == 'admin' || userType == 'user'){
            showWishlist.style.display = 'flex';
        }else{
            showWishlist.style.display = 'none';
        }
    }*/

    function updateNavigationBar() {
        const userType = getUserTypeFromStorage(); 
        console.log(userType);
        if (userType === 'admin') {
            navbarLinks.innerHTML = `
                <ul>
                    <li><a href="Profile.html?userType=admin">Profile</a></li>
                    <li><a href="adminsview.html?userType=admin">Home</a></li>
                    <li><a href="search.html?userType=admin">Search</a></li>
                    <li><a href="addBook.html?userType=admin">Add Book</a></li>
                    <li><a href="#" onclick="logout()">Logout</a></li> <!-- Add onclick event for logout -->
                </ul>
            `;
        } else if (userType === 'user') {
            navbarLinks.innerHTML = `
                <ul>
                    <li><a href="Profile.html?userType=user">Profile</a></li>
                    <li><a href="Inventory.html?userType=user">Inventory</a></li>
                    <li><a href="usersView.html?userType=user">Home</a></li>
                    <li><a href="wishlist.html?userType=user">Wishlist</a></li>
                    <li><a href="search.html?userType=user">Search</a></li>
                    <li><a href="Borrowed Books.html?userType=user">Borrow Books</a></li>
                    <li><a href="#" onclick="logout()">Logout</a></li> <!-- Add onclick event for logout -->
                </ul>
            `;
        } else {
            
            navbarLinks.innerHTML = `
                <ul>
                    <li><a href="defaultview.html">Home</a></li>
                    <li><a href="search.html">Search</a></li>
                    <li><a href="Book Listing.html">View Books</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="signup.html">Sign Up</a></li>
                </ul>
            `;
        }
        
    }

    updateNavigationBar();
    updateButtonVisibility();
    /*displayWishlist();*/
});

