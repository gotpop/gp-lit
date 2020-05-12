// Import 
import { render } from 'lit-html';
import site from './templates/site';
import modal from './modal';
import config from './data/config';

render(site(config), document.body);

document.addEventListener('DOMContentLoaded', ()=> {
  const goModal = new modal(config.btn.class, config.nameSpace);  

  var cube = document.querySelector('.cube');
  var radioGroup = document.querySelector('.radio-group');
  var currentClass = '';

  function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  }
  // set initial side
  changeSide();

  radioGroup.addEventListener( 'change', changeSide );
});
