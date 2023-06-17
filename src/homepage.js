// src/homepage.js
export function createHomepage() {
  const contentDiv = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Restaurant';
  contentDiv.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent = 'Discover the best dining experience in town.';
  contentDiv.appendChild(copy);
}
