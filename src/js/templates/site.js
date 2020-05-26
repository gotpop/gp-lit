// Import lit-html functions
import { html } from "lit-html";
import goSpritesheet from "./spritesheet";
import goMain from "./main";
import goFooter from "./footer";
import goPopUp from "./popUp";

const site = config =>
    html `
    ${goSpritesheet}
    ${goMain(config)}
    ${goFooter}
    ${goPopUp(config)}
  `;

export default site;
