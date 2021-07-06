const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Selectors
const nav = document.querySelector("nav");
//console.log(nav)
const navItems = nav.querySelectorAll("a");
//console.log(navItems)
const navImg = document.querySelector("#logo-img");
const cta = document.querySelector(".cta");
const ctaHeader = cta.querySelector("h1");
const ctaImg = document.querySelector("#cta-img");
const ctaButton = cta.querySelector("button");
const mainContent = document.querySelector(".main-content");
const contact = document.querySelector(".contact");
const footer = document.querySelector("footer");
const topContent = document.querySelector(".top-content");
const bottomContent = document.querySelector(".bottom-content");
const topHeaders = topContent.querySelectorAll("h4");
const bottomHeaders = bottomContent.querySelectorAll("h4");
const topText = topContent.querySelectorAll("p");
const bottomText = bottomContent.querySelectorAll("p");
const middleImg = document.querySelector("#middle-img");
const contactHeader = contact.querySelector("h4");
const contactParas = contact.querySelectorAll("p");
const newNav1 = document.createElement("a");
const newNav2 = document.createElement("a");

//Nav
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}
navImg.setAttribute("src", siteContent.nav["img-src"]);
navItems.forEach((element) => {
  element.style.color = "green";
});
newNav1.textContent = "Contribute";
newNav1.href = "a";
nav.appendChild(newNav1);
newNav1.style.color = "green";

newNav2.textContent = "Home";
newNav2.href = "a";
nav.prepend(newNav2);
newNav2.style.color = "green";

//CTA
ctaHeader.textContent = siteContent.cta.h1;
ctaImg.setAttribute("src", siteContent.cta["img-src"]);
ctaButton.textContent = siteContent.cta.button;

ctaHeader.style.color = "crimson";
ctaButton.style.borderColor = "crimson";
ctaButton.style.borderWidth = "5px";

//Top Content
topHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topHeaders[1].textContent = siteContent["main-content"]["about-h4"];
topText[0].textContent = siteContent["main-content"]["features-content"];
topText[1].textContent = siteContent["main-content"]["about-content"];

topHeaders[0].style.color = "crimson";
topHeaders[1].style.color = "crimson";

//Bottom Content
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
bottomHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeaders[2].textContent = siteContent["main-content"]["vision-h4"];
bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"]["vision-content"];

bottomHeaders[0].style.color = "crimson";
bottomHeaders[1].style.color = "crimson";
bottomHeaders[2].style.color = "crimson";

//Contact
contactHeader.textContent = siteContent.contact["contact-h4"];
contactParas[0].textContent = siteContent.contact.address;
contactParas[1].textContent = siteContent.contact.phone;
contactParas[2].textContent = siteContent.contact.email;

contactHeader.style.textDecoration = "underline";
contactHeader.style.color = "crimson";

//Copyright
footer.firstChild.textContent = siteContent.footer.copyright;

footer.style.color = "crimson";
