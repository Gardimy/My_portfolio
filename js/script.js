/* global ScrollReveal, Typed */

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar a');
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  navLinks.forEach((link) => {
    link.addEventListener('click', function handleClick(event) {
      event.preventDefault();

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove('active'));

      // Add active class to the clicked link
      this.classList.add('active');

      // Scroll to the target section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Close the menu and remove the toggle icon
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    });
  });

  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // Add a scroll event listener to close the menu on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the menu and remove the toggle icon on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });

  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, .heading, .heading2', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  // eslint-disable-next-line no-unused-vars
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Electronic Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
