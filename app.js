const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('#about');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.classList.add('on-about');
      } else {
        navbar.classList.remove('on-about');
      }
    });
  }, { threshold: 0.35 });

  observer.observe(aboutSection);
});