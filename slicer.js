const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const images = slider.querySelectorAll('img');
let currentImageIndex = 0;
let intervalId = null;

function showImage(index) {
  images[currentImageIndex].classList.remove('active');
  images[index].classList.add('active');
  currentImageIndex = index;
}

function nextImage() {
  const newIndex = (currentImageIndex + 1) % images.length;
  showImage(newIndex);
}

function prevImage() {
  const newIndex = (currentImageIndex + images.length - 1) % images.length;
  showImage(newIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Cambiar imagen automáticamente cada 4 segundos
document.addEventListener('DOMContentLoaded', () => {
  intervalId = setInterval(() => {
    nextImage();
  }, 4000);
});

// Detener el intervalo al hacer clic en los botones
prevButton.addEventListener('click', () => clearInterval(intervalId));
nextButton.addEventListener('click', () => clearInterval(intervalId));


const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});
