const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shoes = document.querySelectorAll('.shoe');
let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter >= shoes.length - 1) return;
    counter++;
    moveCarousel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    moveCarousel();
});

function moveCarousel() {
    const shoeWidth = shoes[0].offsetWidth;
    carousel.style.transform = `translateX(-${counter * (shoeWidth + 20)}px)`; 
    shoes.forEach((shoe, index) => {
        if (index === counter) {
            shoe.classList.add('active');
        } else {
            shoe.classList.remove('active');
        }
    });
}
