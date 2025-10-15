// Sample design data with your actual images
const designs = [
    {
        id: 1,
        title: "Modern Living Room",
        description: "A sleek urban living space with industrial elements and minimalist design.",
        category: "interior",
        image: "images/image1.jpg"
    },
    {
        id: 2,
        title: "Contemporary Bedroom",
        description: "Elegant bedroom design with modern furniture and warm lighting.",
        category: "interior",
        image: "images/image2.jpg"
    },
    {
        id: 3,
        title: "Minimalist Kitchen",
        description: "Clean and functional kitchen design with premium appliances.",
        category: "interior",
        image: "images/image3.jpg"
    },
    {
        id: 4,
        title: "Luxury Bathroom",
        description: "Spa-like bathroom with premium fixtures and natural materials.",
        category: "interior",
        image: "images/image4.jpg"
    },
    {
        id: 5,
        title: "Modern Exterior",
        description: "Contemporary home exterior with clean lines and natural landscaping.",
        category: "exterior",
        image: "images/image5.jpg"
    },
    {
        id: 6,
        title: "Garden Oasis",
        description: "Beautiful outdoor space with landscaping and comfortable seating.",
        category: "exterior",
        image: "images/image6.jpg"
    },
    {
        id: 7,
        title: "Commercial Space",
        description: "Modern office design with collaborative spaces and natural light.",
        category: "commercial",
        image: "images/image7.jpg"
    },
    {
        id: 8,
        title: "Residential Complex",
        description: "Luxury residential building with modern amenities.",
        category: "residential",
        image: "images/image8.jpg"
    },
    {
        id: 9,
        title: "Architectural Design",
        description: "Innovative architectural concept with sustainable materials.",
        category: "residential",
        image: "images/image9.jpg"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeDesignGrid();
    initializeScrollEffects();
    initializeForm();
    
    // Hide loading screen after a short delay to ensure everything is loaded
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }
    }, 500);
});

// Theme Toggle
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
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
    
    if (!mobileMenu || !navMenu) return;
    
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
    
    if (!designGrid) return;
    
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
    if (!designGrid) return;
    
    designGrid.innerHTML = '';
    
    designsArray.forEach(design => {
        const designCard = document.createElement('div');
        designCard.className = 'design-card';
        designCard.innerHTML = `
            <img src="${design.image}" alt="${design.title}" loading="lazy">
            <div class="card-content">
                <h3 class="card-title">${design.title}</h3>
                <p class="card-description">${design.description}</p>
            </div>
        `;
        
        designGrid.appendChild(designCard);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Scroll progress bar
    window.addEventListener('scroll', () => {
        const scrollProgress = document.getElementById('scrollProgress');
        if (!scrollProgress) return;
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Contact Form
function initializeForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
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