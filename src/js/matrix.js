// Matrix grid at top of page
export default class Matrix {
  constructor() {
    this.init();
  }

  init() {
    const matrixItems = [...document.querySelectorAll(".matrix .square")];
    matrixItems.forEach(item => this.hoverAnimation(item));
  }

  hoverAnimation = item => {
    const animateIn = [
      { transform: "rotateY(0)" }, 
      { transform: "rotateY(180deg) translateZ(22vw)" }
    ];

    const animateOut = [
      { transform: "rotateY(180deg) translateZ(22vw)" },
      { transform: "rotateY(0) translateZ(0vw)" }
    ];

    const options = {
      fill: "forwards",
      duration: 400,
      iterations: 1,
    };

    item.addEventListener("mouseenter", event => {
      item.animate(animateIn, options );
    });
    
    item.addEventListener("mouseleave", event => {
      item.animate( animateOut, options);
    });
  };
}
