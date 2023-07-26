//import marketImgSrc from './assets/tapan-unsplash.jpg';

//import fishImgSrc from './assets/nikhil-unsplash.jpg';
//import squidImgSrc from './assets/cameron-unsplash.jpg';
//import inkImgSrc from './assets/ledoux-unsplash.jpg';
//import waterImgSrc from './assets/trovato-unsplash.jpg';

//import ownerImgSrc from './assets/argaman-unsplash.jpg';
//import barkeeperImgSrc from './assets/feliksik-unsplash.jpg';
//import waitressImgSrc from './assets/martin-unsplash.jpg';

//const articleWrapper = document.createElement("div");

//export default articleWrapper;

export function renderLayout() {
    const content = document.getElementById("content");

    //HEADER
    const header = document.createElement("header");
    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("header-wrapper");
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Penguin Bistre"
    headerWrapper.appendChild(logo);
    const navBar = document.createElement("div");
    navBar.classList.add("navbar");
    headerWrapper.appendChild(navBar);
    const nav = document.createElement("nav");
    navBar.appendChild(nav);
    const ul = document.createElement("ul");
    nav.appendChild(ul);
    const liHome = document.createElement("li");
    const HomeBtn = document.createElement("button");
    HomeBtn.classList.add("home-btn");
    HomeBtn.textContent = "Home";
    liHome.appendChild(HomeBtn);
    ul.appendChild(liHome);
    const liMenu = document.createElement("li");
    const MenuBtn = document.createElement("button");
    MenuBtn.classList.add("menu-btn");
    MenuBtn.textContent = "Menu";
    liMenu.appendChild(MenuBtn);
    ul.appendChild(liMenu)
    const liAbout = document.createElement("li");
    const AboutBtn = document.createElement("button");
    AboutBtn.classList.add("about-btn");
    AboutBtn.textContent = "About us"
    liAbout.appendChild(AboutBtn);
    ul.appendChild(liAbout);

    header.appendChild(headerWrapper);

    content.appendChild(header);

    //ARTICLE
    const article = document.createElement("article");
    const articleWrapper = document.createElement("div");
    articleWrapper.classList.add("article-wrapper");
    article.appendChild(articleWrapper);

    content.appendChild(article);

    //FOOTER
    const footer = document.createElement("footer");
    const copyright = document.createElement("div");
    copyright.textContent = "Copyright © 2023 Penguin Bistre";
    footer.appendChild(copyright);
    const contact = document.createElement("div");
    contact.textContent = "Contact us: South Pole";
    footer.appendChild(contact);

    content.appendChild(footer);

    //HOME
    //const homeHeader = document.createElement("div");
    //homeHeader.textContent = "Welcome to Penguin Bistre,";
    //articleWrapper.appendChild(homeHeader);
    //const homeContainer = document.createElement("div");
    //homeContainer.classList.add("home-container")
    //const marketImg = new Image();
    //marketImg.src = marketImgSrc;
    //homeContainer.appendChild(marketImg);
    //const homeText = document.createElement("p");
    //homeText.textContent = "the ultimate culinary experience in the heart of the South Pole! " +
    //"Dive into a world of exquisite flavors and let our skilled penguin chef tantalize your taste buds with their creative creations. " +
    //"From freshly caught seafood delicacies to refreshing ice-cold drinks, our restaurant offers a one-of-a-kind dining adventure in an enchanting icy setting.";
    //homeContainer.appendChild(homeText);
    //const homeSpan = document.createElement("span");
    //homeSpan.textContent = "To see our menu ";
    //const homeSpanBtn = document.createElement("button");
    //homeSpanBtn.classList.add("home-spanBtn");
    //homeSpanBtn.textContent = "Click here";
    //homeSpan.appendChild(homeSpanBtn);
    //homeContainer.appendChild(homeSpan);
    //articleWrapper.appendChild(homeContainer);

    //MENU
    //const menuHeader = document.createElement("h1");
    //menuHeader.classList.add("menu-heading");
    //menuHeader.textContent = "Menu";
    //articleWrapper.appendChild(menuHeader);

    //const menuContainer = document.createElement("div");
    //menuContainer.classList.add("menu-container");

    //const fishSpecial = new Image();
    //fishSpecial.src = fishImgSrc;
    //fishSpecial.alt = "fish-special";
    //const squidSpecial = new Image();
    //squidSpecial.src = squidImgSrc;
    //squidSpecial.alt = "squid-special";
    //const squidInk = new Image();
    //squidInk.src = inkImgSrc;
    //squidInk.alt = "squid-ink";
    //const glacierWater = new Image();
    //glacierWater.src = waterImgSrc;
    //glacierWater.alt = "glacier-water";

    //let itemArray = [
    //    {
    //    dish: fishSpecial,
    //    text: "Fish special"
    //    }, 
    //    {
    //    dish: squidSpecial,
    //    text: "Squid special"
    //    }, 
    //    {
    //    dish: squidInk,
    //    text: "Squid ink cocktails"
    //    }, 
    //    {
    //    dish: glacierWater,
    //    text: "Glacier water"
    //    },
    //];

    //itemArray.forEach((element) => {
    //    const item = document.createElement("div");
    //    item.classList.add("item");
    //    item.appendChild(element.dish);

    //    const overlay = document.createElement("div");
    //    overlay.classList.add("overlay");
    //    const itemText = document.createElement("div");
    //    itemText.classList.add("item-text");
    //    itemText.textContent = element.text;
    //    overlay.appendChild(itemText);
    //    item.appendChild(overlay);

    //    menuContainer.appendChild(item);
    //})

    //articleWrapper.append(menuContainer);

    //ABOUT US
    //const aboutHeading = document.createElement("h1");
    //aboutHeading.classList.add("about-heading");

    //const aboutContainer = document.createElement("div");
    //aboutContainer.classList.add("about-container");

    //const ownerImg = new Image();
    //ownerImg.src = ownerImgSrc;
    //ownerImg.alt = "owner";
    //const barkeeperImg = new Image();
    //barkeeperImg.src = barkeeperImgSrc;
    //barkeeperImg.alt = "barkeeper"
    //const waitressImg = new Image();
    //waitressImg.src = waitressImgSrc;
    //waitressImg.alt = "waitress";

    //let staffArray = [
    //    {member: ownerImg,
    //    text: "Bob - Owner & Chef"
    //    },
    //    {member: barkeeperImg,
    //    text: "Jonah - Barkeeper"
    //    },
    //    {member: waitressImg,
    //    text: "Daisy - Waitress"
    //    },
    //];

    //staffArray.forEach((element) => {
    //    const staff = document.createElement("div");
    //    staff.classList.add("staff");
    //    staff.appendChild(element.member);

    //    const overlay = document.createElement("div");
    //    overlay.classList.add("overlay");
    //    const staffText = document.createElement("div");
    //    staffText.classList.add("staff-text");
    //    staffText.textContent = element.text;
    //    overlay.appendChild(staffText);
    //    staff.appendChild(overlay);

    //    aboutContainer.appendChild(staff);
    //})

    //articleWrapper.appendChild(aboutContainer);

}