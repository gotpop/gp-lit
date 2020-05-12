// Import 
import { html } from 'lit-html';

// Template
const sectionItem = item =>
html`
    <section class="section">
        <div class="section__inner">
            <h3 class="section__title">${item.title}</h3>
            <p class="section__text">${item.text}</p>
            <img class="section__image" src="${item.image.src}" width="${item.image.width}" height="${item.image.height}" title="${item.image.title}" loading="lazy"/>
            <button class="section__button">${item.button.title}</button>
        </div>
    </section>
`;

export default sectionItem;
