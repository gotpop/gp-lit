// Import lit-html functions
import { html } from 'lit-html';
import button from './button';
import myForm from './form';

const popUp = config =>
    html`
    ${button(config.btn)}
    <div id="${config.nameSpace}" class="${config.nameSpace}__bg">
        <article class="${config.nameSpace}">
            <header class="${config.nameSpace}__header">
                <h4 class="${config.nameSpace}__title">Set your loss limits</h4>
                <button id="${config.nameSpace}Close" class="${config.nameSpace}__button ${config.nameSpace}__button--close"><span>Close</span></button>
            </header>
        ${myForm(config.nameSpace)}
        </article>
    </div>
  `;

export default popUp;