// Cards
export default class Cards {
  constructor() {
    this.html = {};
    this.options = {
      fill: "both",
      duration: 400
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
    let border;

    isEvenNumber ? minus = "-" : minus = "";
    isEvenNumber ? border = "red" : border = "green";

    const goKeyframes = [
      {
        transform: `rotateY(${minus}${rotation}) translateX(${minus}${translate})`,
        opacity: "0",
        border: `5px solid ${border}`
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        border: `5px solid ${border}`,
        opacity: "1"
      }
    ];

    return goKeyframes;
  }

  goAnimate = (entry, isEntering, isEvenNumber) => {


    const goPlay = () => {
      console.log('goPlay');
      const goAnimate = entry.target.animate(this.keyframes(isEvenNumber), this.options);
      goAnimate.play();
    };

    const goReverse = () => {
      console.log('goReverse');
      const goAnimate = entry.target.animate(this.keyframes(isEvenNumber), this.options);
      goAnimate.reverse();

      // if (animationExists) {
      //   if (get[0].playState !== 'running') {



      //   }
      // }
    };

    isEntering ? goPlay() : goReverse();
  };

  callbackActions = (entry, i) => {
    const isEntering = (entry.intersectionRatio > 0.8);
    const isEvenNumber = ((i & 1) == 0);

    const get = entry.target.getAnimations();
    const animationExists = (get.length > 0);

    if (animationExists) {
      Promise.all(
        entry.target.getAnimations()
          .map(animation => animation.finished)
      ).then(() => {
        setTimeout(() => {
          this.goAnimate(entry, isEntering, isEvenNumber);
        }, 500);
      });
    } else {
      this.goAnimate(entry, isEntering, isEvenNumber);
    }
  };

  observerCallback = entries => {
    entries.forEach((entry, i) => this.callbackActions(entry, i));
  };

  observeCards() {
    const allCards = [...document.querySelectorAll(".cards__main .card")];
    const observer = new IntersectionObserver(this.observerCallback, { threshold: 0.8 });

    allCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
