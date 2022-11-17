const firstElement = document.querySelector('.introduction');
const bannerButton = document.querySelector('.banner__action-btn');

function handleBannerButton() {
  scrollToFirstElement(firstElement);
}

class BikeShowcase {
  constructor(container, itemsSelector) {
    this.activeIndex = 0;
    this.container = container;
    this.itemsSelector = itemsSelector;

    this.update(0, 0);
  }

  update(prevIndex, nextIndex) {
    const items = [...this.container.querySelectorAll(this.itemsSelector)];

    const previousActive = items.find(
      (item) => item.id === `tns1-item${prevIndex}`,
    );
    const nextActive = items.find(
      (item) => item.id === `tns1-item${nextIndex}`,
    );

    // Remove active class from last iteration
    previousActive.classList.remove('bike-showcase__img-active');

    // Find the current active item.

    // Add active class to the new active item.
    nextActive.classList.add('bike-showcase__img-active');

    // Update index state..
    this.activeIndex = nextIndex;
  }

  handlePrev() {
    // Iteration update here...
    // Update method will have the latest active index...

    const prevIndex = this.activeIndex;
    const nextIndex = this.activeIndex - 1;

    this.update(prevIndex, nextIndex);
  }

  handleNext() {
    // Iteration update here...
    const prevIndex = this.activeIndex;
    const nextIndex = this.activeIndex + 1;

    this.update(prevIndex, nextIndex);
  }
}

function initiateBikeShowcase() {
  const slider = tns({
    container: '.bike-showcase__carousel',
    items: 3,
    center: true,
    loop: false,
    swipeAngle: false,
    speed: 400,
    controlsText: ['&#60;', '&#62;'],
  });

  const container = document.querySelector('.bike-showcase__carousel');
  const bikeShowcase = new BikeShowcase(container, '.bike-showcase__img');

  const controls = document.querySelector('.tns-controls');
  const prevButton = controls.querySelector('button[data-controls="prev"]');
  const nextButton = controls.querySelector('button[data-controls="next"]');

  prevButton.addEventListener('click', () => bikeShowcase.handlePrev());
  nextButton.addEventListener('click', () => bikeShowcase.handleNext());
}

function init() {
  bannerButton.addEventListener('click', handleBannerButton);

  initiateBikeShowcase();
}

ready(init);
