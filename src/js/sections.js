// Sections
export default class Sections {
  constructor() {
    this.init();
  }

  visible() {
    const sections = document.querySelectorAll(".section");
    const options = { threshold: 0.5 };
    const cb = (entries) => {
      entries.forEach((entry) => {
        const sect = entry.target;
        const cube = sect.querySelector(".cube");
        const ratio = entry.intersectionRatio > 0.5;
        ratio
          ? entry.target.classList.add("section--visible")
          : entry.target.classList.remove("section--visible");

        if (ratio) {
          cube.classList.add("show-front");
          cube.classList.remove("show-back");
        } else {
          cube.classList.add("show-back");
          cube.classList.remove("show-front");
        }
      });
    };

    const observer = new IntersectionObserver(cb, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  init() {
    this.visible();
  }
}
