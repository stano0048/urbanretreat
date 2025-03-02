// animations.js

// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  
  // Function to add hover animations to buttons
  function addHoverAnimations() {
    const buttons = document.querySelectorAll('.cta-button');
  
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });
  }
  
  // Function to animate the hero section
  function animateHeroSection() {
    const hero = document.querySelector('#hero');
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(50px)';
      setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
        hero.style.transition = 'opacity 1s ease, transform 1s ease';
      }, 500);
    }
  }
  
  // Function to animate the gallery carousel
  function animateGalleryCarousel() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
  
    setInterval(() => {
      galleryItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % galleryItems.length;
      galleryItems[currentIndex].classList.add('active');
    }, 6000); // Change image every 6 seconds
  }
  
  // Function to animate testimonials
  function animateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
  
    setInterval(() => {
      testimonials[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonials[currentIndex].classList.add('active');
    }, 5000); // Change testimonial every 5 seconds
  }
  
  // Function to initialize all animations
  function initAnimations() {
    animateOnScroll();
    addHoverAnimations();
    animateHeroSection();
    animateGalleryCarousel();
    animateTestimonials();
  }
  
  // Initialize animations when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initAnimations);