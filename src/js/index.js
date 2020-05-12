// Import 
import { render } from 'lit-html';
import site from './templates/site';
import modal from './modal';
import config from './data/config';

render(site(config), document.body);

document.addEventListener('DOMContentLoaded', () => {
  const goModal = new modal(config.btn.class, config.nameSpace);



  var cube = document.querySelector('.cube');
  var radioGroup = document.querySelector('nav');
  var radioGroupA = Array.from(document.querySelectorAll('nav a'));
  console.log('radioGroupA', radioGroupA);

  var currentClass = '';



  

  radioGroupA.forEach(element => {

    element.addEventListener('click', (e) => {
      e.preventDefault();

      radioGroupA.forEach(element => {
        element.setAttribute('data-active', false);
      });

      element.setAttribute('data-active', true);

      function changeSide() {
        var checkedRadio = radioGroup.querySelector('a[data-active="true"]');
        const checkedRadioValue = checkedRadio.getAttribute('data-value');
        console.log('checkedRadio', checkedRadio);
    
        var showClass = 'show-' + checkedRadioValue;
    
        if (currentClass) {
          cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;
      }

      changeSide();
    });
  });






});
