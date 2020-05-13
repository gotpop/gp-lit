// Import 
import { render } from 'lit-html';
import site from './templates/site';
import modal from './modal';
import config from './data/config';
import cube from './cube';

render(site(config), document.body);

document.addEventListener('DOMContentLoaded', () => {
  const goModal = new modal(config.btn.class, config.nameSpace);
  new cube();
});
