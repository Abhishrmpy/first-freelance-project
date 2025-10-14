// Sample design data
const designs = [
    {
        id: 1,
        title: "Modern Loft Apartment",
        description: "A sleek urban living space with industrial elements and minimalist design.",
        category: "interior",
        image: "assets/images/loft.jpg"
    },
    {
        id: 2,
        title: "Coastal Villa",
        description: "Beachfront property with open spaces and natural materials.",
        category: "exterior",
        image: "assets/images/villa.jpg"
    },
    {
        id: 3,
        title: "Mountain Retreat",
        description: "Rustic cabin with modern amenities and panoramic views.",
        category: "residential",
        image: "assets/images/retreat.jpg"
    },
    {
        id: 4,
        title: "Urban Penthouse",
        description: "Luxury high-rise apartment with premium finishes and city views.",
        category: "interior",
        image: "assets/images/penthouse.jpg"
    },
    {
        id: 5,
        title: "Minimalist House",
        description: "Clean lines, open spaces, and functional design principles.",
        category: "residential",
        image: "assets/images/minimalist.jpg"
    },
    {
        id: 6,
        title: "Family Residence",
        description: "Spacious home designed for modern family living and entertaining.",
        category: "residential",
        image: "assets/images/family.jpg"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeDesignGrid();
    initializeScrollEffects();
    initializeForm();
    
    // Hide loading screen immediately
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    loadingScreen.style.visibility = 'hidden';
});

// Theme Toggle
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Navigation
function initializeNavigation() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        // Toggle body scroll
        if (navMenu.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Design Grid
function initializeDesignGrid() {
    const designGrid = document.getElementById('designGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Populate design grid
    renderDesigns(designs);
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.textContent.toLowerCase();
            let filteredDesigns;
            
            if (filter === 'all') {
                filteredDesigns = designs;
            } else {
                filteredDesigns = designs.filter(design => 
                    design.category === filter
                );
            }
            
            renderDesigns(filteredDesigns);
        });
    });
}

function renderDesigns(designsArray) {
    const designGrid = document.getElementById('designGrid');
    designGrid.innerHTML = '';
    
    designsArray.forEach(design => {
        const designCard = document.createElement('div');
        designCard.className = 'design-card';
        designCard.innerHTML = `
            <div class="card-image">
                <div class="spline-placeholder">
                    <i class="fas fa-cube"></i>
                    <p>3D Preview</p>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${design.title}</h3>
                <p class="card-description">${design.description}</p>
            </div>
        `;
        
        // Add hover effect
        designCard.addEventListener('mouseenter', () => {
            designCard.style.transform = 'translateY(-10px)';
        });
        
        designCard.addEventListener('mouseleave', () => {
            designCard.style.transform = 'translateY(0)';
        });
        
        designGrid.appendChild(designCard);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Scroll progress bar
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scrollProgress').style.width = scrolled + '%';
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form
function initializeForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const nameInput = this.querySelector('input[type="text"]');
        const name = nameInput.value || 'User';
        
        // Show success message
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

