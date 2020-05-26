// Import 
import { html } from "lit-html";
import goLogo from "./logo";
import goSocial from "./social";

// Template
const footer =
    html `
  <footer class="footer">
    <section class="footer__inner">
      <div class="footer__logo">
        ${goLogo}
      </div>
      <nav class="footer__social social">
        ${goSocial}
      </nav>
      <small class="footer__copyright">© Copyright GotPop 2019</small>
     </section>
  </footer>
`;

export default footer;
