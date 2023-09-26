const slider = document.getElementById('slider');

const imageUrls = [
  'https://images.pexels.com/photos/18093789/pexels-photo-18093789/free-photo-of-red-double-decker-bus-dashing-past-big-ben-and-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/15500088/pexels-photo-15500088/free-photo-of-city-man-people-woman.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/17140289/pexels-photo-17140289/free-photo-of-blooming-red-poppies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/17728499/pexels-photo-17728499/free-photo-of-trapiche-de-encantadas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/18117652/pexels-photo-18117652/free-photo-of-hotel-house-vintage-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/18086912/pexels-photo-18086912/free-photo-of-tram-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/17929134/pexels-photo-17929134/free-photo-of-strawberries-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/18093789/pexels-photo-18093789/free-photo-of-red-double-decker-bus-dashing-past-big-ben-and-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/18129433/pexels-photo-18129433/free-photo-of-young-fashionable-woman-in-sunglasses-posing-in-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/18250527/pexels-photo-18250527/free-photo-of-woman-looking-at-paintings-in-a-museum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

function createSlide(imageUrl) {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  const image = document.createElement('img');
  image.src = imageUrl;
  slide.appendChild(image);

  return slide;
}

imageUrls.forEach((imageUrl) => {
  const slide = createSlide(imageUrl);
  slider.appendChild(slide);
});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index < 0 || index >= slides.length) {
    return;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);

// Automatic slide change every 3 seconds
setInterval(nextSlide, 100);
