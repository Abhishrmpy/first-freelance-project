# Nandani Home Decor Portfolio Website

A modern, responsive portfolio website built for Nandani, a UI/UX designer specializing in real estate and home design. This was my first freelance project, built in two days using vanilla HTML, CSS, and JavaScript.

## Table of Contents

- [About This Project](#about-this-project)
- [Overview](#overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Key Features Explained](#key-features-explained)
- [Troubleshooting](#troubleshooting)
- [Learning Outcomes](#learning-outcomes)
- [Future Enhancements](#future-enhancements)

## About This Project

This is my first freelance web development project. Built in just two days, it demonstrates my ability to deliver professional, fully-functional websites using vanilla web technologies. The project showcases time management, problem-solving, and the ability to translate client requirements into a polished final product.

**Project Details:**
- Duration: 2 days
- Technologies: HTML5, CSS3, JavaScript (Vanilla)
- Client: Nandani (UI/UX Designer)
- Deliverable: Complete responsive portfolio website

## Overview

This portfolio website is a complete solution for showcasing home design projects with a professional aesthetic. The site includes a hero section, about page, interactive design gallery, contact form, and comprehensive footer. Built with vanilla HTML, CSS, and JavaScript for optimal performance and maintainability.

## Screenshots

### Hero Section & Navigation
The landing page features a striking hero section with a 3D background, bold typography, and easy navigation. The theme toggle button is visible in the top right corner.

![Hero Section](https://raw.githubusercontent.com/Abhishrmpy/nandani-portfolio/main/home-decor/UI/hero-section.jpg)

### Design Gallery & About Section
The portfolio showcases 9 beautiful home design projects in an interactive grid layout with filtering options. Each project includes an image, title, and description. The About Me section highlights the designer's experience and philosophy.

![Design Gallery](https://raw.githubusercontent.com/Abhishrmpy/nandani-portfolio/main/home-decor/UI/gallery-section.jpg)

### Contact Section & Footer
A comprehensive contact form allows visitors to get in touch, with contact information and social media links. The footer features a multi-column layout with navigation links, company information, and contact details.

![Contact & Footer](https://raw.githubusercontent.com/Abhishrmpy/nandani-portfolio/main/home-decor/UI/contact-footer.jpg)

## Features

- **Dark/Light Mode Toggle**: Switch between dark and light themes with persistent storage
- **Responsive Design**: Fully mobile-friendly layout that works on all device sizes
- **Interactive Gallery**: Browse through 9 home design projects with filtering capabilities
- **Loading Animation**: Professional loading screen for better user experience
- **Scroll Progress Bar**: Visual indicator showing page scroll position
- **Image Filter System**: Filter designs by category
- **Smooth Animations**: Subtle transitions and animations throughout the site
- **Contact Form**: Fully functional contact section for client inquiries
- **Modern Footer**: Multi-column footer with links, social media, and contact information

## Technical Stack

- **HTML5**: Semantic markup for proper structure
- **CSS3**: Modern styling with CSS variables, Flexbox, and Grid
- **JavaScript (Vanilla)**: No frameworks required for interactive features
- **Local Storage**: For theme preference persistence

## Project Structure

```
nandani-portfolio/
├── index.html          # Main HTML file with complete page structure
├── style.css           # All CSS styling and responsive design rules
├── script.js           # JavaScript functionality and interactivity
└── images/             # Design project images directory
    ├── image1.jpeg
    ├── image2.jpeg
    ├── image3.jpeg
    ├── image4.jpeg
    ├── image5.jpeg
    ├── image6.jpeg
    ├── image7.jpeg
    ├── image8.jpeg
    └── image9.jpeg
```

## Installation

1. Clone or download the repository to your local machine
2. Ensure all files are in the same directory
3. Verify the images folder contains all 9 design project images
4. Open `index.html` in your web browser

No build tools or dependencies required. The website runs entirely client-side.

## Usage

Simply open `index.html` in any modern web browser. Navigate through the site using the navigation menu. Use the theme toggle button to switch between dark and light modes. Browse the design gallery using the filter options.

## Key Features Explained

### Dark/Light Mode Toggle

The theme switcher uses CSS variables to change colors across the entire site. User preference is saved to local storage, so the chosen theme persists across sessions.

```javascript
// Theme switching mechanism
const toggleTheme = () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
};
```

### Responsive Design

The layout uses mobile-first design principles with breakpoints for tablets and desktops. Flexbox and Grid provide flexible layouts that adapt to screen size.

### Dynamic Image Gallery

Images are loaded dynamically through JavaScript, allowing for easy updates. The filter system lets users sort designs by category.

### Scroll Progress Bar

A visual progress indicator at the top of the page shows how far down the user has scrolled, implemented through window scroll event listeners.

### Mobile Menu

Navigation adapts for mobile devices with a collapsible menu that opens and closes on button click.

## Troubleshooting

### Images Not Displaying

Images require exact filename matches with correct case sensitivity. All image references in the code are lowercase. Ensure your image files follow this naming convention:
- image1.jpeg (not Image1.jpeg or image1.JPG)

### Theme Not Persisting

Clear your browser's local storage and reload the page. The theme preference should be restored on the next visit.

### Animations Appearing Choppy

Ensure your browser is up to date. Modern browsers render CSS animations smoothly. On slower devices, reduce animation duration in CSS variables.

### Mobile Menu Not Working

Verify JavaScript is enabled in your browser. The mobile menu requires JavaScript to toggle the navigation display.

## Learning Outcomes

This project demonstrates several important web development concepts and real-world challenges:

1. **Time Management**: Delivering a complete, professional website in a compressed timeframe
2. **File Path Management**: Importance of consistent naming conventions and case sensitivity in file references
3. **CSS Variables**: Creating reusable color and size values for easy theme implementation
4. **DOM Manipulation**: Dynamically creating and updating page content with JavaScript
5. **Responsive Design**: Mobile-first approach and media queries for multi-device support
6. **Local Storage**: Persisting user preferences across browser sessions
7. **Semantic HTML**: Proper structure for accessibility and SEO
8. **CSS Flexbox and Grid**: Modern layout techniques for responsive design
9. **Event Handling**: Managing user interactions like clicks and scrolling
10. **Debugging**: Using browser console and developer tools to identify and solve problems
11. **Client Communication**: Understanding and translating client needs into functional features

## Future Enhancements

Potential improvements for future versions:

- Integration with a backend service for contact form submissions
- Photo carousel or lightbox for larger image viewing
- Blog section for design tips and tutorials
- Client testimonials or case studies
- Search functionality for design projects
- Integration with social media feeds
- Performance optimization with image lazy loading
- Animation on scroll effects
- Multi-language support

## Browser Compatibility

This website works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for professional portfolio use. Feel free to customize and adapt for your needs.

## Contact and Support

For questions or issues with this portfolio website, please refer to the contact form on the site itself or check the footer for contact information.

---

**Note**: Replace the placeholder images with actual home design project photos to showcase real work. Ensure all images are properly named in lowercase with .jpeg extension for best results.
