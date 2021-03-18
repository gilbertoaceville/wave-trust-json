// copyright year
const currentYear = document.querySelector('.year')

// get current year and populate data to UI
window.addEventListener('load', () => {
    currentYear.textContent = new Date().getFullYear();
})

const navBar = document.querySelector('nav')
const navFixIndicator = document.querySelector('header p')
let topOfNav = navFixIndicator.offsetTop;

const navIcon = document.querySelector('nav svg')
const navList = document.querySelector('.nav-list')

let currentNomuber = 1;
// displaying menu if the nav icon listens to an event

const iconHandler = () => {
    if(currentNomuber) {
        document.body.style.paddingTop = (navList.offsetHeight + 35)+'px';
        document.body.classList.add('fixed-nav');
        navList.classList.add('display-nav-list');
        currentNomuber = 0;
    }else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
        navList.classList.remove('display-nav-list');
        currentNomuber = 1;
    }
}

navIcon.addEventListener('click', ()=>{iconHandler()})

// scrolling to fixate navigation bar
function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', () => { fixNav() })