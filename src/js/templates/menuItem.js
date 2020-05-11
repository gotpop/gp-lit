// Import 
import { html } from 'lit-html';

// Template
const menuItem = (item) =>
html`
    <a>${item.title}</a>
`;

export default menuItem;