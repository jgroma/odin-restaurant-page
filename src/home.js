import marketImgSrc from './assets/tapan-unsplash.jpg';
//import articleWrapper from "./layout.js";

//articleWrapper;

export function renderHome() {
    //const articleWrapper = document.querySelector("article-wrapper");

    const homeHeader = document.createElement("div");
    homeHeader.textContent = "Welcome to Penguin Bistre,";
    articleWrapper.appendChild(homeHeader);
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container")
    const marketImg = new Image();
    marketImg.src = marketImgSrc;
    homeContainer.appendChild(marketImg);
    const homeText = document.createElement("p");
    homeText.textContent = "the ultimate culinary experience in the heart of the South Pole! " +
    "Dive into a world of exquisite flavors and let our skilled penguin chef tantalize your taste buds with their creative creations. " +
    "From freshly caught seafood delicacies to refreshing ice-cold drinks, our restaurant offers a one-of-a-kind dining adventure in an enchanting icy setting.";
    homeContainer.appendChild(homeText);
    const homeSpan = document.createElement("span");
    homeSpan.textContent = "To see our menu ";
    const homeSpanBtn = document.createElement("button");
    homeSpanBtn.classList.add("home-spanBtn");
    homeSpanBtn.textContent = "Click here";
    homeSpan.appendChild(homeSpanBtn);
    homeContainer.appendChild(homeSpan);
    articleWrapper.appendChild(homeContainer);
}