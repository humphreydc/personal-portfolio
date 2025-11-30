const wrapper = document.getElementById('wrapper');
const carousels = document.querySelectorAll('.carousel');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

//effect indicator
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

// nisearch ko lang to
function scrollToIndex(index) {
  currentIndex = index;
  localStorage.setItem('carouselIndex', index);
  wrapper.scrollTo({
    left: index * carousels[0].offsetWidth,
  });
  updateIndicators();
}

// indicator clicks
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => scrollToIndex(index));
});

// update indicators on scroll
wrapper.addEventListener('scroll', () => {
  const newIndex = Math.round(wrapper.scrollLeft / carousels[0].offsetWidth);
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    updateIndicators();
  }
});

// save
const savedIndex = localStorage.getItem('carouselIndex');
if (savedIndex !== null) {
  scrollToIndex(parseInt(savedIndex));
} else {
  updateIndicators();
}