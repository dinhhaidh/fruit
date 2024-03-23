$(document).ready(function () {
  $("#nav-toggle").click(function(){
    $("#nav-menu").addClass("show-menu");
  });
  $("#nav-close").click(function(){
    $("#nav-menu").removeClass("show-menu");
  });
  $("#nav__link").click(function(){
    $('.active-link').removeClass("show-menu");
  });

  // khi kích vào nav__link nó sẽ ẳn đi
  $('.nav__item a').click(function(){
    $("#nav-menu").removeClass("show-menu");
  });
  // 
  $(window).scroll(function(){
    $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
    $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);

    // // active-link //
    // $('.active-link').addClass('nav__menu');

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]')
    
    const scrollActive = () =>{
        const scrollDown = window.scrollY
    
      sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
          sectionsClass.classList.add('active-link')
        }else{
          sectionsClass.classList.remove('active-link')
        }                                                    
      })
    }
    window.addEventListener('scroll', scrollActive)
  });
});


// dark-theme
$(document).ready( function(){
  $('#theme-button').click( function () {  
      $('body').toggleClass('dark-theme');
      $('.ri-moon-line').toggleClass('ri-sun-line');
  });
});
// 

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
sr.reveal(`.home__data, .join__container, .footer__container`) //hiệu ứng trên xuống
sr.reveal(`.home__img`,{origin: 'bottom'})
sr.reveal(`.enjoy__card, .popular__card`,{interval: 100}) //hiệu ứng trêm xuống lần lần từng giây
sr.reveal(`.about__data`,{origin: 'right'})
sr.reveal(`.about__img`,{origin: 'left'})
