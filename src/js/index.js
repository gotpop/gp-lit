// Import
import { render } from "lit-html";
import site from "./templates/site";
import modal from "./modal";
import config from "./data/config";
import goSections from "./sections";
import goMatrix from "./matrix";
import goCards from "./cards";

render(site(config), document.body);

document.addEventListener("DOMContentLoaded", () => {
  const goModal = new modal(config.btn.class, config.nameSpace);
  new goSections();
  new goMatrix();
  new goCards();
});
