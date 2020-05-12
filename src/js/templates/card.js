// Import 
import { html } from 'lit-html';

// Template
const card = cardItem =>
html`
    <article class="card">${cardItem.title}</article>
`;

export default card;
