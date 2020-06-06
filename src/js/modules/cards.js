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
    this.observe();
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

  observe() {
    const options = {
      threshold: 0.5,
    };

    const cb = (entries) => {
      entries.forEach((entry, i) => {
        const isVisible = (entry.intersectionRatio > 0.5);
        const get = entry.target.getAnimations();
        const AnimationExists = (get.length > 0);
        const isEvenNumber = ((i & 1) == 0);
        console.log("AnimationExists :", AnimationExists);

        const visibleActions = (isEvenNumber, AnimationExists) => {

          const goAnimate = (cssAnimation) => {
            entry.target.animate(cssAnimation, this.options);
          };

          isEvenNumber ? goAnimate(this.css.animateInEven) : goAnimate(this.css.animateInOdd);
        }

        const hiddenActions = (isEvenNumber) => {
          const goAnimate = (cssAnimation) => {
            entry.target.animate(cssAnimation, this.options);
          };

          isEvenNumber ? goAnimate(this.css.animateOutEven) : goAnimate(this.css.animateOutOdd);
        }

        isVisible ? visibleActions(isEvenNumber, AnimationExists) : hiddenActions(isEvenNumber, AnimationExists);
      });
    };

    const observer = new IntersectionObserver(cb, options);

    this.html.allCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
