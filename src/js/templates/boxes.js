// Import 
import { html } from 'lit-html';
import box from './box';

const boxArray = [1,2,3,4,1,2,3,4,1];

// Template
const boxes = btn =>
html`
  <section class="matrix">
    ${boxArray.map((boxItem) => html`${box(boxItem)}`)}
  </section>
`;

export default boxes;
