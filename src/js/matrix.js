// Matrix grid at top of page
export default class Matrix {
  constructor() {
    this.init();
  }

  init() {
    const matrixItems = [...document.querySelectorAll(".matrix .square")];

    matrixItems.forEach((item) => this.stuff(item));
  }

  stuff = (item) => {
    console.log("this: ", this);

    item.addEventListener("mouseenter", (e) => {
      console.log("init", item);

      item.animate(
        [{ transform: "rotateY(0)" }, { transform: "rotateY(180deg)" }],
        {
          fill: "forwards",
          duration: 400,
          iterations: 1,
        }
      );
      console.log("getAnimations", document.getAnimations());
    });
  };
}
