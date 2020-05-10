// Import lit-html functions
import { html } from 'lit-html';
import button from './button';
import myForm from './form';

const myTemplate = (name) =>
    html`
    ${button(name.dog)}
    <div id="pop" class="pop__bg">
        <article class="pop">
            <header class="pop__header">
                <h4 class="pop__title">Set your loss limits</h4>
                <button id="popClose" class="pop__button pop__button--close"><span>Close</span></button>
            </header>
        ${myForm(name.stuff)}
        </article>
    </div>
  `;

export default myTemplate;