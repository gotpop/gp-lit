// Matrix grid at top of page

export default class Matrix {
    constructor( ) {
        this.options = {
            fill: "forwards",
            duration: 400,
            iterations: 1,
        };
        this.init( );
    }

    init( ) {
        const centerIntro = document.querySelector( ".square--center" );
        this.center( centerIntro );
    }

    center = item => {
        const animateIn = [ {
                transform: "translateZ(-4vh)"
            },
            {
                transform: "translateZ(0)"
            },
        ];

        item.animate( animateIn, this.options );
    };
}
