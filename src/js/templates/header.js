// Import 
import { html } from 'lit-html';
import menu from '../data/menu';
import menuItem from './menuItem';
import goCube from './cube';

// Template
const header = 
html`
  <header class="header">
    <section class="header__inner">
        <div class="header__logo">
        ${goCube}
        </div>
        <nav class="header__nav">
            ${menu.map((item) => html`${menuItem(item)}`)}
        </nav>
    </section>
  </header>
`;

export default header;
