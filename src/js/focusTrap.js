// Focus trap

export default class FocusTrap {
    constructor(target, element) {
        this.element = element;
        this.target = target;
        this.init();
    }

    init() {
        this.target.addEventListener('keydown', this.focusActions);

        console.log('this.target', this.target);
        
    }

    theArray = () => {
        const obj = {};

        obj.focusable = this.element;
        obj.focusableEls = this.target.querySelectorAll(obj.focusable);
        obj.firstFocusableEl = obj.focusableEls[0];
        obj.lastFocusableEl = obj.focusableEls[obj.focusableEls.length - 1];

        return obj;
    };

    focusActions = (event) => {
        const isTabPressed = (event.key === 'Tab');

        if (!isTabPressed) {
            return;
        }

        if (event.shiftKey) {
            if (document.activeElement === this.theArray().firstFocusableEl) {
                this.theArray().lastFocusableEl.focus();
                event.preventDefault();
            }
        } else if (document.activeElement === this.theArray().lastFocusableEl) {
            this.theArray().firstFocusableEl.focus();
            event.preventDefault();
        }
    };
}