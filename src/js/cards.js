// Cards
export default class Cards {
    constructor() {
      this.html = {};
      this.currentClass = "";
      this.init();
    }
  
    init() {
      this.visible();
    }
    
    visible() {
       const allCards = [...document.querySelectorAll(".cards__main .card")];
        const options = { threshold: 0.5 };

        const cb = (entries) => {
          entries.forEach((entry) => {
            const sect = entry.target;
            const cube = sect.querySelector(".cube");
            const ratio = entry.intersectionRatio > 0.5;

            ratio
              ? entry.target.classList.add("section--visible")
              : entry.target.classList.remove("section--visible");
    
            if (ratio) {
              entry.target.classList.add("show-front");
              entry.target.classList.remove("show-back");
            } else {
              entry.target.classList.add("show-back");
              entry.target.classList.remove("show-front");
            }
          });
        };
    
        const observer = new IntersectionObserver(cb, options);
    
        allCards.forEach((card) => {
          observer.observe(card);
        });
      }
  }
