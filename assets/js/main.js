/* ============================
   EduAbleNet Main Javascript
============================ */

// Navbar Active Menu
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar ul li a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.parentElement.classList.add("active");

    }

});

// ============================
// Greeting Dashboard
// ============================

const greeting = document.getElementById("greeting");

if (greeting) {

    const hour = new Date().getHours();

    let text = "";

    if (hour < 11) {

        text = "Selamat Pagi ☀️";

    } else if (hour < 15) {

        text = "Selamat Siang 🌤️";

    } else if (hour < 18) {

        text = "Selamat Sore 🌇";

    } else {

        text = "Selamat Malam 🌙";

    }

    greeting.innerHTML = text;

}

// ============================
// Search Materi
// ============================

const searchInput = document.getElementById("searchMateri");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let keyword = this.value.toLowerCase();

        let cards = document.querySelectorAll(".materi-card");

        cards.forEach(card => {

            let title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(keyword)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// ============================
// Scroll To Top
// ============================

const topButton = document.getElementById("topButton");

window.onscroll = function () {

    if (!topButton) return;

    if (document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

function scrollTopPage() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// ============================
// Dark Mode
// ============================

const darkButton = document.getElementById("darkMode");

if (darkButton) {

    darkButton.onclick = () => {

        document.body.classList.toggle("dark");

    };

}

// ============================
// Loading Button
// ============================

document.querySelectorAll(".loading-btn").forEach(button => {

    button.addEventListener("click", function () {

        let old = this.innerHTML;

        this.innerHTML = "Loading...";

        this.disabled = true;

        setTimeout(() => {

            this.innerHTML = old;

            this.disabled = false;

        }, 1500);

    });

});

// ============================
// Notification
// ============================

function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}