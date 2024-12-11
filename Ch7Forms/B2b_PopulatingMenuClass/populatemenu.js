import {CountryMenu} from "./countryMenu.js";

const selectMenu = document.getElementById('country');

let cMenu = new CountryMenu();

cMenu.populate(selectMenu);

