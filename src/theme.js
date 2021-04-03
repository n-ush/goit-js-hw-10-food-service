const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleTheme = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const { LIGHT, DARK } = Theme;

toggleTheme.addEventListener('change', themeSwitch);

function enableDarkTheme() {
  bodyRef.classList.remove(LIGHT);
  bodyRef.classList.add(DARK);
  localStorage.setItem('theme', DARK);
}

function disableDarkTheme() {
  bodyRef.classList.remove(DARK);
  bodyRef.classList.add(LIGHT);
  localStorage.setItem('theme', LIGHT);
}

function themeSwitch() {
  if (toggleTheme.checked) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
}

const checkedTheme = localStorage.getItem('theme');
if (checkedTheme) {
  bodyRef.classList.add(checkedTheme);
}
if (checkedTheme === DARK) {
  toggleTheme.checked = true;
}
