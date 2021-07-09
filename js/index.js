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
// let cta = document.getElementById('cta-img')
// console.log(cta)
// cta.setAttribute('src', siteContent.cta['img-src']);
let cta = document.getElementById('cta-img')
console.log(cta)
cta.setAttribute('src', siteContent.cta['img-src']);

// h1
const h1 = document.querySelector('h1')
//console.log(h1);
h1.textContent = sitContent.cta.h1
//console.log(h1);

const ctaButton = document = document.querySelector('button');
//console.log(ctaButton);
ctaButton.textContent = siteContent.cta.button;
/*
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
const section = document.getElementById("cta-img");
section.setAttribute("src", siteContent["cta"]["img-src"]);
const middle = document.getElementById("middle-img");
section.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
const mySelection = document.querySelector("header#header.nav");
console.log(mySelection);
const group = document.querySelector("p");
const navigation = document.querySelector("nav#header");
// const header = document.querySelector("header#header");
// const logoTitle = document.querySelector("#logo-img.logo");
// nav.appendChild(phone);

*/

//contact section

// <h4>
const contactSectionH4 = document.querySelector('.contact h4');
// console.log(contactSection);
contactSectionH4.textContent = siteContent.contact['contact-h4']

//<p> Address, Ph, email
const contactSectionP = document.querySelectorAll('.contact p')
console.log(contactSectionP);
contactSectionP[0].textContent = sitContent.contact.address;
contactSection[1].textContent = siteContent.contact.phone;
contactSectionP[2].textContent = siteContent.contact.email;





