(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.n2');
  menuIcon.onclick = () =>{
    console.log(1);
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
  ScrollReveal({
      reset : true,
      distance: '80px',
      duration: 1000 , 
      delay : 200
  });
  ScrollReveal().reveal('.content1 ,  .aLeft ,  .prhead ,  .background' , { origin: 'top'});
  ScrollReveal().reveal(' .content2 ,  .aRight ,  .prcontent ' , { origin: 'bottom'});
 
  var typed = new Typed('#iter', {
    strings: ['Student' , 'Frontend Developer' , 'Music Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    loop : true
  });


