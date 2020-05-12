// Import 
import { html } from 'lit-html';


// Template
const card = cardItem =>
html`
    <p>${cardItem.title}</p>
`;

export default card;
