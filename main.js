const perv = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

let activeSlide = n => {
    for(element of slides) {
        element.classList.remove('active');
    }
    slides[n].classList.add('active');
}

let mas = [1,2,3,4,5]




let nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

let prevSlide = () => {
    
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


