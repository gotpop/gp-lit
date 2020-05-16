// Import
import { html } from "lit-html";
import button from "./button";
import goLogo from "./logo";

// Template
const box = (btn) =>
  html`

      <div class="cube show-front">
        <div class="cube__face cube__face--front">
          <section class="main__intro">
            ${goLogo}
            <p>Web development</p>
            <svg class="icon">
              <use xlink:href="#code" />
            </svg>

          </section>
        </div>
        <div class="cube__face cube__face--back"></div>
        <div class="cube__face cube__face--right"></div>
        <div class="cube__face cube__face--left"></div>
        <div class="cube__face cube__face--top"></div>
        <div class="cube__face cube__face--bottom"></div>
      </div>

  `;

export default box;
