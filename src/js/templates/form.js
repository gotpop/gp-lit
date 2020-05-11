// Import lit-html functions
import { html } from 'lit-html';
import goInput from './input';

const hello = [1, 2, 3];

const myForm = nameSpace =>
    html`
        <form id="${nameSpace}Form" class="${nameSpace}__form" action="post">
            <main class="${nameSpace}__main">
                <p class="${nameSpace}__text">To play Loto Express you must set a mandatory loss limit for 1 day, 7 days and
                        30 days. This Limit will also apply to Instant-Win Games.</p>
                ${hello.map((item) => html`${goInput(item, nameSpace)}`)}
            </main>
            <footer class="${nameSpace}__footer">
                <button id="${nameSpace}Submit" disabled class="${nameSpace}__button ${nameSpace}__button--submit"
                    type="submit">
                    SAVE LIMITS</button>
            </footer>
        </form>
  `;

export default myForm;
