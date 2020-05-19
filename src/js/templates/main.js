// Import
import { html } from "lit-html";
import sectionData from "../data/sections";
import section from "./section";
import cards from "./cards";
import goHeader from "./header";
import goMatrix from "./matrix";

// Template
const main = (config) =>
  html`
    <main class="main">
        <div class="main__inner matrix">
          ${goMatrix(config)}
        </div>
    </main>
    ${goHeader} ${sectionData.map((item) => html`${section(item)}`)} ${cards}
  `;

export default main;
