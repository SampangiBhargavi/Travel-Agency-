
// ==========================================
// WanderWorld - Common JavaScript
// ==========================================


// ------------------------------------------
// USER LOGIN
// ------------------------------------------

function isUserLoggedIn() {
    return localStorage.getItem("wanderWorldUserLoggedIn") === "true";
}


function getLoggedInUserEmail() {
    return localStorage.getItem("wanderWorldUserEmail") || "";
}


function userLogout() {
    localStorage.removeItem("wanderWorldUserLoggedIn");
    localStorage.removeItem("wanderWorldUserEmail");

    window.location.href = "index.html";
}


// ------------------------------------------
// ADMIN LOGIN
// ------------------------------------------

function isAdminLoggedIn() {
    return localStorage.getItem("wanderWorldAdminLoggedIn") === "true";
}


function adminLogout() {
    localStorage.removeItem("wanderWorldAdminLoggedIn");

    window.location.href = "admin-login.html";
}


// ------------------------------------------
// BOOKINGS
// ------------------------------------------

function getAllBookings() {
    return JSON.parse(
        localStorage.getItem("wanderWorldBookings") || "[]"
    );
}


function saveAllBookings(bookings) {
    localStorage.setItem(
        "wanderWorldBookings",
        JSON.stringify(bookings)
    );
}


function addBooking(booking) {

    const bookings = getAllBookings();

    bookings.push(booking);

    saveAllBookings(bookings);

    return booking;
}


function getBookingById(id) {

    const bookings = getAllBookings();

    return bookings.find(
        booking => String(booking.id) === String(id)
    );
}


function updateBooking(updatedBooking) {

    const bookings = getAllBookings();

    const index = bookings.findIndex(
        booking => String(booking.id) === String(updatedBooking.id)
    );

    if (index !== -1) {

        bookings[index] = updatedBooking;

        saveAllBookings(bookings);

        return true;
    }

    return false;
}


function deleteBooking(id) {

    const bookings = getAllBookings().filter(
        booking => String(booking.id) !== String(id)
    );

    saveAllBookings(bookings);
}


// ------------------------------------------
// REGISTERED USER
// ------------------------------------------

function getRegisteredUser() {

    return JSON.parse(
        localStorage.getItem("wanderWorldUser") || "null"
    );
}


function saveRegisteredUser(user) {

    localStorage.setItem(
        "wanderWorldUser",
        JSON.stringify(user)
    );
}


// ------------------------------------------
// COMMON MESSAGE
// ------------------------------------------

function showMessage(message) {
    alert(message);
}


// ------------------------------------------
// PRICE FORMAT
// ------------------------------------------

function formatIndianPrice(price) {

    return "₹" + Number(price || 0).toLocaleString("en-IN");
}


// ------------------------------------------
// HTML SECURITY
// ------------------------------------------

function escapeHTML(value) {

    return String(value ?? "").replace(
        /[&<>"']/g,
        character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]
    );
}


// ------------------------------------------
// STAR RATING
// ------------------------------------------

function createStarRating(rating) {

    let stars = "";

    const value = Number(rating || 0);

    for (let i = 1; i <= 5; i++) {

        if (i <= value) {

            stars += '<i class="bi bi-star-fill"></i>';

        } else {

            stars += '<i class="bi bi-star"></i>';

        }
    }

    return stars;
}


// ------------------------------------------
// DATE FORMAT
// ------------------------------------------

function formatDate(dateValue) {

    if (!dateValue) {
        return "—";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return dateValue;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


// ------------------------------------------
// NAVBAR LOGIN STATUS
// ------------------------------------------

function updateLoginButton() {

    const loginLinks = document.querySelectorAll(
        'a[href="login.html"]'
    );

    if (!isUserLoggedIn()) {
        return;
    }

    const email = getLoggedInUserEmail();

    loginLinks.forEach(link => {

        link.innerHTML =
            '<i class="bi bi-person-circle me-1"></i> Account';

        link.href = "#";

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const logout = confirm(
                "You are logged in as " +
                email +
                ".\n\nDo you want to logout?"
            );

            if (logout) {
                userLogout();
            }

        });

    });
}


// ------------------------------------------
// MOBILE NAVBAR AUTO CLOSE
// ------------------------------------------

function enableNavbarAutoClose() {

    const navbar =
        document.querySelector(".navbar-collapse");

    if (!navbar || typeof bootstrap === "undefined") {
        return;
    }

    const links =
        navbar.querySelectorAll(".nav-link");

    links.forEach(link => {

        link.addEventListener("click", function() {

            if (window.innerWidth < 992) {

                const collapse =
                    bootstrap.Collapse.getInstance(navbar);

                if (collapse) {
                    collapse.hide();
                }

            }

        });

    });
}


// ------------------------------------------
// INITIALIZE COMMON FUNCTIONS
// ------------------------------------------

document.addEventListener("DOMContentLoaded", function() {

    updateLoginButton();

    enableNavbarAutoClose();

});

