/*global BikeShowcase, scrollToFirstElement, ready */

function initiateBikeShowcase() {
  const container = document.querySelector('.bike-showcase__carousel-items');
  const prevButton = document.querySelector(
    '.bike-showcase__carousel-btn--prev',
  );
  const nextButton = document.querySelector(
    '.bike-showcase__carousel-btn--next',
  );

  prevButton.addEventListener('click', () => bikeShowcase.handlePrev());
  nextButton.addEventListener('click', () => bikeShowcase.handleNext());

  const bikeShowcase = new BikeShowcase(
    container,
    prevButton,
    nextButton,
    '.bike-showcase__carousel-item',
  );
}

function handleBannerButton(element) {
  scrollToFirstElement(element);
}

function init() {
  const firstElement = document.querySelector('.introduction');
  const bannerButton = document.querySelector('.banner__action-btn');

  bannerButton.addEventListener('click', () =>
    handleBannerButton(firstElement),
  );

  initiateBikeShowcase();
}

ready(init);
