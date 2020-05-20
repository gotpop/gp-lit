// Matrix grid at top of page
export default class Matrix {
  constructor() {
    this.init();
  }

  init() {
    const matrixItems = [...document.querySelectorAll(".matrix .square")];
    matrixItems.forEach((item) => this.hoverAnimation(item));
    // matrixItems.forEach(item => this.start(item));
    const centerIntro = document.querySelector(".square--center");
    this.center(centerIntro);
  }

  center = (item) => {
    const animateIn = [
      { transform: "translateZ(-4vh)" },
      { transform: "translateZ(0)" },
    ];

    const options = {
      fill: "forwards",
      duration: 400,
      iterations: 1,
    };

    item.animate(animateIn, options);
  };

  start = (item) => {
    const animateIn = [{ opacity: "0" }, { opacity: "1" }];

    const options = {
      fill: "forwards",
      duration: 400,
      iterations: 1,
    };

    item.animate(animateIn, options);
  };

  hoverAnimation = (item) => {
    const animateIn = [
      { transform: "rotateY(0)" },
      { transform: "rotateY(180deg) translateZ(22vw)" },
    ];

    const animateOut = [
      { transform: "rotateY(180deg) translateZ(22vw)" },
      { transform: "rotateY(0) translateZ(0vw)" },
    ];

    const options = {
      fill: "forwards",
      duration: 400,
      iterations: 1,
    };

    // item.addEventListener("mouseenter", event => {
    //   item.animate(animateIn, options );
    // });

    // item.addEventListener("mouseleave", event => {
    //   item.animate( animateOut, options);
    // });
  };
}
