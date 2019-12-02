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

//TASK 1, ITEM 1
let navSelector = document.querySelector('nav');
const navATag = document.querySelectorAll('a');
//--------------


//TASK 2, ITEM 2
const navAOne = navATag[0];
navAOne.textContent = 'Services';

const navATwo = navATag[1];
navATwo.textContent = 'Product';

const navAThree = navATag[2];
navAThree.textContent = 'Vision';

const navAFour = navATag[3];
navAFour.textContent = 'Features';

const navAFive = navATag[4];
navAFive.textContent = 'About';

const navASix = navATag[5];
navASix.textContent = 'Contact';
//---------------


//TASK 2, ITEM 3
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
//--------------


//TASK 3, ITEM 1
navATag.forEach(item => item.style.color = 'green');
//--------------


//TASK 3, ITEM 2
const newNavATag1 = document.createElement('a');
const newNavATag2 = document.createElement('a');

newNavATag1.textContent = 'End';
newNavATag1.style.color = 'green';
navSelector.appendChild(newNavATag1);

newNavATag2.textContent = 'Home';
newNavATag2.style.color = 'green';
navSelector.prepend(newNavATag2);
//---------------


//TASK 2, ITEM 2
//---h1---
const headerSelector = document.querySelector('h1');
headerSelector.setAttribute('style', 'white-space:pre');
headerSelector.textContent = 'Dom \r\n Is \r\n Awesome';
headerSelector.style.color = 'black';
headerSelector.style.width = '15rem';

//---button---
const buttonSelector = document.querySelector('button');
// buttonSelector.setAttribute('style');
buttonSelector.textContent = 'Get Started';


//---main-content---
const mainTitle = document.querySelectorAll('h4');
const mainText = document.querySelectorAll('p');

const titleOne = mainTitle[0];
const textOne = mainText[0];

const titleTwo = mainTitle[1];
const textTwo = mainText[1];

const titleThree = mainTitle[2];
const textThree = mainText[2];

const titleFour = mainTitle[3];
const textFour = mainText[3];

const titleFive = mainTitle[4];
const textFive = mainText[4];



//--------------