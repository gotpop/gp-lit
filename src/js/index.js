// Import 
import { render } from 'lit-html';
import myTemplate from './templates/popUp';
import modal from './modal';

const config = {
  stuff: 'Whut',
  dog: 'lulu'
}

render(myTemplate(config), document.body);

document.addEventListener('DOMContentLoaded', ()=> {
  const goModal = new modal('btn', 'pop');  
});
