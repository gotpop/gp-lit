// Import 
import { html } from "lit-html";

// Template
const button = btn =>
    html `
  <button class="${btn.class}">${btn.title}</button>
`;

export default button;
