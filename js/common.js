/*
 * Javascript for nav bar that appears on every page
 * RESOURCE:
 * L. Embrey,'17 Beautiful JavaScript Menus You'll Love', 2022. [Online]. Available: https://alvarotrigo.com/blog/javascript-menus/. [Accessed: 30- July- 2022].
*/

// Hamburger Menu Navigation 
var navSlide = () => {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();