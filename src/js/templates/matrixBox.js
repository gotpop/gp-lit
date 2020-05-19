// Import
import { html } from "lit-html";
import goIntro from "./matrixIntroContent";

// Logic
function getUserMessage(boxItem) {
  const center = boxItem.id === 9;
  if (center) return `square--center`;
}

// Template
const box = boxItem =>
  html`
    <div class="square ${getUserMessage(boxItem)}">
      <div class="square__face square__face--front">
        ${boxItem.id === 9 ? html`${goIntro}` : html``}
      </div>
      <div class="square__face square__face--back"></div>
      <div class="square__face square__face--right"></div>
      <div class="square__face square__face--left"></div>
      <div class="square__face square__face--top"></div>
      <div class="square__face square__face--bottom"></div>
    </div>
  `;

export default box;
