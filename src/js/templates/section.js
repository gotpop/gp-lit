// Import 
import { html } from 'lit-html';

// Template
const sectionItem = (item) =>
html`
    <section>${item.title}</section>
`;

export default sectionItem;