// Import 
import { html } from 'lit-html';

// Template
const sectionItem = item =>
html`
    <section id="${item.id}" class="section">
        <div class="section__inner">
            <article class="section__content">
                <h3 class="section__title">${item.title}</h3>
                <p class="section__text">${item.text}</p>
                <button class="button section__button">${item.button.title}</button>
            </article>
            <figure class="section__figure">
                <img class="section__image" src="${item.image.src}" width="${item.image.width}" height="${item.image.height}" title="${item.image.title}" loading="lazy"/>
            </figure>
        </div>
    </section>
`;

export default sectionItem;
