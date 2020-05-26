// Import
import { html } from "lit-html";
import goLogo from "./logo";

// Template
const intro =
    html `
    <section class="main__intro">
      ${goLogo}
      <p>Web development</p>
      <svg class="icon">
        <use xlink:href="#code" />
      </svg>
    </section>
  `;

export default intro;
