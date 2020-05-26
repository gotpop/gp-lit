// Import
import { html } from "lit-html";
import menu from "../data/menu";
import menuItem from "./menuItem";
import goLogo from "./logo";

// Template
const header = html `
  <header class="header">
    <section class="header__inner">
      <div class="header__logo">
        ${goLogo}
      </div>
      <nav class="header__nav">
        ${menu.map((item) => html`${menuItem(item)}`)}
      </nav>
    </section>
  </header>
`;

export default header;

// Scripts
const closeToTop = ( ) => {
    const loadedActions = ( ) => {
        const header = document.querySelector( ".header" );
        const initialy = header.getBoundingClientRect( ).y;

        if( localStorage.getItem( "header" ) === null ) {
            localStorage.setItem( "header", initialy );
        }
    };

    const scrollActions = ( ) => {
        const header = document.querySelector( ".header" );
        const headerPosition = localStorage.getItem( "header" );
        const height = header.getBoundingClientRect( ).y;
        const pageHasScrolled = headerPosition > height;

        pageHasScrolled
            ? header.classList.add( "header__enter-logo" )
            : header.classList.remove( "header__enter-logo" );
    };

    document.addEventListener( "DOMContentLoaded", loadedActions );
    window.addEventListener( "scroll", scrollActions );
};

closeToTop( );
