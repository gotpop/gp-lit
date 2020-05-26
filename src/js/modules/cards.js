// Cards
export default class Cards {
    constructor( ) {
        this.html = {};
        this.css = {};
        this.options = {
            fill: "forwards",
            duration: 400,
            iterations: 1,
        };
        this.init( );
    }

    init( ) {
        this.html.allCards = [ ...document.querySelectorAll( ".cards__main .card" ) ];
        this.animations( );
        this.observe( );
    }

    animations( ) {
        this.css.animateInEven = [ {
            transform: "rotateY(-30deg) translateX(-22vw)",
            opacity: "0"
        }, {
            transform: "rotateY(0deg) translateZ(0)",
            opacity: "1"
        } ];
        this.css.animateInOdd = [ {
            transform: "rotateY(30deg) translateX(22vw)",
            opacity: "0"
        }, {
            transform: "rotateY(0deg) translateZ(0)",
            opacity: "1"
        } ];
        this.css.animateOutEven = [ {
            transform: "rotateY(0deg) translateZ(0)",
            opacity: "1"
        }, {
            transform: "rotateY(-30deg) translateX(-22vw)",
            opacity: "0"
        } ];
        this.css.animateOutOdd = [ {
            transform: "rotateY(0deg) translateZ(0)",
            opacity: "1"
        }, {
            transform: "rotateY(30deg) translateX(22vw)",
            opacity: "0"
        } ];
    }

    show( item, isEvenNumber ) {
        isEvenNumber ? item.animate( this.css.animateInEven, this.options )
            : item.animate( this.css.animateInOdd, this.options );
    }

    hide( item, isEvenNumber ) {
        isEvenNumber ? item.animate( this.css.animateOutEven, this.options )
            : item.animate( this.css.animateOutOdd, this.options );
    }

    observe( ) {
        const options = {
            threshold: 0.5
        };

        const cb = entries => {
            entries.forEach( ( entry, i ) => {
                const isEvenNumber = ( ( i & 1 ) == 0 );
                const isVisible = ( entry.intersectionRatio > 0.5 );

                isVisible ? this.show( entry.target, isEvenNumber ) : this.hide( entry.target,
                    isEvenNumber );
            } );
        };

        const observer = new IntersectionObserver( cb, options );

        this.html.allCards.forEach( ( card ) => {
            observer.observe( card );
        } );
    }
}
