// Import 
import { html } from 'lit-html';
import goLogo from './logo';
import goSocial from './social';

// Template
const footer = 
html`
  <footer class="footer">
    ${goLogo}
    ${goSocial}
    <small>© Copyright GotPop 2019</small>
  </footer>
`;

export default footer;
