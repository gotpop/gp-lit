// Import lit-html functions
import { html } from 'lit-html';
import goSpritesheet from './spritesheet';
import goMain from './main';
import goFooter from './footer';
import goPopUp from './popUp';
import goCube from './cube';

const site = config =>
    html`
    ${goSpritesheet}
    ${goCube}
    ${goMain(config)}
    ${goFooter}
    ${goPopUp(config)}
  `;

export default site;
