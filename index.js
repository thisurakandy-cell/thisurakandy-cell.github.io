const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', (e) => {
  dropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});