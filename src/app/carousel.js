const mainFrame = document.querySelector(".main-frame")
const slidesContainer = document.querySelector(".slides-container")

const clog = console.log
let currentIndex = 1
let baseIndex

const nextCarousel = function () {
    // currentIndex += 1
    console.log("🔔 Carousel ready!")
    const allCarouselImages = document.querySelectorAll(".slides-container img")
    let totalArtNumber = allCarouselImages.length
    let nextIndex = ++currentIndex
    if (nextIndex <= totalArtNumber){
        const nextArt = document.querySelector(`.slides-container #art${nextIndex}`)
        nextArt.scrollIntoView()
        clog(nextIndex)
        baseIndex = nextIndex
        clog("🔔" + baseIndex)
    } 
    else if (baseIndex === totalArtNumber) {
        clog("🚨 Last carousel. Will loop on next click")
        clog(nextIndex)
        currentIndex = 1
        const nextArt = document.querySelector(`.slides-container #art${currentIndex}`)
        nextArt.scrollIntoView()
    }
}

const previousCarousel = function () {
    // currentIndex += 1
    console.log("🔔 Carousel ready!")
    const allCarouselImages = document.querySelectorAll(".slides-container img")
    let totalArtNumber = allCarouselImages.length
    let previousIndex = --currentIndex
    if (previousIndex >= 1){
        const previousArt = document.querySelector(`.slides-container #art${previousIndex}`)
        previousArt.scrollIntoView()
        clog(previousIndex)
        baseIndex = previousIndex
        clog("🔔" + baseIndex)
    } 
    else if (baseIndex === 1) {
        clog("🚨 first carousel. Will loop backward on next click")
        clog(previousIndex)
        currentIndex = totalArtNumber
        const previousArt = document.querySelector(`.slides-container #art${currentIndex}`)
        previousArt.scrollIntoView()
    }
}




/* setInterval(() => {
    nextCarousel()
}, 5000);  */

/// Exporting
export { nextCarousel, previousCarousel }