const body = document.querySelector('body');
const main = document.querySelector('#main');
const sectionTwo = document.querySelector('#two');
const sectionTwoText = document.querySelector('#two > div');
var a = sectionTwo.getBoundingClientRect();
const sectionThree = document.querySelector('#three');
const sectionThreeText = document.querySelector('#three > div');
var b = sectionThree.getBoundingClientRect();
const sectionFour = document.querySelector('#four');
const sectionFourText = document.querySelector('#four > div');
var c = sectionFour.getBoundingClientRect();
const sectionFive = document.querySelector('#five');
const sectionFiveText = document.querySelector('#five > div');
var d = sectionFive.getBoundingClientRect();
const sectionSix = document.querySelector('#six');
const sectionSixText = document.querySelector('#six > div');
var e = sectionSix.getBoundingClientRect();
const sectionSeven = document.querySelector('#seven');
const sectionSevenText = document.querySelector('#seven > div');
var f = sectionSeven.getBoundingClientRect();
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const SVG = document.querySelectorAll('svg');


let freeze = false;

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


window.addEventListener('scroll',()=>
    {
        const scrollY = window.scrollY;
        console.log(scrollY);
        console.log(a.top, a.bottom);
        if(scrollY > a.top){
            freeze=true;
            console.log(freeze);
            const translateY = scrollY - a.top;
            console.log('Ty: ' + translateY);
            sectionTwoText.style.transform = `translateY(${-translateY}px)`;
            main.style.transform  = `translateY(${translateY}px)`;
            
            if(window.scrollY > a.bottom){
                freeze=false;
                console.log(freeze);
                main.style.transform  = `none`;
                sectionTwoText.style.transform = `translateY(0)`;
            }
        }
        if(scrollY > b.top){
            freeze=true;
            console.log(freeze);
            const translateY = scrollY - b.top;
            console.log('Ty2: ' + translateY);
            sectionThreeText.style.transform = `translateY(${-translateY}px)`;
            main.style.transform  = `translateY(${translateY}px)`;
            
            if(window.scrollY > b.bottom){
                freeze=false;
                console.log(freeze);
                main.style.transform  = `none`;
                sectionThreeText.style.transform = `translateY(0)`;
            }
        }
        if(scrollY > c.top){
            freeze=true;
            console.log(freeze);
            const translateY = scrollY - c.top;
            console.log('Ty3: ' + translateY);
            sectionFourText.style.transform = `translateY(${-translateY}px)`;
            main.style.transform  = `translateY(${translateY}px)`;
            
            if(window.scrollY > c.bottom){
                freeze=false;
                console.log(freeze);
                main.style.transform  = `none`;
                sectionFourText.style.transform = `translateY(0)`;
            }
        }
        if(scrollY > d.top){
            freeze=true;
            console.log(freeze);
            const translateY = scrollY - d.top;
            console.log('Ty4: ' + translateY);
            sectionFiveText.style.transform = `translateY(${-translateY}px)`;
            main.style.transform  = `translateY(${translateY}px)`;
            
            if(window.scrollY > d.bottom){
                freeze=false;
                console.log(freeze);
                main.style.transform  = `none`;
                sectionFiveText.style.transform = `translateY(0)`;
            }
        }
        if(scrollY > e.top){
            freeze=true;
            console.log(freeze);
            const translateY = scrollY - e.top;
            console.log('Ty5: ' + translateY);
            sectionSixText.style.transform = `translateY(${-translateY}px)`;
            main.style.transform  = `translateY(${translateY}px)`;
            
            if(window.scrollY > e.bottom){
                freeze=false;
                console.log(freeze);
                main.style.transform  = `none`;
                sectionSixText.style.transform = `translateY(0)`;
            }
        }
        // if(scrollY > f.top){
        //     freeze=true;
        //     console.log(freeze);
        //     const translateY = scrollY - f.top;
        //     console.log('Ty6: ' + translateY);
        //     sectionSevenText.style.transform = `translateY(${-translateY}px)`;
        //     main.style.transform  = `translateY(${translateY}px)`;
            
        //     if(window.scrollY > f.bottom){
        //         freeze=false;
        //         console.log(freeze);
        //         main.style.transform  = `none`;
        //         sectionSevenText.style.transform = `translateY(0)`;
        //     }
        // }
    });