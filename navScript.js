const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const SVG = document.querySelectorAll('svg');


let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the sidebar
    console.log('scrolling down')
    navLeft.style.transform = 'translateX(-100%)';
    navRight.style.transform = 'translateX(100%)';
    SVG.forEach(svg => {svg.style.transform = 'translateY(-90px)'});
  } else {
    console.log('scrolling up')
    // Scrolling up, reveal the sidebar
    navLeft.style.transform = 'translateX(0)';
    navRight.style.transform = 'translateX(0)';
    SVG.forEach(svg => {svg.style.transform = 'translateY(0)'});
  }

  lastScrollTop = scrollTop;
});