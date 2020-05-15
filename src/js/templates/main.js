// Import
import { html } from "lit-html";
import button from "./button";
import sectionData from "../data/sections";
import section from "./section";
import cards from "./cards";
import goHeader from "./header";
import goBoxes from "./boxes";

// Template
const main = (config) =>
  html`
    <main class="main">
        <section class="main__intro">
          <a
            class="he-logo__link he-logo__link--active"
            aria-current="page"
            href="/"
            ><svg width="301.344" height="73.189" class="he-logo" name="gotpop">
              <use xlink:href="#logo" />
            </svg>
          </a>
          <svg class="icon">
            <use xlink:href="#code" />
          </svg>
          ${button(config.btn)}
        </section>
        ${goBoxes(config)}
    </main>
    ${goHeader} ${sectionData.map((item) => html`${section(item)}`)} ${cards}
  `;

export default main;
