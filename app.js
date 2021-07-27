var slider = document.getElementById('intro');
var hello = document.querySelector('h2');
var info = document.querySelector('.info');
var right = document.querySelector('.right');
var bottom = document.querySelector('.bottom');
var arrow = document.querySelector('.scroll-down');
var arrowLeft = document.querySelector('.scroll-down-left');


var browserHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
// console.log(browserHeight);



window.onscroll = function(e) {

  if (window.screen.width >= 768) {
    function offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    var div = document.querySelector('.intro-image');
    var divOffset = offset(div);
    // console.log(divOffset.top);

    var wScroll = window.scrollY;
    // console.log(wScroll);

    var offScroll = (divOffset.top - browserHeight + 40);
    // console.log(offScroll);

    var totScroll = wScroll - (divOffset.top - browserHeight + 40);
    console.log(totScroll);
    if (wScroll > divOffset.top - browserHeight + 40) {
      hello.style.transform = 'translate(-50%, -'+ totScroll /6 +'%)';
      hello.style.transition = 'none';
      info.style.transform = 'translate(0, -'+ totScroll /30 +'%)';
    } else {
      hello.style.transform = 'translate(-50%, 0)';
      hello.style.transition = '1s ease-in';
      info.style.top = '25%';
    }
    if (window.pageYOffset > 1 ) {
      slider.style.width = '100%';
      hello.style.left = '100%';
      right.style.display = 'block';
      bottom.style.display = 'block';
      info.style.display = 'block';
      arrow.style.display = 'none';
      arrowLeft.style.display = 'block';
    } else {
      slider.style.width = '50%';
      hello.style.left = '50%';
      info.style.display = 'none';
      arrow.style.display = 'block';
      arrowLeft.style.display = 'none';
    }
  } else {
    if (window.pageYOffset > 1 ) {
      slider.style.width = '100%';
      hello.style.left = '100%';
      right.style.display = 'block';
      bottom.style.display = 'block';
      info.style.display = 'block';
      arrow.style.display = 'none';
    } else {
      slider.style.width = '50%';
      hello.style.left = '50%';
      info.style.display = 'none';
      arrow.style.display = 'block';
    }
  }
};



function navBtn(x) {
  p = document.getElementById('responsive_nav');
  q = document.querySelector('.side-text');
  x.classList.toggle("change");

  if (p.style.width === "0%") {
    p.style.width = "85%";
  } else {
    p.style.width = "0%";
  }
};

function sideBtn(x) {
  p = document.getElementById('responsive_nav');
  q = document.querySelector('.side-text');
  x.classList.toggle("change2");

  if (p.style.width === "0%") {
    p.style.width = "85%";
    q.style.display = 'none';
  } else {
    p.style.width = "0%";
    q.style.display ='block';
  }
};



  var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    delay: 1400
  };
  var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    delay: 800
  };
  var slideDown = {
    distance: '150%',
    origin: 'top',
    opacity: 0,
    delay: 1400
  };

  ScrollReveal().reveal('.intro-text', slideLeft);
  ScrollReveal().reveal('.fab-contact', )
  ScrollReveal().reveal('h3', slideUp);
  ScrollReveal().reveal('#about-text', slideUp);
  ScrollReveal().reveal('.container', {
    delay: 1000
  });
  ScrollReveal().reveal('.footer-text', slideDown);
