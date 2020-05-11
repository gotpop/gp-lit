// Import 
import { html } from 'lit-html';
import button from './button';

// Template
const main = config =>
html`
    <main class="main">
        <div class="main__inner">
            <section class="main__intro">
                <h1>The main</h1>
            </section>
            <section class="main__actions">
                ${button(config.btn)}
            </section>
        </div>
    </main>
`;

export default main;
