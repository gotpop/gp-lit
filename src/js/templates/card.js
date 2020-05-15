// Import 
import { html } from 'lit-html';

// Template
const card = cardItem =>
html`
    <article class="card">
        <h3>${cardItem.title}</h3>
        <p>${cardItem.text}</p>
        <a href="${cardItem.link.url}">${cardItem.link.text}</a>
    </article>
`;

export default card;
