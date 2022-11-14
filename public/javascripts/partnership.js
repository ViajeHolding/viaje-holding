const firstElement = document.querySelector('.partners__title');
const bannerButton = document.querySelector('.banner__action-btn');

function handleBannerButton() {
  scrollToFirstElement(firstElement);
}

function init() {
  bannerButton.addEventListener('click', handleBannerButton);
}

ready(init);
