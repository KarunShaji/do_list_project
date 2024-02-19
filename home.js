const cardContainer = document.getElementById('card-container');

window.addEventListener('scroll', () => {
  if (isInViewport(cardContainer)) {
    cardContainer.classList.add('reveal');
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
