document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.menu-section');
  const navLinks = document.querySelectorAll('.category-link');

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 130, // Offset for header
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight active section on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      // If we've scrolled past the section (with offset)
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Set initial active state
  if (window.scrollY === 0 && navLinks.length > 0) {
      navLinks[0].classList.add('active');
  }
});
