// Import 
import { html } from 'lit-html';

// Template
const menuItem = (item) =>
html`
    <a class="menu__item" data-value="${item.value}" data-active="false" href="${item.link}">${item.title}</a>
`;

export default menuItem;
