// Add this to your existing script.js file

// Mobile navigation close when clicking outside
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target) && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    }
});

// Prevent background scroll when mobile menu is open
function toggleBodyScroll(enable) {
    if (enable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Update mobile menu to handle body scroll
const mobileMenu = document.getElementById('mobileMenu');
const navMenu = document.getElementById('navMenu');

mobileMenu.addEventListener('click', () => {
    const isOpening = !navMenu.classList.contains('show');
    navMenu.classList.toggle('show');
    toggleBodyScroll(isOpening);
});

// Close mobile menu when clicking links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        toggleBodyScroll(false);
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show');
        toggleBodyScroll(false);
    }
});

// Touch device optimizations
if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
    
    // Add touch feedback for buttons
    document.querySelectorAll('.btn, .filter-btn, .social-link').forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}