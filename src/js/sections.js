// Sections
export default class Sections {
  constructor() {
    this.init();
  }

  visible() {
    const sections = document.querySelectorAll(".section");
    const options = {
      rootMargin: '0px',
      threshold: .8
    };

    const cb = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.8) {
        console.log('entry.intersectionRatio :', entry.intersectionRatio);
          entry.target.classList.add("section--visible");
        } else {
          console.log('REMOVE');
          
          entry.target.classList.remove("section--visible");
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
