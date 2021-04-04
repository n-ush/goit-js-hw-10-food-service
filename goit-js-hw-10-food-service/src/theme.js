const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleTheme = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const { LIGHT, DARK } = Theme;

toggleTheme.addEventListener('change', themeSwitch);

function replaceClass(theme) {
  bodyRef.classList.value = '';
  bodyRef.classList.add(theme);
  localStorage.setItem('Theme', theme);
}

function themeSwitch() {
  if (toggleTheme.checked) {
    replaceClass(Theme.DARK);
  } else {
    replaceClass(Theme.LIGHT);
  }
}

const checkedTheme = localStorage.getItem('Theme');
if (checkedTheme) {
  bodyRef.classList.add(checkedTheme);
}
if (checkedTheme === DARK) {
  toggleTheme.checked = true;
}
