let currentIndex = 0;

function moveCarousel(direction) {
  const cards = document.querySelector('.carousel');
  const totalCards = document.querySelectorAll('.carousel-card').length;
  
  if (direction === 'left') {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  } else {
    currentIndex = (currentIndex + 1) % totalCards;
  }

  // Using `getBoundingClientRect().width` to ensure accurate width calculation
  const cardWidth = document.querySelector('.carousel-card').getBoundingClientRect().width;
  const offset = -currentIndex * (cardWidth + 20); // 20px is the assumed gap

  cards.style.transform = `translateX(${offset}px)`;
}