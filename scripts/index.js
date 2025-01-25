// Image Section
const backBtn = document.querySelector('#back-btn')
const nextBtn = document.querySelector('#next-btn')
const images = document.querySelectorAll('.image')
let pos = 0
backBtn.addEventListener('click', () => {

    console.log("back")
    console.log(pos+100)
    if(pos < 0){
        pos += 100
        images.forEach(image => {
            image.style.transform = `translateX(${pos}%)`
        })
    }
    
})

nextBtn.addEventListener('click', () => {
    console.log("next")
    console.log(pos)
    if(pos > -300){
        pos -= 100
        images.forEach(image => {
            image.style.transform = `translateX(${pos}%)`
        })
    }
})

// Testimonials Seciton
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
  });
  
  