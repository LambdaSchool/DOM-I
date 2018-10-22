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

const aElements = document.querySelectorAll('a');
aElements[0].textContent = siteContent['nav']['nav-item-1'];
aElements[1].textContent = siteContent['nav']['nav-item-2'];
aElements[2].textContent = siteContent['nav']['nav-item-3'];
aElements[3].textContent = siteContent['nav']['nav-item-4'];
aElements[4].textContent = siteContent['nav']['nav-item-5'];
aElements[5].textContent = siteContent['nav']['nav-item-6'];
console.log(aElements.length);

const h1CtaElement = document.querySelector('h1');
h1CtaElement.textContent = siteContent['cta']['h1'];

const btnCtaElement = document.querySelector('button');
btnCtaElement.textContent = siteContent['cta']['button'];

const ctaImgElement = document.getElementById('cta-img');
ctaImgElement.src = siteContent['cta']['img-src'];

const mainCtnImg = document.getElementById('middle-img');
mainCtnImg.src = siteContent['main-content']['middle-img-src'];

const h4Elementa = document.querySelectorAll('h4');
h4Elementa[0].textContent = siteContent['main-content']['features-h4'];
h4Elementa[1].textContent = siteContent['main-content']['about-h4'];
h4Elementa[2].textContent = siteContent['main-content']['services-h4'];
h4Elementa[3].textContent = siteContent['main-content']['product-h4'];
h4Elementa[4].textContent = siteContent['main-content']['vision-h4'];
h4Elementa[5].textContent = siteContent['contact']['contact-h4'];

const pElements = document.querySelectorAll('p');
pElements[0].textContent = siteContent['main-content']['features-content'];
pElements[1].textContent = siteContent['main-content']['about-content'];
pElements[2].textContent = siteContent['main-content']['services-content'];
pElements[3].textContent = siteContent['main-content']['product-content'];
pElements[4].textContent = siteContent['main-content']['vision-content'];
pElements[5].textContent = siteContent['contact']['address'];
pElements[6].textContent = siteContent['contact']['phone'];
pElements[7].textContent = siteContent['contact']['email'];
pElements[8].textContent = siteContent['footer']['copyright'];

aElements[0].style.color = "green";
aElements[1].style.color = "green";
aElements[2].style.color = "green";
aElements[3].style.color = "green";
aElements[4].style.color = "green";
aElements[5].style.color = "green";

const newAelement1 = document.createElement('a');
newAelement1.href = '#';
newAelement1.textContent = 'NewLink-1';
newAelement1.style.color = 'green';

const newAelement2 = document.createElement('a');
newAelement2.href = '#';
newAelement2.textContent = 'NewLink-2';
newAelement2.style.color = 'green';


const aNavLinkElements = document.querySelector('nav');
aNavLinkElements.prepend(newAelement1);
aNavLinkElements.append(newAelement2);