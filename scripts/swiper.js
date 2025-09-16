class TestimonialCarousel {
    constructor() {
        this.carousel = document.querySelector('.testimonial__container__carousel');
        this.slides = document.querySelectorAll('.testimonial__container__feedback'); // ← исправлено!
        this.prevBtn = document.querySelector('.left-button');
        this.nextBtn = document.querySelector('.right-button');
        this.currentIndex = 0;

        if (!this.slides.length) {
            console.error('Слайды не найдены!');
            return;
        }

        this.init();
    }

    init() {
        this.showSlide(this.currentIndex);

        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next()); 
    }

    showSlide(index) {
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'slide-next', 'slide-prev');
        });
        
        this.slides[index].classList.add('active'); 

        this.updateButtons();
    }

    next() {
        if (this.currentIndex < this.slides.length - 1) {
            this.slides[this.currentIndex].classList.add('slide-prev');
            this.currentIndex++;
            this.slides[this.currentIndex].classList.add('slide-next');
            
            setTimeout(() => {
                this.showSlide(this.currentIndex);
            }, 500);
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.slides[this.currentIndex].classList.add('slide-next');
            this.currentIndex--;
            this.slides[this.currentIndex].classList.add('slide-prev');
            
            setTimeout(() => {
                this.showSlide(this.currentIndex);
            }, 500);
        }
    }
    // тут без анимации
    //prev() {
    //    if (this.currentIndex > 0) {
    //        
    //        this.currentIndex--;
    //        this.showSlide(this.currentIndex);
    //    }
    //}
    //
    //next() {
    //    if (this.currentIndex < this.slides.length - 1) {
    //        this.currentIndex++;
    //        this.showSlide(this.currentIndex);
    //    }
    //}
    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.slides.length - 1;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен!');
    
    const carousel = new TestimonialCarousel();
    console.log('Карусель создана:', carousel);
});