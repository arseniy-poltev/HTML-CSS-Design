let section = document.querySelectorAll('.scrollspy'); // get all <section> elements
let menuLinks = document.querySelectorAll('#side-menu a'); // get all <a> inside <menu> inside <header> element
let navMenuLinks = document.querySelectorAll('#menu li:first-child a'); // get all <a> inside first child of <menu> under navbar
let sectionHeight = document.querySelector('.scrollspy').offsetHeight; // get the height of the top menu
let sectionStartingPointArray = []; // array to store the top-most pixel points of each <section>
let menuLinksArray = []; // array to store the menu elements
let navMenuLinksArray = []; // array to store the menu elements

// for every <section> element we store their top-most pixel point into an array
section.forEach((sec) => {sectionStartingPointArray.push(sec.offsetTop);});

// for every menu link element we store them in an array
menuLinks.forEach((menuLink) => {menuLinksArray.push(menuLink);});
navMenuLinks.forEach((menuLink) => {navMenuLinksArray.push(menuLink);});
