// Modal limits JS

export default class ModalLimits {
    constructor(openBtn, nameSpace) {
        this.nameSpace = nameSpace;
        this.openBtn = openBtn;
        this.openModalState = false;
        this.html = {};
        this.init();
        this.array;
    }

    init() {        
        const addModalEvents = () => {
            this.handleState(true);
            this.html.goError.classList.remove('pop__message--show');
            this.handleEvents();
            console.log('Bye');
            
            this.focusTrap(this.html.modal);
        };

        this.getSelectors();
        if (this.openModalState) addModalEvents();

        this.html.openBtn.addEventListener('click', ()=> {
            this.handleState(true);
        });
    }

    getSelectors() {
        this.html.formHTML = document.getElementById(`${this.nameSpace}Form`);
        this.html.modal = document.getElementById(this.nameSpace);
        this.html.closebutton = document.querySelector(`.${this.nameSpace}__button--close`);
        this.html.allInputs = Array.from(document.querySelectorAll(`.${this.nameSpace}__input`));
        this.html.submit = document.getElementById(`${this.nameSpace}Submit`);
        this.html.goError = document.querySelector('.pop__message--error');
        this.html.openBtn = document.querySelector(`.${this.openBtn}`);

        console.log(this.html.openBtn);
        console.log('this.html.closebutton', this.html.closebutton);
    }

    handleEvents() {
        console.log('Hello');
        this.html.allInputs.forEach(input => this.addListenerTo(input));
        this.handleClose();
        
        this.handleEscape();
        this.submitActions();
    }

    handleClose() {
        const closeModal = event => {
            event.preventDefault();
            this.handleState(false);
        };

        console.log('Hello');
        
        this.html.closebutton.addEventListener('click', closeModal);
    }

    submitButtonDisabled() {
        const valid = this.html.formHTML.checkValidity();
        valid ? this.html.submit.removeAttribute('disabled') : this.html.submit.setAttribute('disabled', 'true');
    }

    addListenerTo(input) {
        const inputActions = () => {
            input.classList.remove(`${this.nameSpace}__input--clean`);
            this.submitButtonDisabled();
        };

        input.addEventListener('keyup', inputActions);
    }

    handleState(openState) {
        this.state = openState;
        this.state ? this.html.modal.classList.add(`${this.nameSpace}__bg--show`)
                   : this.html.modal.classList.remove(`${this.nameSpace}__bg--show`);
    }

    handleEscape() {
        const ifUserHitsEscapeCloseModal = event => {
            const userHitEscape = (event.key === 'Escape');
            userHitEscape ? this.handleState(false) : this.handleState(true);
        };

        document.addEventListener('keydown', ifUserHitsEscapeCloseModal);
    }

    focusTrap(modal) {
        this.array = () => {
            const obj = {};

            obj.focusable = 'button:not([disabled]), input[type="number"]:not([disabled])';
            obj.focusableEls = this.html.modal.querySelectorAll(obj.focusable);
            obj.firstFocusableEl = obj.focusableEls[0];
            obj.lastFocusableEl = obj.focusableEls[obj.focusableEls.length - 1];

            return obj;
        };

        const focusActions = (event) => {
            const isTabPressed = (event.key === 'Tab');

            if (!isTabPressed) {
                return;
            }

            if (event.shiftKey) {
                if (document.activeElement === this.array().firstFocusableEl) {
                    this.array().lastFocusableEl.focus();
                    event.preventDefault();
                }
            } else if (document.activeElement === this.array().lastFocusableEl) {
                this.array().firstFocusableEl.focus();
                event.preventDefault();
            }
        };

        this.html.allInputs[0].focus();
        modal.addEventListener('keydown', focusActions);
    }

    submitActions() {
        const formDataObj = {
            limitType: 'GLOBAL_LOSS',
        };

        const goSubmit = event => {
            event.preventDefault();
            new FormData(this.html.formHTML);
        };

        const goFormData = event => {
            const data = event.formData;

            for (const pair of data.entries()) {
                formDataObj[pair[0]] = parseInt(pair[1]);
            }

        };

        this.html.formHTML.addEventListener('submit', goSubmit);
        this.html.formHTML.addEventListener('formdata', goFormData);
    }
}
