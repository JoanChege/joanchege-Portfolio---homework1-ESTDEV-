//navigation bar function
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
}


//scroll animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

//home 
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

//project
sr.reveal('.project-box',{interval: 200})


//scroll animation that moves left to right
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  //about
  srLeft.reveal('.about-info',{delay: 100})
  //contact
  sr.left.reveal('.contact-info',{delay: 100})

  

