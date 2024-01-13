// ====================================
let menuIcon = document.querySelector("#menu-icon");
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// ================================================================
var typed = new Typed(".text", {
    strings: ["Tech Enthusiast", "Full-stack Developer", "Volunteer"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });


//  ============================================================= 
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () =>{
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    // ========================================================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
