import ownerImgSrc from './assets/argaman-unsplash.jpg';
import barkeeperImgSrc from './assets/feliksik-unsplash.jpg';
import waitressImgSrc from './assets/martin-unsplash.jpg';

    const aboutWrapper = document.createElement("div");
    aboutWrapper.classList.add("article-wrapper");

    const aboutHeading = document.createElement("h1");
    aboutHeading.classList.add("about-heading");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const ownerImg = new Image();
    ownerImg.src = ownerImgSrc;
    ownerImg.alt = "owner";
    const barkeeperImg = new Image();
    barkeeperImg.src = barkeeperImgSrc;
    barkeeperImg.alt = "barkeeper"
    const waitressImg = new Image();
    waitressImg.src = waitressImgSrc;
    waitressImg.alt = "waitress";

    let staffArray = [
        {member: ownerImg,
        text: "Bob - Owner & Chef"
        },
        {member: barkeeperImg,
        text: "Jonah - Barkeeper"
        },
        {member: waitressImg,
        text: "Daisy - Waitress"
        },
    ];

    staffArray.forEach((element) => {
        const staff = document.createElement("div");
        staff.classList.add("staff");
        staff.appendChild(element.member);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        const staffText = document.createElement("div");
        staffText.classList.add("staff-text");
        staffText.textContent = element.text;
        overlay.appendChild(staffText);
        staff.appendChild(overlay);

        aboutContainer.appendChild(staff);
    })

    aboutWrapper.appendChild(aboutHeading);
    aboutWrapper.appendChild(aboutContainer);

    export {
        aboutWrapper
    }