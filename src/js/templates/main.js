// Import
import { html } from "lit-html";
import button from "./button";
import sectionData from "../data/sections";
import section from "./section";
import cards from "./cards";
import goHeader from "./header";
import goBoxes from "./boxes";
import goLogo from './logo';

// Template
const main = (config) =>
  html`
    <main class="main">
        <section class="main__intro">
          ${goLogo}
          <p>Web development</p>
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
