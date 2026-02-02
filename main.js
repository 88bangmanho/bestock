document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // 1. On page load, check for a saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  // 2. Add click event listener to the toggle button
  themeToggle.addEventListener('click', () => {
    // Toggle the .dark-mode class on the body
    body.classList.toggle('dark-mode');

    // 3. Save the user's preference to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
    } else {
      localStorage.removeItem('theme');
    }
  });
});
