const firstElement = document.querySelector('.introduction');
const bannerButton = document.querySelector('.banner__action-btn');

function handleBannerButton() {
  scrollToFirstElement(firstElement);
}

function init() {
  bannerButton.addEventListener('click', handleBannerButton);
}

ready(init);
