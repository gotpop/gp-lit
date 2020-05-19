// Import
import { html } from "lit-html";
import goLogo from "./logo";

// Template
const box = (boxItem) =>
  html`
    <div class="square">
      <div class="square__face square__face--front">
        ${boxItem.id === 9
          ? html` <section class="main__intro">
              ${goLogo}
              <p>Web development</p>
              <svg class="icon">
                <use xlink:href="#code" />
              </svg>
            </section>`
          : html``}
      </div>
      <div class="square__face square__face--back"></div>
      <div class="square__face square__face--right"></div>
      <div class="square__face square__face--left"></div>
      <div class="square__face square__face--top"></div>
      <div class="square__face square__face--bottom"></div>
    </div>
  `;

export default box;
