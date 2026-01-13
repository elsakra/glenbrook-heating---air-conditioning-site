import { animate, inView, stagger } from '@motionone/dom';

// Initialize animations when DOM is loaded
function initAnimations() {
  // Fade in sections on scroll
  const sections = document.querySelectorAll<HTMLElement>('.animate-on-scroll');
  sections.forEach((section) => {
    inView(section, () => {
      animate(
        section,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
        { duration: 0.6, easing: 'ease-out' }
      );
    });
  });

  // Stagger animation for cards
  const cardContainers = document.querySelectorAll<HTMLElement>('.stagger-children');
  cardContainers.forEach((container) => {
    const cards = container.querySelectorAll<HTMLElement>('.stagger-item');
    inView(container, () => {
      animate(
        cards,
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
        { duration: 0.5, delay: stagger(0.1), easing: 'ease-out' }
      );
    });
  });

  // Hero text animation
  const heroTitle = document.querySelector<HTMLElement>('.hero-title');
  const heroSubtitle = document.querySelector<HTMLElement>('.hero-subtitle');
  const heroButtons = document.querySelector<HTMLElement>('.hero-buttons');

  if (heroTitle) {
    animate(
      heroTitle,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
      { duration: 0.8, delay: 0.2, easing: 'ease-out' }
    );
  }

  if (heroSubtitle) {
    animate(
      heroSubtitle,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
      { duration: 0.8, delay: 0.4, easing: 'ease-out' }
    );
  }

  if (heroButtons) {
    animate(
      heroButtons,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
      { duration: 0.8, delay: 0.6, easing: 'ease-out' }
    );
  }

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (navbar) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  }

  // Button hover effects
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(
        button,
        { scale: 1.05 },
        { duration: 0.2, easing: 'ease-out' }
      );
    });
    
    button.addEventListener('mouseleave', () => {
      animate(
        button,
        { scale: 1 },
        { duration: 0.2, easing: 'ease-out' }
      );
    });
  });

  // Card hover effects
  const cards = document.querySelectorAll<HTMLElement>('.card-hover');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      animate(
        card,
        { transform: 'translateY(-8px)' },
        { duration: 0.3, easing: 'ease-out' }
      );
    });
    
    card.addEventListener('mouseleave', () => {
      animate(
        card,
        { transform: 'translateY(0px)' },
        { duration: 0.3, easing: 'ease-out' }
      );
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

export { initAnimations };