// Cards
export default class Cards {
  constructor() {
    this.html = {};
    this.css = {};
    this.options = {
      fill: "forwards",
      duration: 400,
      iterations: 1,
    };
    this.init();
  }

  init() {
    this.html.allCards = [...document.querySelectorAll(".cards__main .card")];
    this.animations();
    this.observeCards();
  }

  animations() {
    const value1 = "30deg";
    const value2 = "22vw";

    this.css.animateInEven = [
      {
        transform: `rotateY(-${value1}) translateX(-${value2})`,
        opacity: "0",
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1",
      },
    ];
    this.css.animateInOdd = [
      {
        transform: `rotateY(${value1}) translateX(${value2})`,
        opacity: "0",
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1",
      },
    ];
    this.css.animateOutEven = [
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1",
      },
      {
        transform: `rotateY(-${value1}) translateX(-${value2})`,
        opacity: "0",
      },
    ];
    this.css.animateOutOdd = [
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1",
      },
      {
        transform: `rotateY(${value1}) translateX(${value2})`,
        opacity: "0",
      },
    ];
  }

  goAnimate = (cssAnimation, element) => {
    const get = entry.target.getAnimations();
    const AnimationExists = (get.length > 0);

    element.animate(cssAnimation, this.options);
  };

  animateIn = (isEvenNumber, element) => {
    isEvenNumber ? this.goAnimate(this.css.animateInEven, element) 
                 : this.goAnimate(this.css.animateInOdd, element);
  }

  animateOut = (isEvenNumber, element) => {
    isEvenNumber ? this.goAnimate(this.css.animateOutEven, element) 
                 : this.goAnimate(this.css.animateOutOdd, element);
  }
 
  callbackActions = (entry, i) => {
    const isVisible = (entry.intersectionRatio > 0.5);
    const isEvenNumber = ((i & 1) == 0);

    isVisible ? this.animateIn(isEvenNumber, entry.target) 
              : this.animateOut(isEvenNumber, entry.target);
  };

  observerCallback = entries => {
    entries.forEach((entry, i) => this.callbackActions(entry, i));
  };

  observeCards() {
    const observer = new IntersectionObserver(this.observerCallback, { threshold: 0.5 });

    this.html.allCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
