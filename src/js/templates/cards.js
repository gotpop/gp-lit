// Import 
import { html } from 'lit-html';
import cardsData from '../data/cards';
import card from './card';

// Template
const cards = 
html`
  <section class="cards">
    <div class="cards__title">
        <h1>The cards.</h1>
    </div>
    <div class="cards__main">
        ${cardsData.map((carditem) => html`${card(carditem)}`)}
    </div>
  </section>
`;

export default cards;
