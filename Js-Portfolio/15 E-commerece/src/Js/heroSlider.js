



let slider = document.getElementById("slider")
let next = document.getElementById("next")
let prev = document.getElementById("prev")

let index = 0
let totalSlides = slider.children.length

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`
}






// ✅ Auto Slide
setInterval(() => {
    index = (index + 1) % totalSlides
    updateSlider()
}, 3000)