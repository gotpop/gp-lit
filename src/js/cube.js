// Cube

export default class Cube {
    constructor() {
        this.html = {};
        this.init();
    }

    init() {
        this.getHTML();       
        this.html.radioGroupA.forEach(element => {
            
            element.addEventListener('click', (e) => {
                e.preventDefault();
                
                this.html.radioGroupA.forEach(element => {
                    element.setAttribute('data-active', false);
                });
                
                element.setAttribute('data-active', true);
                this.html.checkedRadio = this.html.radioGroup.querySelector('a[data-active="true"]');
                this.changeSide();
            });
        });
    }

    getHTML() {
        this.html.radioGroup = document.querySelector('nav');
        this.html.radioGroupA = Array.from(document.querySelectorAll('nav a'));
        this.html.cube = document.querySelector('.cube');
        this.html.radioGroup = document.querySelector('nav');
    }
    
    changeSide() {
        let currentClass = '';
        const showClass = 'show-' + this.html.checkedRadio.getAttribute('data-value');
    
        if (currentClass) {
          cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;
    }
}