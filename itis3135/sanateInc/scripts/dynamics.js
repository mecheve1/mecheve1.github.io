document.addEventListener('DOMContentLoaded',()=>{
    // Once the DOM has finished loading, all code in here will be run
    var sliderInterval = "";
    let numberOfSlidesBeingDisplayed = 2;
    let variableSliderWidth = contentWrapperElement.offsetWidth;

    // Sliderlet contentWrapperElement = document.querySelector('.slider-content-wrapper');
    let sliderContainerElement = document.querySelector('.slider-container');
    let sliderItemElements = document.querySelectorAll('.slider-item');
    let sliderSizeRegulatorElement = document.querySelector('.slider-size-regulator');
    sliderContainerElement.style.width = (contentWrapperElement.offsetWidth) + `px`;
});