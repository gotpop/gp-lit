// Modal limits JS
import FocusTrap from './focusTrap';

export default class ModalLimits {
    constructor(openBtn, nameSpace) {
        this.nameSpace = nameSpace;
        this.openBtn = openBtn;
        this.openModalState = false;
        this.html = {};
        this.formDataObj = {};
        this.init();
    }

    init() {
        this.getSelectors();
        this.html.openBtn.addEventListener('click', this.clickActions);
        this.html.allInputs[0].focus();
    }

    clickActions = () => {
        this.handleState(true);
        this.addModalEvents();
    }

    addModalEvents = () => {
        this.handleEvents();
        const trap = new FocusTrap(this.html.modal, 'button:not([disabled]), input[type="number"]:not([disabled])'); 
    };

    getSelectors() {
        this.html.form = document.getElementById(`${this.nameSpace}Form`);
        this.html.modal = document.getElementById(this.nameSpace);
        this.html.closebutton = document.querySelector(`.${this.nameSpace}__button--close`);
        this.html.submit = document.getElementById(`${this.nameSpace}Submit`);
        this.html.openBtn = document.querySelector(`.${this.openBtn}`);
        this.html.allInputs = Array.from(document.querySelectorAll(`.${this.nameSpace}__input`));
    }

    handleEvents() {
        this.html.allInputs.forEach(input => this.addListenerTo(input));
        this.html.closebutton.addEventListener('click', this.handleClose);
        this.html.form.addEventListener('submit', this.goSubmit);
        this.html.form.addEventListener('formdata', this.goFormData);
        document.addEventListener('keydown', this.handleEscape);
    }

    handleClose = event => {
        event.preventDefault();
        this.handleState(false);  
    }

    submitButtonDisabled() {
        const valid = this.html.form.checkValidity();
        valid ? this.html.submit.removeAttribute('disabled')
            : this.html.submit.setAttribute('disabled', 'true');
    }

    inputActions = input => {
        input.classList.remove(`${this.nameSpace}__input--clean`);
        this.submitButtonDisabled();
    };

    addListenerTo(input) {
        input.addEventListener('keyup', this.inputActions(input));
    }

    handleState(openState) {
        this.openModalState = openState;
        this.openModalState ? this.html.modal.classList.add(`${this.nameSpace}__bg--show`)
            : this.html.modal.classList.remove(`${this.nameSpace}__bg--show`);
    }

    handleEscape = event => {
        const userHitEscape = (event.key === 'Escape');
        userHitEscape ? this.handleState(false) : this.handleState(true);
    }

    goFormData = event => {
        const data = event.formData;

        for (const pair of data.entries()) {
            this.formDataObj[pair[0]] = parseInt(pair[1]);
        }
    };

    goSubmit = event => {
        event.preventDefault();
        new FormData(this.html.form);

        console.log('this.formDataObj', this.formDataObj);
    };
}
