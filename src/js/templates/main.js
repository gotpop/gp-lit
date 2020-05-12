// Import 
import { html } from 'lit-html';
import button from './button';
import sectionData from '../data/sections';
import section from './section';
import cards from './cards';
import goHeader from './header';

// Template
const main = config =>
html`
    <main class="main">
        <div class="main__inner">
            <section class="main__intro">
                <h1>The main</h1>
                <svg class="icon">
                    <use xlink:href="#code" />
                </svg>
            </section>
            <section class="main__actions">
                ${button(config.btn)}
            </section>
        </div>
    </main>
    ${goHeader}
    ${sectionData.map((item) => html`${section(item)}`)}
    ${cards}
`;

export default main;
