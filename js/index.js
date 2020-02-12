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

// Task 1: Create selectors to point your data into elements

const container      = document.querySelector('.container')
const navItems       = document.querySelectorAll('a') // done
const button         = document.querySelector('button');
const logoImg        = document.querySelector('#logo-img')
const ctaImg         = document.querySelector('#cta-img')

const cta            = document.querySelector('.cta')
const ctaText        = document.querySelector('.cta-text')
const mainContent    = document.querySelector('.main-content')
const topContent     = document.querySelector('.top-content')
const allTextContent = document.querySelectorAll('.text-content')
const middleImage    = document.querySelector('#middle-img')
const bottomContent  = document.querySelector('.bottom-content')
const contact        = document.querySelector('.contact')

/*
  Task 2: Update the HTML with the JSON data
*/

// Add the innerTEXT to the nav items
navItems.forEach((item, ndx) => item.innerText = siteContent.nav["nav-item-"+(ndx + 1)])
logoImg.setAttribute('src', siteContent.nav['img-src'])
ctaText.firstChild.nodeValue = siteContent.cta.h1;
button.innerText = siteContent.cta.button
ctaImg.setAttribute('src', siteContent.cta['img-src'])
// ctaText.innerText = siteContent
// Task 3: Add new content
// console.log(ctaImg)

// Stretch Goals
// Stretch Project: Digital Timer
