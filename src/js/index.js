// Import 
import { render } from 'lit-html';
import site from './templates/site';
import modal from './modal';
import config from './data/config';
import cube from './cube';
import goSections from './sections'

render(site(config), document.body);

document.addEventListener('DOMContentLoaded', () => {
  const goModal = new modal(config.btn.class, config.nameSpace);
  new cube();
  new goSections();
});

window.addEventListener('scroll', ()=>{
  const cube = document.querySelector('.scene');
  cube.classList.toggle('scene--force-redraw');
});
