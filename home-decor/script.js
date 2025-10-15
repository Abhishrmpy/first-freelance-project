// Sample design data - THIS IS WHERE YOUR IMAGE PATHS ARE STORED
const designs = [
    {
        id: 1,
        title: "Modern Living Room",
        description: "A sleek urban living space with industrial elements and minimalist design.",
        category: "interior",
        image: "/images/image1.jpeg"  // Added forward slash at beginning
    },
    {
        id: 2,
        title: "Contemporary Bedroom",
        description: "Elegant bedroom design with modern furniture and warm lighting.",
        category: "interior",
        image: "/images/image2.jpeg"
    },
    {
        id: 3,
        title: "Minimalist Kitchen",
        description: "Clean and functional kitchen design with premium appliances.",
        category: "interior",
        image: "/images/image3.jpeg"
    },
    {
        id: 4,
        title: "Luxury Bathroom",
        description: "Spa-like bathroom with premium fixtures and natural materials.",
        category: "interior",
        image: "/images/image4.jpeg"
    },
    {
        id: 5,
        title: "Modern Exterior",
        description: "Contemporary home exterior with clean lines and natural landscaping.",
        category: "exterior",
        image: "/images/image5.jpeg"
    },
    {
        id: 6,
        title: "Garden Oasis",
        description: "Beautiful outdoor space with landscaping and comfortable seating.",
        category: "exterior",
        image: "/images/image6.jpeg"
    },
    {
        id: 7,
        title: "Commercial Space",
        description: "Modern office design with collaborative spaces and natural light.",
        category: "commercial",
        image: "/images/image7.jpeg"
    },
    {
        id: 8,
        title: "Residential Complex",
        description: "Luxury residential building with modern amenities.",
        category: "residential",
        image: "/images/image8.jpeg"
    },
    {
        id: 9,
        title: "Architectural Design",
        description: "Innovative architectural concept with sustainable materials.",
        category: "residential",
        image: "/images/image9.jpeg"
    }
];
// DOM Content Loaded - THIS RUNS WHEN THE WEBSITE FINISHES LOADING
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Website loaded successfully!");
    console.log("🔍 Let's check if everything is working...");
    
    initializeTheme();
    initializeNavigation();
    initializeDesignGrid();
    initializeScrollEffects();
    initializeForm();
    
    // Hide loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    loadingScreen.style.visibility = 'hidden';
});

// Theme Toggle - FOR DARK/LIGHT MODE
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

// Navigation - FOR MOBILE MENU
function initializeNavigation() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
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

// Design Grid - THIS IS WHERE IMAGES GET LOADED!
function initializeDesignGrid() {
    const designGrid = document.getElementById('designGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    console.log("🎨 Design section found:", designGrid);
    console.log("📸 Number of designs to show:", designs.length);
    
    // Let's check each image path
    console.log("🔎 Checking image paths:");
    designs.forEach(design => {
        console.log("   - Looking for:", design.image, "for", design.title);
    });
    
    // Populate design grid
    renderDesigns(designs);
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
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
            
            console.log("🎯 Filtered to", filteredDesigns.length, "designs");
            renderDesigns(filteredDesigns);
        });
    });
}

// THIS FUNCTION ACTUALLY CREATES THE IMAGE CARDS
function renderDesigns(designsArray) {
    const designGrid = document.getElementById('designGrid');
    
    console.log("🖼️ Creating", designsArray.length, "design cards...");
    
    designGrid.innerHTML = '';
    
    designsArray.forEach(design => {
        const designCard = document.createElement('div');
        designCard.className = 'design-card';
        
        // THIS IS WHERE THE MAGIC HAPPENS!
        // We create HTML for each design card
        designCard.innerHTML = `
            <img src="${design.image}" alt="${design.title}" loading="lazy" 
                 onerror="console.error('❌ FAILED to load image: ${design.image}')">
            <div class="card-content">
                <h3 class="card-title">${design.title}</h3>
                <p class="card-description">${design.description}</p>
            </div>
        `;
        
        designGrid.appendChild(designCard);
    });
    
    console.log("✅ Finished creating design cards!");
}

// Scroll Effects - FOR THE PROGRESS BAR
function initializeScrollEffects() {
    // Scroll progress bar
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scrollProgress').style.width = scrolled + '%';
    });
}

// Contact Form - FOR THE CONTACT SECTION
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