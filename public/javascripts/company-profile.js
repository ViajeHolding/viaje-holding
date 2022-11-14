const firstElement = document.querySelector('.introduction');
const bannerButton = document.querySelector('.hero button');

function handleBannerButton() {
  scrollToFirstElement(firstElement);
}

function init() {
  bannerButton.addEventListener('click', handleBannerButton);
}

ready(init);
