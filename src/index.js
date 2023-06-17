// src/index.js
import { createHomepage } from './homepage';
import { createContactTab } from './contact';
import { createMenuTab } from './menu';

createHomepage();

// Get the tab elements
const homeTab = document.getElementById('home-tab');
const contactTab = document.getElementById('contact-tab');
const menuTab = document.getElementById('menu-tab');

// Add event listeners to the tabs
homeTab.addEventListener('click', () => {
  contentDiv.innerHTML = ''; // Clear existing content
  createHomepage();
});

contactTab.addEventListener('click', () => {
  contentDiv.innerHTML = ''; // Clear existing content
  createContactTab();
});

menuTab.addEventListener('click', () => {
  contentDiv.innerHTML = ''; // Clear existing content
  createMenuTab();
});
