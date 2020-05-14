// Import 
import { html } from 'lit-html';

// Event
const clickHandler = {
    // handleEvent method is required.
    handleEvent(e) {
        e.preventDefault();
        const hash = e.srcElement.hash.substr(1);
        const element = document.getElementById(hash);

        window.scrollTo({
            top: element.offsetTop - 200,
            left: 0,
            behavior: 'smooth'
        });
    },
    capture: true,
};

// Template
const menuItem = (item) =>
    html`
    <a class="menu__item" @click=${clickHandler} data-value="${item.value}" data-active="false" href="${item.link}">${item.title}</a>
`;

export default menuItem;
