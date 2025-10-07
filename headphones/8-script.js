document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Function to toggle the menu's visibility
  function toggleMenu() {
    navLinks.classList.toggle('open');
  }

  // Event listener for clicks on the hamburger menu checkbox
  menuToggle.addEventListener('click', toggleMenu);

  // Close the menu if a link is clicked (optional but good for mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
});
