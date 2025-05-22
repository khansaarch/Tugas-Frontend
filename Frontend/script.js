// Hamburger menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Dark mode toggle
    const darkToggleBtn = document.getElementById('dark-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const htmlElement = document.documentElement;

    // Initialize theme based on localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      htmlElement.classList.add('dark');
      iconSun.classList.add('hidden');
      iconMoon.classList.remove('hidden');
    } else {
      htmlElement.classList.remove('dark');
      iconSun.classList.remove('hidden');
      iconMoon.classList.add('hidden');
    }

    // Toggle dark mode on button click
    darkToggleBtn.addEventListener('click', () => {
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        iconSun.classList.remove('hidden');
        iconMoon.classList.add('hidden');
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        iconSun.classList.add('hidden');
        iconMoon.classList.remove('hidden');
      }
    });
