let imageIndex = 0;
const slides = document.getElementsByClassName('carousel_image');
const dots = document.getElementsByClassName('dot');

setInterval(() => {
    moveToNextImage();
}, 5000);

document.
    getElementById('previous')
    .addEventListener('click', function(){
        moveToPreviousImage();
    });

document.
    getElementById('next')
    .addEventListener('click', function(){
        moveToNextImage();
    });

[...dots].forEach((dot, index) => {
    dot.addEventListener('click', function(){
        imageIndex = index;
        updateCurrentImage();
    }); 
});

function updateCurrentImage(){
    for(let slide of slides) {
        slide.classList.remove('carousel_image--visible');
        slide.classList.add('carousel_image--hidden');
    }
    slides[imageIndex].classList.add('carousel_image--visible');
    
    for(let dot of dots) {
        dot.classList.remove('carousel_image--visible');
        dot.classList.add('carousel_image--hidden');
    }
    dots[imageIndex].classList.add('carousel_image--visible');
}

function moveToPreviousImage(){
    if(imageIndex == 0) {
        imageIndex = slides.length - 1;
    } else {
        imageIndex--;
    }
    updateCurrentImage();
}

function moveToNextImage(){
    if(imageIndex == slides.length - 1) {
        imageIndex = 0;
    } else {
        imageIndex++;
    }
    updateCurrentImage();
}
