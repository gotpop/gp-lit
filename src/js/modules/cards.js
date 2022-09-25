// Cards
export default class Cards {
  constructor() {
    this.iteration = {
      "go-1": 0,
      "go-2": 0,
      "go-3": 0,
      "go-4": 0,
      "go-5": 0,
      "go-6": 0,
      "go-7": 0,
      "go-8": 0,
    };
    this.options = {
      fill: "both",
      duration: 400,
    };
    this.init();
  }

  init() {
    this.observeCards();
  }

  keyframes(isEvenNumber) {
    const rotation = "30deg";
    const translate = "22vw";
    let minus;

    isEvenNumber ? (minus = "-") : (minus = "");

    const goKeyframes = [
      {
        transform: `rotateY(${minus}${rotation}) translateX(${minus}${translate})`,
        opacity: "0"
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1"
      },
    ];

    return goKeyframes;
  }

  makeAnimation(entry, isEvenNumber) {
    const cardKeyframes = new KeyframeEffect(
      entry.target,
      this.keyframes(isEvenNumber),
      this.options
    );
    const goAnimate = new Animation(cardKeyframes, document.timeline);

    return goAnimate;
  }

  goAnimate = (entry, isEntering, isEvenNumber) => {
    const id = entry.target.getAttribute("data-id");
    const goAnimate = this.makeAnimation(entry, isEvenNumber);

    const goPlay = () => {
      this.iteration[`go-${id}`] += 1;
      goAnimate.play();
    };

    if (this.iteration[`go-${id}`] < 1) {
      isEntering ? goPlay() : goAnimate.reverse();
    }

    window.addEventListener("scroll", () => {
      this.iteration[`go-${id}`] = 0;
    });
  };

  callbackActions = (entry, i) => {
    const isEntering = entry.intersectionRatio > 0.8;
    const isEvenNumber = (i & 1) == 0;
    const get = entry.target.getAnimations();
    const thereAreNoAnimations = (get.length = 0);

    if (thereAreNoAnimations) {
      this.goAnimate(entry, isEntering, isEvenNumber);
    } else {
      Promise.all(
        entry.target.getAnimations().map((animation) => animation.finished)
      ).then(() => this.goAnimate(entry, isEntering, isEvenNumber));
    }
  };

  observerCallback = (entries) => {
    entries.forEach((entry, i) => this.callbackActions(entry, i));
  };

  observeCards() {
    const allCards = [...document.querySelectorAll(".cards__main .card")];
    const observer = new IntersectionObserver(this.observerCallback, {
      threshold: 0.8,
    });

    allCards.forEach((card) => observer.observe(card));
  }
}
