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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// Anchor Elements
let anchor = document.querySelectorAll('a');
anchor[0].innerHTML = siteContent["nav"]["nav-item-1"];
anchor[1].innerHTML = siteContent["nav"]["nav-item-2"];
anchor[2].innerHTML = siteContent["nav"]["nav-item-3"];
anchor[3].innerHTML = siteContent["nav"]["nav-item-4"];
anchor[4].innerHTML = siteContent["nav"]["nav-item-5"];
anchor[5].innerHTML = siteContent["nav"]["nav-item-6"];

// h1 element & Button
let cta = document.querySelector('.cta-text');
let h1 = cta.getElementsByTagName('h1')[0];
let button = cta.getElementsByTagName('button')[0];
let image = document.querySelector('#cta-img');

// cta.style.padding = '30px 40px';

h1.innerHTML = siteContent['cta']['h1'];
button.innerText = siteContent['cta']['button'];
image.setAttribute('src', siteContent["cta"]["img-src"]);
// image.style.width = '50%;'

// MAIN CONTENT -- Top Content
let topContent = document.querySelector('.top-content');
let featuresContent = topContent.getElementsByTagName('div')[0];
let aboutContent = topContent.getElementsByTagName('div')[1];
console.log("My element: " + featuresContent);

let featuresH4 = featuresContent.querySelector('h4');
let featuresP = featuresContent.querySelector('p');
featuresH4.innerText = siteContent['main-content']['features-h4'];
featuresP.innerText = siteContent['main-content']['features-content']

let aboutH4 = aboutContent.querySelector('h4');
let aboutP = aboutContent.querySelector('p');
aboutH4.innerText = siteContent['main-content']['about-h4'];
aboutP.innerText = siteContent['main-content']['about-content'];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);
