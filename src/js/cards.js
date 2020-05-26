// Cards
export default class Cards {
  constructor() {
    this.html = {};
    this.currentClass = "";
    this.options = {
      fill: "forwards",
      duration: 400,
      iterations: 1,
    };
    this.animateInEven = [{
        transform: "rotateY(-30deg) translateX(-22vw)",
        opacity: "0"
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1"
      }
    ];
    this.animateInOdd = [{
        transform: "rotateY(30deg) translateX(22vw)",
        opacity: "0"
      },
      {
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1"
      }
    ];
    this.animateOutEven = [{
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1"
      },
      {
        transform: "rotateY(-30deg) translateX(-22vw)",
        opacity: "0"
      }
    ];
    this.animateOutOdd = [{
        transform: "rotateY(0deg) translateZ(0)",
        opacity: "1"
      },
      {
        transform: "rotateY(30deg) translateX(22vw)",
        opacity: "0"

      }
    ];
    this.observe();
  }

  show(item, isEvenNumber) {
  console.log('isEvenNumber :', isEvenNumber);
    isEvenNumber ? item.animate(this.animateInEven, this.options) : item.animate(this.animateInOdd, this.options);
  }

  hide(item, isEvenNumber) {
    isEvenNumber ? item.animate(this.animateOutEven, this.options) : item.animate(this.animateOutOdd, this.options);
  }

  observe() {
    this.html.allCards = [...document.querySelectorAll(".cards__main .card")];
    const options = {
      threshold: 0.5
    };

    const cb = entries => {
      entries.forEach((entry, i) => {
        const isEvenNumber = ((i & 1) == 0);
        const isVisible = (entry.intersectionRatio > 0.5);

        // isEvenNumber ? console.log('odd :', i, isEvenNumber) : console.log('even :', i, isEvenNumber);
        isVisible ? this.show(entry.target, isEvenNumber) : this.hide(entry.target, isEvenNumber);
      });
    };

    const observer = new IntersectionObserver(cb, options);

    this.html.allCards.forEach((card) => {
      observer.observe(card);
    });
  }
}