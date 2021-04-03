import menu from './menu.json';
import menuItemsTemplate from './templates/menu-items.hbs';

const menuItemsRef = document.querySelector('.js-menu');

menuItemsRef.innerHTML = menuItemsTemplate(menu);
