// Import
import { render } from "lit-html";
import site from "./templates/site";
import modal from "./modules/modal";
import config from "./data/config";
import goSections from "./modules/sections";
import goMatrix from "./modules/matrix";
import goCards from "./modules/cards";

render( site( config ), document.body );

document.addEventListener( "DOMContentLoaded", ( ) => {
    const goModal = new modal( config.btn.class, config.nameSpace );
    new goSections( );
    new goMatrix( );
    new goCards( );
} );
