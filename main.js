
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(testimonial => testimonial.style.display = 'none');
  testimonials[index].style.display = 'block';
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

setInterval(nextTestimonial, 5000); 
const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('mouseover', () => {
  ctaBtn.style.transform = 'scale(1.1)';
});

ctaBtn.addEventListener('mouseout', () => {
  ctaBtn.style.transform = 'scale(1)';
});