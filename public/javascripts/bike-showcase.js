class BikeShowcase {
  constructor(container, prevButton, nextButton, itemClassName) {
    this.activeIndex = 0;
    this.container = container;
    this.prevButton = prevButton;
    this.nextButton = nextButton;
    this.itemClassName = itemClassName;

    this.init();
  }

  init() {
    const items = this.container.querySelectorAll(this.itemClassName);
    const currentActive = this.activeIndex;
    const currentFrontRight = this.activeIndex + 1;
    const currentBackRight = this.activeIndex + 2;

    items.forEach((item, index) => {
      if (index === currentActive) item.classList.add('active');
      else if (index === currentFrontRight) item.classList.add('front-right');
      else if (index === currentBackRight) item.classList.add('back-right');
      else item.classList.add('hidden');
    });

    this.updateButton(currentActive, items);
  }

  updateButton(currentActive, items) {
    if (currentActive === 0) {
      this.prevButton.disabled = true;
    } else if (currentActive === items.length - 1) {
      this.nextButton.disabled = true;
    } else {
      this.prevButton.disabled = false;
      this.nextButton.disabled = false;
    }
  }

  updateView(nextPosition) {
    // Update all necessary classes or visuals here...
    const items = this.container.querySelectorAll(this.itemClassName);

    items.forEach((item, index) => {
      // Remove all slider classes.
      item.classList.remove(
        'back-left',
        'front-left',
        'active',
        'front-right',
        'back-right',
        'hidden',
      );

      // Add class to next active.
      if (index === nextPosition.nextActive) item.classList.add('active');
      else if (index === nextPosition.nextBackLeft) {
        item.classList.add('back-left');
      } else if (index === nextPosition.nextFrontLeft) {
        item.classList.add('front-left');
      } else if (index === nextPosition.nextFrontRight) {
        item.classList.add('front-right');
      } else if (index === nextPosition.nextBackRight) {
        item.classList.add('back-right');
      } else item.classList.add('hidden');
    });

    // Update state.
    this.updateButton(nextPosition.nextActive, items);

    this.activeIndex = nextPosition.nextActive;
  }

  handlePrev() {
    const currentActive = this.activeIndex;

    const nextPosition = {
      nextBackLeft: currentActive - 3,
      nextFrontLeft: currentActive - 2,
      nextActive: currentActive - 1,
      nextFrontRight: currentActive,
      nextBackRight: currentActive + 1,
    };

    this.updateView(nextPosition);
  }

  handleNext() {
    const currentActive = this.activeIndex;

    const nextPosition = {
      nextBackLeft: currentActive - 1,
      nextFrontLeft: currentActive,
      nextActive: currentActive + 1,
      nextFrontRight: currentActive + 2,
      nextBackRight: currentActive + 3,
    };

    this.updateView(nextPosition);
  }
}
