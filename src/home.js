import marketImgSrc from './assets/tapan-unsplash.jpg';

    const homeWrapper = document.createElement("div");
    homeWrapper.classList.add("article-wrapper");

    const homeHeader = document.createElement("div");
    homeHeader.textContent = "Welcome to Penguin Bistre,";

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

    homeWrapper.appendChild(homeHeader);
    homeWrapper.appendChild(homeContainer);

    export {
        homeWrapper,
        homeSpanBtn
    }