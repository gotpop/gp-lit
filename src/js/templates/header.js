// Import
import { html } from "lit-html";
import menu from "../data/menu";
import menuItem from "./menuItem";

const closeToTop = () => {
  window.addEventListener('scroll', event => {
    const header = document.querySelector('.header');
    header.classList.add('header__scrolled');
  }, {
    once : true
  });
};

closeToTop();

// Template
const header = html`
  <header class="header">
    <section class="header__inner">
      <div class="header__logo">
        <a
        <a
            class="he-logo__link he-logo__link--active"
            aria-current="page"
            href="/"
            ><svg width="301.344" height="73.189" class="he-logo" name="gotpop">
              <use xlink:href="#logo" />
            </svg>
          </a>
      </div>
      <nav class="header__nav">
        ${menu.map((item) => html`${menuItem(item)}`)}
      </nav>
    </section>
  </header>
`;

export default header;
