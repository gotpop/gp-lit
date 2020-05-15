// Cube
export default class Cube {
  constructor() {
    this.html = {};
    this.currentClass = "";
    this.init();
  }

  init() {
    this.getHTML();
    this.html.allLinks.forEach((element) => this.linkEvents(element));
  }

  linkEvents(element) {
    const clickActions = (event) => {
      event.preventDefault();
      this.html.allLinks.forEach((element) =>
        element.setAttribute("data-active", false)
      );
      element.setAttribute("data-active", true);
      this.changeSide();
    };

    element.addEventListener("click", clickActions);
  }

  getHTML() {
    this.html.nav = document.querySelector("nav");
    this.html.allLinks = Array.from(document.querySelectorAll("nav a"));
    this.html.cube = document.querySelector(".cube");
  }

  changeSide() {
    this.html.linkActive = this.html.nav.querySelector('a[data-active="true"]');
    const showClass = "show-" + this.html.linkActive.getAttribute("data-value");

    if (this.currentClass) this.html.cube.classList.remove(this.currentClass);

    this.html.cube.classList.add(showClass);
    this.currentClass = showClass;
  }
}
