// Cards
export default class Cards {
  constructor() {
    this.html = {};
    this.css = {};
    this.options = {
      fill: "both",
      duration: 400
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

    this.css.animateEven = [
      {
        transform: `rotateY(-${value1}) translateX(-${value2})`,
        opacity: "0",
        border: "5px solid red"
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        border: "5px solid red",
        opacity: "1"
      },
    ];

    this.css.animateOdd = [
      {
        transform: `rotateY(${value1}) translateX(${value2})`,
        opacity: "0",
        border: "5px solid green"
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1",
        border: "5px solid green"
      },
    ];
  }

  goAnimate = (entry, isEvenNumber, isEntering) => {
    const get = entry.target.getAnimations();
    const animationExists = (get.length > 0);
    let css;
    
    isEvenNumber ? css = this.css.animateEven : css = this.css.animateOdd;
    
    const goPlay = () => {
      const  goAnimate = entry.target.animate(css, this.options)
      goAnimate.play();
    };

    const goReverse = () => {
      const  goAnimate = entry.target.animate(css, this.options)
      goAnimate.reverse();
    };

    isEntering ? goPlay() : goReverse();
  };

  callbackActions = (entry, i) => {
    const isVisible = (entry.intersectionRatio > 0.5);
    const isEvenNumber = ((i & 1) == 0);

    isVisible ? this.goAnimate(entry, isEvenNumber, true)
      : this.goAnimate(entry, isEvenNumber, false);
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
