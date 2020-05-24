// Cards
export default class Cards {
    constructor() {
      this.html = {};
      this.currentClass = "";
      this.init();
    }
  
    init() {
      this.observe();
      // this.html.allCards.forEach(item => this.hoverAnimation(item));
    }
    
    show(item, isEvenNumber) {
      let animateIn = []

      if (isEvenNumber) {
        animateIn = [
          { transform: "rotateY(-30deg) translateX(-22vw)" }, 
          { transform: "rotateY(0deg) translateZ(0)" }
        ];

      } else {
        animateIn = [
          { transform: "rotateY(30deg) translateX(22vw)" }, 
          { transform: "rotateY(0deg) translateZ(0)" }
        ];
      }

      const options = {
        fill: "forwards",
        duration: 400,
        iterations: 1,
      };
      
      item.animate(animateIn, options);
    }

    hide(item, isEvenNumber) {
      let animateIn = []

      if (isEvenNumber) {
        animateIn = [
          { transform: "rotateY(0deg) translateZ(0)" },
          { transform: "rotateY(-30deg) translateX(-22vw)" }
        ];

      } else {
        animateIn = [
          { transform: "rotateY(0deg) translateZ(0)" },
          { transform: "rotateY(30deg) translateX(22vw)" }
        ];
      }
      
      const options = {
        fill: "forwards",
        duration: 400,
        iterations: 1,
      };
      
      item.animate(animateIn, options);
    }
    
    observe() {
      this.html.allCards = [...document.querySelectorAll(".cards__main .card")];
        const options = { threshold: 0.5 };

        const cb = entries => {


// const stuff = () => {
  
// }

          entries.forEach((entry, i) => {

            const isEvenNumber = ( (i & 1) == 0 );
            isEvenNumber ? console.log('odd :', i, isEvenNumber)  : console.log('even :', i, isEvenNumber);

            const isVisible = (entry.intersectionRatio > 0.5);

            isVisible ? this.show(entry.target, isEvenNumber) : this.hide(entry.target, isEvenNumber);
          });


        };
    
        const observer = new IntersectionObserver(cb, options);
    
        this.html.allCards.forEach((card) => {
          observer.observe(card);
        });
      }

      hoverAnimation = item => {
        const animateIn = [
          { transform: "rotateY(0)" }, 
          { transform: "rotateY(180deg) translateZ(22vw)" }
        ];
    
        const animateOut = [
          { transform: "rotateY(180deg) translateZ(22vw)" },
          { transform: "rotateY(0) translateZ(0vw)" }
        ];
    
        const options = {
          fill: "forwards",
          duration: 400,
          iterations: 1,
        };
    
        item.addEventListener("mouseenter", event => {
          item.animate(animateIn, options );
        });
        
        item.addEventListener("mouseleave", event => {
          item.animate( animateOut, options);
        });
      };
  }