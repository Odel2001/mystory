const readMoreButtons = document.querySelectorAll('.read-more');
const fadeInElements = document.querySelectorAll('.fade-in');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const moreText = button.previousElementSibling;
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'inline';
      button.textContent = 'Read Less';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Read More';
    }
  });
});

// Scroll Animation for Fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

fadeInElements.forEach(element => {
  observer.observe(element);
});
