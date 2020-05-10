// Import 
import { render } from 'lit-html';
import popUpHTML from './templates/popUp';
import modal from './modal';
import config from './data/config';

render(popUpHTML(config), document.body);

document.addEventListener('DOMContentLoaded', ()=> {
  const goModal = new modal(config.btn.class, config.nameSpace);  
});
