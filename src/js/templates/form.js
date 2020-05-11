// Import lit-html functions
import { html } from 'lit-html';

const myForm = nameSpace =>
    html`
        <form id="${nameSpace}Form" class="${nameSpace}__form" action="post">
            <main class="${nameSpace}__main">
                <p class="${nameSpace}__text">To play Loto Express you must set a mandatory loss limit for 1 day, 7 days and
                        30 days. This Limit will also apply to Instant-Win Games.</p>
                <div class="${nameSpace}__input-box">
                    <label for="1day">1 day loss limit</label>
                    <div class="${nameSpace}__input-wrap">
                        <input class="${nameSpace}__input ${nameSpace}__input--clean" type="number" min="1" max="2000" id="1day"
                            name="limitAmount1" required />
                        <p class="${nameSpace}__message">You must enter a number of a least one character.</p>
                    </div>
                    <span>Must be below <strong>CHF 2,000</strong></span>
                </div>
                <div class="${nameSpace}__input-box">
                    <label for="7day">7 day loss limit</label>
                    <div class="${nameSpace}__input-wrap">
                        <input class="${nameSpace}__input ${nameSpace}__input--clean" type="number" min="1" max="10000" id="7day"
                            name="limitAmount7" required />
                        <p class="${nameSpace}__message">You must enter a number of a least one character.</p>
                    </div>
                    <span>Must be below <strong>1 day limit</strong> and <strong>30 day limit</strong></span>
                </div>
                <div class="${nameSpace}__input-box">
                    <label for="30day">30 day loss limit</label>
                    <div class="${nameSpace}__input-wrap">
                        <input class="${nameSpace}__input ${nameSpace}__input--clean" type="number" min="1" max="2000" id="30day"
                            name="limitAmount30" required />
                        <p class="${nameSpace}__message">You must enter a number of a least one character.</p>
                    </div>
                    <span>Must be below <strong>7 day limit</strong> and <strong>CHF 2,000</strong></span>
                </div>
            </main>
            <footer class="pop__footer">
                <button id="popSubmit" disabled class="pop__button pop__button--submit ltr-btn ltr-btn-primary"
                    type="submit">
                    SAVE LIMITS</button>
            </footer>
        </form>
  `;

export default myForm;
