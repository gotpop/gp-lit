// Import
import { html } from "lit-html";

// Template
const card = (cardItem) =>
  html`
    <article class="card">
      <h3 class="card__title">${cardItem.title}</h3>
      <p class="card__text">${cardItem.text}</p>
      <a class="card__link" href="${cardItem.link.url}"
        >${cardItem.link.text}</a
      >
      <figure class="card__figure">
        <img
          class="card__img"
          width="${cardItem.image.width}"
          height="${cardItem.image.height}"
          src="${cardItem.image.src}"
          alt="Elephant at sunset"
        />
        <figcaption class="card__caption">An elephant at sunset</figcaption>
      </figure>
    </article>
  `;

export default card;
