const slides = document.querySelectorAll('.slide');
const nodeBGBlur = document.querySelector('.bg-blur');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        const getLinkBGBySlide = window.getComputedStyle(slide).getPropertyValue("background-image");
        clearActiveClass();
        slide.classList.add('active');
        nodeBGBlur.style.backgroundImage = getLinkBGBySlide;
    })
}

const clearActiveClass = () => {
    for (const slide of slides) {
        slide.classList.remove('active');
    }
}