const spans = document.querySelectorAll('h1 span')

spans.forEach(index => index.addEventListener('mouseover', function(e){

    index.classList.add('animated', 'rubberBand')
} ))

spans.forEach(index => index.addEventListener('mouseout', function(e){

    index.classList.remove('animated', 'rubberBand')
} ))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const jq = document.querySelector('.bar-jq')
const BS = document.querySelector('.bar-bs')
const CS = document.querySelector('.bar-cs')
const Cpp = document.querySelector('.bar-cpp')


//For the Skill Bars
var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeout})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeout})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(50% - 6px)`, ease: Power4.easeout})
    .fromTo(jq, .75, { width: `calc(0% - 6px)` }, { width: `calc(70% - 6px)`, ease: Power4.easeout })
    .fromTo(BS, .75, { width: `calc(0% - 6px)` }, { width: `calc(70% - 6px)`, ease: Power4.easeout })
    .fromTo(CS, .75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)`, ease: Power4.easeout })
    .fromTo(Cpp, .75, { width: `calc(0% - 6px)` }, { width: `calc(30% - 6px)`, ease: Power4.easeout })
   

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t1).addTo(controller)


function showRequiredCategory(event) {

    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^= "category-"]')

    for(i=0;i<categories.length; i++) {
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}