(()=>{"use strict";function t(){const t=document.getElementById("content"),e=document.createElement("h1");e.textContent="Welcome to Our Restaurant",t.appendChild(e);const n=document.createElement("p");n.textContent="Discover the best dining experience in town.",t.appendChild(n)}t();const e=document.getElementById("home-tab"),n=document.getElementById("contact-tab"),c=document.getElementById("menu-tab");e.addEventListener("click",(()=>{contentDiv.innerHTML="",t()})),n.addEventListener("click",(()=>{contentDiv.innerHTML="",function(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("tab-content"),e.textContent="Contact information",t.appendChild(e)}()})),c.addEventListener("click",(()=>{contentDiv.innerHTML="",function(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("tab-content"),e.textContent="Our Menu",t.appendChild(e)}()}))})();