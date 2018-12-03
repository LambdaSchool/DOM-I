const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Image Selectors
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Nav Link content
let navLinks = document.querySelectorAll('a');
navLinks.forEach((a, index) => { //NodeLists aren't actual arrays, but we can still use forEach on them!
  let navItemProperty = `nav-item-${index + 1}`;
  a.textContent =siteContent.nav[navItemProperty];
});

//CTA text and button
let ctaContent = document.querySelector('.cta-text');
let ctaHeader = ctaContent.children[0];
let ctaButton = ctaContent.children[1];
ctaHeader.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

//Top Content
let topContent = document.querySelector('.top-content');

let featuresContent = topContent.children[0];
let featuresHeader = featuresContent.children[0];
let featuresText = featuresContent.children[1];

let aboutContent = topContent.children[1];
let aboutHeader = aboutContent.children[0];
let aboutText = aboutContent.children[1];

featuresHeader.textContent = siteContent["main-content"]["features-h4"];
featuresText.textContent = siteContent["main-content"]["features-content"];

aboutHeader.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];