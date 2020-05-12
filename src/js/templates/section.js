// Import 
import { html } from 'lit-html';

// Template
const sectionItem = item =>
html`
    <section class="section">
        <div class="section__inner">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <image src="${item.image.src}" width="${item.image.width}" height="${item.image.height}" title="${item.image.title}"/>
            <button>${item.button.title}</button>
        </div>
    </section>
`;

export default sectionItem;
