// Import
import { html } from "lit-html";
import sectionData from "../data/sections";
import section from "./section";
import cards from "./cards";
import goHeader from "./header";
import goBoxes from "./boxes";

// Template
const main = (config) =>
  html`
    <main class="main">
        ${goBoxes(config)}
    </main>
    ${goHeader} ${sectionData.map((item) => html`${section(item)}`)} ${cards}
  `;

export default main;
