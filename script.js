const video = document.querySelector(".hero__bg");
const heroContent = document.querySelector(".hero-content");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".hero-section").classList.add("active");
    heroContent.classList.add("active");
  }, 1000); 
});

const colorButtons = document.querySelectorAll('.color-btn');
  const colorLabel = document.querySelector('.color-label');

  const colorNames = {
    midnight: "Midnight",
    silver: "Silver",
    starlight: "Starlight",
    spacegray: "Space Gray"
  };

  colorButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      colorButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const color = btn.getAttribute('data-color');
      colorLabel.textContent = colorNames[color] || '';
    });
  });       

const imageLeft = document.getElementById('image-left');
const imageKeyboard = document.getElementById('image-keyboard');
const imageFrontBack = document.getElementById('image-frontback');

const imagePaths = {
  midnight: {
    left: 'images/midnight-body.jpg',
    keyboard: 'images/midnight-keyboard.jpg',
    frontback: 'images/midnight-frontback.jpg'
  },
  silver: {   
    left: 'images/silver-body.jpg',
    keyboard: 'images/silver-keyboard.jpg',
    frontback: 'images/silver-frontback.jpg'
  },
  starlight: {
    left: 'images/starlight-body.jpg',
    keyboard: 'images/starlight-keyboard.jpg',
    frontback: 'images/starlight-frontback.jpg'
  },
  spacegray: {
    left: 'images/sky-blue-body.jpg',
    keyboard: 'images/sky-blue-keyboard.jpg',
    frontback: 'images/sky-blue-frontback.jpg'
  }
};

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedColor = button.getAttribute('data-color');
    const paths = imagePaths[selectedColor];

    imageLeft.src = paths.left;
    imageKeyboard.src = paths.keyboard;
    imageFrontBack.src = paths.frontback;
  });
});

// Image Carousel Logic
const slides = document.getElementById('slides');
const totalSlides = slides?.children.length || 0;
let currentIndex = 0;
let interval = totalSlides > 0 ? setInterval(nextSlide, 3000) : null;
let isPaused = false;

const descriptions = [
  {
    caption: "MacBook Air 13″",
    description: "The impressive display on MacBook Air makes <strong>TV, movies and games look truly striking.</strong>"
  },
  {
    caption: "MacBook Air - Midnight",
    description: "With <strong>up to 18 hours of bettey life, </strong>you can get work done anywhere you go."
  },
  {
    caption: "macOS Experience",
    description: "Incredibly light and thin, MacBook Air <strong>fits easily in your backpack.</strong>"
  }
];

function showSlide(index) {
  if (!slides) return;
  
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;
  
  
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  
  const caption = slides.children[currentIndex].querySelector('.caption').innerText;
  document.querySelector('.description').innerHTML = descriptions[currentIndex].description;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function pauseSlide() {
  const pauseButton = document.querySelector('.pause-btn');
  
  if (!isPaused) {
    clearInterval(interval);
    isPaused = true;
    pauseButton.innerHTML = '<i class="fas fa-play"></i>'; 
  } else {
    interval = setInterval(nextSlide, 4000);
    isPaused = false;
    pauseButton.innerHTML = '<i class="fas fa-pause"></i>'; 
  }
}


document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex); 
});

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.mobile-menu-button');
  const navList = document.querySelector('.nav-list');

  menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});
