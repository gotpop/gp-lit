// Import 
import { html } from 'lit-html';
import cardsData from '../data/cards';
import card from './card';

// Template
const cards = 
html`
  <section class="cards">
    <h1>The cards.</h1>
    ${cardsData.map((carditem) => html`${card(carditem)}`)}
  </section>
`;

export default cards;
