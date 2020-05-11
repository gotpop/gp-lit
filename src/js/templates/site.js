// Import lit-html functions
import { html } from 'lit-html';
import goHeader from './header';
import goMain from './main';
import goFooter from './footer';
import goPopUp from './popup';

const site = config =>
    html`
    ${goHeader}
    ${goMain(config)}
    ${goFooter}
    ${goPopUp(config)}
  `;

export default site;
