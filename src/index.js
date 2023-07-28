import './style/reset.css';
import './style/style.css';

import {
    header,
    article,
    articleWrapper,
    footer,
    homeBtn,
    menuBtn,
    aboutBtn
} from './layout.js';
import {homeWrapper, homeSpanBtn} from './home.js';
import {menuWrapper} from './menu.js';
import {aboutWrapper} from './about.js';


const content = document.getElementById("content");

//renders the base layout
content.appendChild(header);
content.appendChild(article);
content.appendChild(footer);

let chosenTab = "home";

//loads home section initially
if(chosenTab == "home") {
    article.appendChild(homeWrapper);
}

//TAB SWITCHING

homeBtn.addEventListener("click", () => {
    if (chosenTab !== "home") {
        article.textContent = "";
        chosenTab = "home";
        article.appendChild(homeWrapper);
    } else {
        //do nothing
    };
});

const menuBtns = [menuBtn, homeSpanBtn];

menuBtns.forEach(element => {
    element.addEventListener("click", () => {
        if (chosenTab !== "menu") {
            article.textContent = "";
            chosenTab = "menu";
            article.appendChild(menuWrapper);
        } else {
            //do nothing
        }
    })
});

aboutBtn.addEventListener("click", () => {
    if (chosenTab !== "about") {
        article.textContent = "";
        chosenTab = "about";
        article.appendChild(aboutWrapper);
    } else {
        //do nothing
    }
});

