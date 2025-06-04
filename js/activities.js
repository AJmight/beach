// AOS initialization
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // Changed to true for better performance
    mirror: false // Changed to false for better performance
});

// Header scroll effect with debouncing
let scrollTimer;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (scrollTimer) {
        clearTimeout(scrollTimer);
    }
    
    scrollTimer = setTimeout(() => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg', 'bg-opacity-90', 'backdrop-blur-sm');
        } else {
            header.classList.remove('shadow-lg', 'bg-opacity-90', 'backdrop-blur-sm');
        }
    }, 10);
});

// Mobile menu with improved accessibility
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll with IntersectionObserver
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.activity-card').forEach(card => {
    observer.observe(card);
});