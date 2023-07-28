import fishImgSrc from './assets/nikhil-unsplash.jpg';
import squidImgSrc from './assets/cameron-unsplash.jpg';
import inkImgSrc from './assets/ledoux-unsplash.jpg';
import waterImgSrc from './assets/trovato-unsplash.jpg';

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("article-wrapper");

    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("menu-heading");
    menuHeader.textContent = "Menu";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const fishSpecial = new Image();
    fishSpecial.src = fishImgSrc;
    fishSpecial.alt = "fish-special";
    const squidSpecial = new Image();
    squidSpecial.src = squidImgSrc;
    squidSpecial.alt = "squid-special";
    const squidInk = new Image();
    squidInk.src = inkImgSrc;
    squidInk.alt = "squid-ink";
    const glacierWater = new Image();
    glacierWater.src = waterImgSrc;
    glacierWater.alt = "glacier-water";

    let itemArray = [
        {
        dish: fishSpecial,
        text: "Fish special"
        }, 
        {
        dish: squidSpecial,
        text: "Squid special"
        }, 
        {
        dish: squidInk,
        text: "Squid ink cocktails"
        }, 
        {
        dish: glacierWater,
        text: "Glacier water"
        },
    ];

    itemArray.forEach((element) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.appendChild(element.dish);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        const itemText = document.createElement("div");
        itemText.classList.add("item-text");
        itemText.textContent = element.text;
        overlay.appendChild(itemText);
        item.appendChild(overlay);

        menuContainer.appendChild(item);
    })
    
    menuWrapper.appendChild(menuHeader);
    menuWrapper.append(menuContainer);

    export {
        menuWrapper
    }