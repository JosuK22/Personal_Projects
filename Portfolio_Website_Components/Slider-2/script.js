const sliderContainer = document.getElementById('slider');

const imageUrls = [
  'https://images.unsplash.com/photo-1526025202335-cf944dc3f799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1614088379754-ca68c568e95e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
'https://plus.unsplash.com/premium_photo-1690552679182-dc23afba3c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1695531333363-e1d7464c40f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1695531332687-7c4dcd4f13ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
];

let currentSlide = 0;

function createSlide(imageUrl) {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  const image = document.createElement('img');
  image.src = imageUrl;
  slide.appendChild(image);

  const leftInfo = document.createElement('div');
  leftInfo.classList.add('left-info');
  const penetrateBlur = document.createElement('div');
  penetrateBlur.classList.add('penetrate-blur');
  penetrateBlur.innerHTML = `<h1>Jose</h1>`;
  const content = document.createElement('div');
  content.classList.add('content');
  content.innerHTML = `
    <h3>Frontend Developer</h3>
    <p>I am an Indian Junior Web Developer</p>
    <p>I like to craft solid and scalable frontend products with great user experiences.</p>
    <a href="/assets/Joseph_K Anoj_Resume_DarkBlue.pdf" class="btn" target="_blank"><i class="fas fa-download"></i> Download CV</a>
  `;

  leftInfo.appendChild(penetrateBlur);
  leftInfo.appendChild(content);
  slide.appendChild(leftInfo);

  const rightInfo = document.createElement('div');
  rightInfo.classList.add('right-info');
  rightInfo.innerHTML = `
    <h1>ph</h1>
    <h3>K Anoj</h3>
  `;

  slide.appendChild(rightInfo);

  return slide;
}

imageUrls.forEach((imageUrl) => {
  const slide = createSlide(imageUrl);
  sliderContainer.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
  currentSlide = index;
}

function startSlideshow() {
  showSlide(currentSlide);
  setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
  }, 800);
}

startSlideshow();
