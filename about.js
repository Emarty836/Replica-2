const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const SVG = document.querySelectorAll('svg');
const arrow = document.querySelector('#arrow');
const hiddenFlex = document.querySelector('.hiddenFlex');
const blockOne = document.querySelector('#blockOne');
const main = document.querySelector('main');


let lastScrollTop = 0;
let rotated = false;

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

arrow.addEventListener('click', ()=>{
    rotated = !rotated;
    if (rotated){
        console.log('active');
        hiddenFlex.style.visibility = 'visible';
        arrow.style.transform = 'rotate(135deg)';
        blockOne.style.height = '520px';
        main.style.height = '1600px';
    } else{
        hiddenFlex.style.visibility = 'hidden';
        arrow.style.transform = 'rotate(45deg)';
        blockOne.style.height = '121.5px';
        main.style.height = '1200px';
    }
})