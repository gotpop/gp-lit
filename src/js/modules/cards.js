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

  //   show(item, isEvenNumber) {
  //     isEvenNumber
  //       ? item.animate(this.css.animateInEven, this.options)
  //       : item.animate(this.css.animateInOdd, this.options);
  //   }

  //   hide(item, isEvenNumber) {
  //     isEvenNumber
  //       ? item.animate(this.css.animateOutEven, this.options)
  //       : item.animate(this.css.animateOutOdd, this.options);
  //   }

  observe() {
    const options = {
      threshold: 0.5,
    };

    const cb = (entries) => {
      entries.forEach((entry, i) => {
        const isEvenNumber = (i & 1) == 0;
        const isVisible = entry.intersectionRatio > 0.5;
        const get = entry.target.getAnimations();

        if (isVisible) {
          if (isEvenNumber) {
            if (get.length > 0) {
              console.log("get :", get);
              const state = get[0].playState;

              if (state !== "running") {
                entry.target.animate(this.css.animateInEven, this.options);
              }
            } else {
              entry.target.animate(this.css.animateInEven, this.options);
            }
          } else {
            if (get.length > 0) {
              const state = get[0].playState;
              if (state !== "running") {
                entry.target.animate(this.css.animateInOdd, this.options);
              }
            } else {
              entry.target.animate(this.css.animateInOdd, this.options);
            }
          }
        } else {
          if (isEvenNumber) {
            if (get.length > 0) {
              const state = get[0].playState;
              if (state !== "running") {
                entry.target.animate(this.css.animateOutEven, this.options);
              }
            } else {
              entry.target.animate(this.css.animateOutEven, this.options);
            }
          } else {
            if (get.length > 0) {
              const state = get[0].playState;
              if (state !== "running") {
                entry.target.animate(this.css.animateOutOdd, this.options);
              }
            } else {
              entry.target.animate(this.css.animateOutOdd, this.options);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(cb, options);

    this.html.allCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
