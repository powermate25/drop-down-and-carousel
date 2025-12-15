const mainFrame = document.querySelector(".main-frame")
const slidesContainer = document.querySelector(".slides-container")

const clog = console.log
let baseSlideIndex = 1
let nextSlideIndex

const nextCarousel = function () {
    console.log(`🔔 Carousel show running! Previous slide index is: ${baseSlideIndex}`)

    const allCarouselSlides = document.querySelectorAll(".slides-container img")
    let totalSlides = allCarouselSlides.length
    nextSlideIndex = ++baseSlideIndex
    // Checking nextIndex to show against total carousel length first.
    if ( nextSlideIndex === (totalSlides + 1) ){
        clog (`🚨 End of carousel now reached!`)
        clog (`🚨 Next Slide would be: ${nextSlideIndex}. but total carousel is: ${totalSlides}`)
        clog (`🔄 Will now loop.`)
        nextSlideIndex = 1
        baseSlideIndex = 1
    }

    if (nextSlideIndex <= totalSlides){
        const nextSlideArt = document.querySelector(`.slides-container #slide${nextSlideIndex}`)
        nextSlideArt.scrollIntoView()
        const clickedNavCircle = document.querySelector(`.nav-circle #slide${nextSlideIndex}`)
        clickedNavCircle.click()
        clog(`🔔 Showing index No: ${nextSlideIndex}`)
    }  
    
}

// Refactor with previousCarousel fn below once i'm back.
const previousCarousel = function () {
    console.log(`🔔 Carousel show running! Previous slide index is: ${baseSlideIndex}`)

    const allCarouselImages = document.querySelectorAll(".slides-container img")
    let totalSlides = allCarouselImages.length
    let previousSlideIndex = --baseSlideIndex
    if (previousSlideIndex === 0){
        clog (`🚨 Beginning of carousel now reached!`)
        clog (`🚨 Previous Slide would be: ${previousSlideIndex}. But slide show only starts at 1`)
        clog (`🔄 Will now loop back.`)
        previousSlideIndex = totalSlides
        baseSlideIndex = totalSlides
    } 
    if (previousSlideIndex <= totalSlides) {
        const previousSlideArt = document.querySelector(`.slides-container #slide${previousSlideIndex}`)
        previousSlideArt.scrollIntoView()
        const clickedNavCircle = document.querySelector(`.nav-circle #slide${previousSlideIndex}`)
        clickedNavCircle.click()
        clog(`🔔 Showing index No: ${previousSlideIndex}`)
    }
}

const carouselNavCircles = document.querySelectorAll(".nav-circle .slide-link")
clog( carouselNavCircles[0])



const linkCarouselSlideToCircle = function () {
    carouselNavCircles.forEach( i => {
        const linkedSlide = document.querySelector(`.slides-container #${i.id}`)
        const clickedNavCircle = document.querySelector(`.nav-circle #${i.id}`)
        i.addEventListener("click", (e) => {
            for (let circle in carouselNavCircles){
                let linkCircle = carouselNavCircles[circle]
                clog(linkCircle.id)
                if (linkCircle.id && e.target.id === linkCircle.id ){ linkCircle.style.backgroundColor = "black" }
                else if (linkCircle.id) { linkCircle.style.backgroundColor = "#bebebe" }
            }
            
            linkedSlide.scrollIntoView()
            let circleIndex = Number ( i.id.slice(-1) )
            clog( circleIndex ) 
            baseSlideIndex = circleIndex
            clog(`🔔 Linked circle No:${baseSlideIndex} clicked! Now showing linked slide`)
        })
    })
}

linkCarouselSlideToCircle()

/// Exporting
export { nextCarousel, previousCarousel }