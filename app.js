const toggleBtn = document.querySelector(".sidebar-toggle");
const clostBtn = document.querySelector(".close-btn");
const links = document.querySelector(".links");
const sidebarAside = document.querySelector(".sidebar");
console.log(sidebarAside);

toggleBtn.addEventListener("click", function () {
  
  sidebarAside.classList.toggle('show-sidebar')
});

clostBtn.addEventListener("click", function () {
  sidebarAside.classList.remove('show-sidebar');
});
