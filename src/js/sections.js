// Sections
export default class Sections {
  constructor() {
    this.init();
  }

  init() {
    const images = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log("Hello");

          entry.target.classList.add("section--visible");
        } else {
          console.log("Bye");
          entry.target.classList.remove("section--visible");
        }
      });
    });

    images.forEach((image) => {
      observer.observe(image);
    });
  }
}
