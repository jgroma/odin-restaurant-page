
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
    const homeBtn = document.createElement("button");
    homeBtn.classList.add("home-btn");
    homeBtn.textContent = "Home";
    liHome.appendChild(homeBtn);
    ul.appendChild(liHome);
    const liMenu = document.createElement("li");
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-btn");
    menuBtn.textContent = "Menu";
    liMenu.appendChild(menuBtn);
    ul.appendChild(liMenu)
    const liAbout = document.createElement("li");
    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add("about-btn");
    aboutBtn.textContent = "About us"
    liAbout.appendChild(aboutBtn);
    ul.appendChild(liAbout);

    header.appendChild(headerWrapper);


    //ARTICLE
    const article = document.createElement("article");

    //FOOTER
    const footer = document.createElement("footer");
    const copyright = document.createElement("div");
    copyright.textContent = "Copyright © 2023 Penguin Bistre";
    footer.appendChild(copyright);
    const contact = document.createElement("div");
    contact.textContent = "Contact us: South Pole";
    footer.appendChild(contact);


export {
    header,
    article,
    footer,
    homeBtn,
    menuBtn,
    aboutBtn
}