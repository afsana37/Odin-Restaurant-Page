// src/contact.js
export function createContactTab() {
    const contentDiv = document.getElementById('content');
  
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');
    contactDiv.textContent = 'Contact information';
    contentDiv.appendChild(contactDiv);
  }
  