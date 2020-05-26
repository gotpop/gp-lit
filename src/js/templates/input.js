// Import 
import { html } from "lit-html";

// Template
const input = ( item, nameSpace ) =>
    html `
    <div class="${nameSpace}__input-box">
        <label for="1day">${item} day loss limit</label>
        <div class="${nameSpace}__input-wrap">
            <input class="${nameSpace}__input ${nameSpace}__input--clean" type="number" min="1" max="2000" id="${item}day"
                name="limitAmount1" required />
            <p class="${nameSpace}__message">You must enter a number of a least one character.</p>
        </div>
        <span>Must be below <strong>CHF ${item},000</strong></span>
    </div>
`;

export default input;
