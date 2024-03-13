
document.addEventListener("DOMContentLoaded", () => {
  const searchToggle = document.querySelector(".logo-toggle");
  const sidebarOpen = document.querySelector(".sidebarOpen");
  const nav = document.querySelector("nav");
  const body = document.body;

  searchToggle.addEventListener("click", () => {
      searchToggle.classList.toggle("active");
      nav.classList.toggle("active");
  });

  sidebarOpen.addEventListener("click", () => {
      nav.classList.toggle("active");
  });

  body.addEventListener("click", (e) => {
      let clickedElm = e.target;

      if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
          nav.classList.remove("active");
          searchToggle.classList.remove("active");
      }
  });
});

$('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
      $('.portfolio-menu ul li').click(function(){
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');
      });


   /// tooglle 


  
   
   