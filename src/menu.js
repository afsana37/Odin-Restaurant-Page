// src/menu.js
export function createMenuTab() {
    const contentDiv = document.getElementById('content');
  
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');
    menuDiv.textContent = 'Our Menu';
    contentDiv.appendChild(menuDiv);
  }
  