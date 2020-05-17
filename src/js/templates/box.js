// Import
import { html } from "lit-html";
import button from "./button";
import goLogo from "./logo";

// Template
const box = (btn) =>
  html`

      <div class="square">
        <div class="square__face square__face--front">
          <section class="main__intro">
            ${goLogo}
            <p>Web development</p>
            <svg class="icon">
              <use xlink:href="#code" />
            </svg>

          </section>
        </div>
        <div class="square__face square__face--back"></div>
        <div class="square__face square__face--right"></div>
        <div class="square__face square__face--left"></div>
        <div class="square__face square__face--top"></div>
        <div class="square__face square__face--bottom"></div>
      </div>

  `;

export default box;
