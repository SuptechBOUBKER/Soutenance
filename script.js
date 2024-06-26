function closeLoginForm() {
    document.querySelector('.account-form').classList.remove('active');
}

function login(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Simuler une vérification d'authentification réussie
    var isAuthenticated = (email === 'test@example.com' && password === 'password123'); // Remplacez ceci par votre logique d'authentification

    if (isAuthenticated) {
        // Fermer la fenêtre de connexion
        closeLoginForm();

        // Afficher l'icône de profil
        document.getElementById('profile-icon').style.display = 'block';

        // Ouvrir la nouvelle fenêtre dans le même onglet
        window.open('contact.html', '_self'); // Remplacez 'indexs.html' par l'URL de la nouvelle fenêtre que vous souhaitez ouvrir
    } else {
        alert('Échec de l\'authentification. Veuillez réessayer.');
    }

    return false;
}

function displayProfileIcon() {
    const profileIcon = document.getElementById('profile-icon');
    profileIcon.style.display = 'block'; // Affichez l'icône de profil
}


function closeLoginForm() {
    const accountForm = document.getElementById('account-form');
    accountForm.style.display = 'none'; // Hide the account form
}

// Logic for social logins (similar to above)
function loginWithGoogle() {
    alert('Google login successful!');
    displayUserInfo('Google User'); // Replace with actual user info
    closeLoginForm();
}

function loginWithFacebook() {
    alert('Facebook login successful!');
    displayUserInfo('Facebook User'); // Replace with actual user info
    closeLoginForm();
}

function loginWithApple() {
    alert('Apple login successful!');
    displayUserInfo('Apple User'); // Replace with actual user info
    closeLoginForm();
}

// register function
function register(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    if (password === confirmPassword) {
      alert('Registered with email: ' + email);
      // Perform your registration logic here
    } else {
      alert('Passwords do not match');
    }
  }

// Placeholder functions for social registrations
function registerWithGoogle() {
    alert('Registering with Google');
    // Add your Google registration logic here
  }
  
  function registerWithFacebook() {
    alert('Registering with Facebook');
    // Add your Facebook registration logic here
  }
  
  function registerWithApple() {
    alert('Registering with Apple');
    // Add your Apple registration logic here
  }
    
// Menu mobile
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeNavbar = document.querySelector('#close-navbar');

if (menuBtn) {
    menuBtn.onclick = () => {
        navbar.classList.add('active');
    };
}

if (closeNavbar) {
    closeNavbar.onclick = () => {
        navbar.classList.remove('active');
    };
}

// Formulaires de connexion et d'inscription
let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

if (registerBtn && loginBtn) {
    registerBtn.onclick = () => {
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        document.querySelector('.account-form .login-form').classList.remove('active');
        document.querySelector('.account-form .register-form').classList.add('active');
    };

    loginBtn.onclick = () => {
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        document.querySelector('.account-form .login-form').classList.add('active');
        document.querySelector('.account-form .register-form').classList.remove('active');
    };
}

// Affichage du formulaire d'inscription/connexion
let accountForm = document.querySelector('.account-form');
let accountBtn = document.querySelector('#account-btn');
let closeForm = document.querySelector('#close-form');

if (accountBtn) {
    accountBtn.onclick = () => {
        accountForm.classList.add('active');
    };
}

if (closeForm) {
    closeForm.onclick = () => {
        accountForm.classList.remove('active');
    };
}

// Initialisation des sliders Swiper
var homeSwiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2000, // délai entre chaque diapositive en millisecondes (5 secondes dans cet exemple)
        disableOnInteraction: false, // permettre la lecture automatique même si l'utilisateur fait une interaction
    },
});

var homeCoursesSwiper = new Swiper(".home-courses-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var teachersSwiper = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var reviewsSwiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var logoSwiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

// Accordion FAQ
let accordions = document.querySelectorAll('.faq .accordion-container .accordion');

accordions.forEach(accordion => {
    accordion.onclick = () => {
        accordions.forEach(item => item.classList.remove('active'));
        accordion.classList.toggle('active');
    };
});

// Bouton "Charger plus"
let loadMoreBtn = document.querySelector('.load-more .btn');

if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
        document.querySelectorAll('.courses .box-container .hide').forEach(show => {
            show.style.display = 'block';
        });
        loadMoreBtn.style.display = 'none';
    };
}

// Affichage/cachage du mot de passe
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('#toggle-password');
    const passwordField = document.querySelector('#login-password');

    togglePassword.addEventListener('click', () => {
        // Toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye / eye slash icon
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    const toggleRegisterPassword = document.querySelector('#toggle-register-password');
    const registerPasswordField = document.querySelector('#register-password');

    toggleRegisterPassword.addEventListener('click', () => {
        // Toggle the type attribute
        const type = registerPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        registerPasswordField.setAttribute('type', type);

        // Toggle the eye / eye slash icon
        toggleRegisterPassword.classList.toggle('fa-eye');
        toggleRegisterPassword.classList.toggle('fa-eye-slash');
    });

    const toggleRegisterConfirmPassword = document.querySelector('#toggle-register-confirm-password');
    const registerConfirmPasswordField = document.querySelector('#register-confirm-password');

    toggleRegisterConfirmPassword.addEventListener('click', () => {
        // Toggle the type attribute
        const type = registerConfirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        registerConfirmPasswordField.setAttribute('type', type);

        // Toggle the eye / eye slash icon
        toggleRegisterConfirmPassword.classList.toggle('fa-eye');
        toggleRegisterConfirmPassword.classList.toggle('fa-eye-slash');
    });
});
