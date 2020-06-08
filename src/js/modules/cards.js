// Cards
export default class Cards {
  constructor() {
    this.entries = {
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
    let border;

    isEvenNumber ? (minus = "-") : (minus = "");
    isEvenNumber ? (border = "red") : (border = "green");

    const goKeyframes = [
      {
        transform: `rotateY(${minus}${rotation}) translateX(${minus}${translate})`,
        opacity: "0",
        border: `5px solid ${border}`,
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        border: `5px solid ${border}`,
        opacity: "1",
      },
    ];

    return goKeyframes;
  }

  goAnimate = (entry, isEntering, isEvenNumber) => {
    const id = entry.target.getAttribute("data-id");

    const goPlay = () => {
      const goAnimate = entry.target.animate(
        this.keyframes(isEvenNumber),
        this.options
      );

      goAnimate.id = `go-${id}`;
      this.entries[`go-${id}`] += 1;

      goAnimate.play();
    };

    const goReverse = () => {
      const goAnimate = entry.target.animate(
        this.keyframes(isEvenNumber),
        this.options
      );

      goAnimate.reverse();
    };

    if (this.entries[`go-${id}`] < 1) {
      isEntering ? goPlay() : goReverse();
    } 

    window.addEventListener("scroll", (e) => {
      this.entries[`go-${id}`] = 0;
    });
  };

  callbackActions = (entry, i) => {
    const isEntering = entry.intersectionRatio > 0.8;
    const isEvenNumber = (i & 1) == 0;

    const get = entry.target.getAnimations();
    const animationExists = get.length > 0;

    if (!animationExists) {
      this.goAnimate(entry, isEntering, isEvenNumber);
    } else {
      Promise.all(
        entry.target.getAnimations().map((animation) => {
          return animation.finished;
        })
      ).then(() => {
        this.goAnimate(entry, isEntering, isEvenNumber);
      });
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

    allCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
