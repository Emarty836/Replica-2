const sectionTwo = document.querySelector('#two');
const sectionTwoText = document.querySelector('#two > div');
var a = sectionTwo.getBoundingClientRect();
const body = document.querySelector('body');
const main = document.querySelector('#main');

let freeze = false;

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
            // sectionTwo.style.position = 'fixed';
            // sectionTwo.style.top = '0';
            main.style.transform  = `translateY(${translateY}px)`;
            
            if(window.scrollY > a.bottom){
                freeze=false;
                console.log(freeze);
                main.style.transform  = `none`;
                sectionTwoText.style.transform = `translateY(0)`;
            }
        }
    });