document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('main-header');

    // Mobile menu toggle
    mobileMenuButton?.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.style.transform = isExpanded ? 'translateX(100%)' : 'translateX(0)';
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.style.transform === 'translateX(0)') {
            mobileMenuButton.click();
        }
    });

    // Header scroll effect with throttle
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    header.classList.add('shadow-lg', 'bg-opacity-95');
                } else {
                    header.classList.remove('shadow-lg', 'bg-opacity-95');
                }
                lastScrollY = window.scrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Set active nav link
    const setActiveNavLink = () => {
        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPath = new URL(link.href).pathname;
            link.classList.toggle('active', currentPath === linkPath);
        });
    };

    setActiveNavLink();
});