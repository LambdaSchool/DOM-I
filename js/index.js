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

const nav = document.querySelectorAll('a');
nav[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav[0].style.color = 'green';
nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[1].style.color = 'green';
nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[2].style.color = 'green';
nav[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav[3].style.color = 'green';
nav[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav[4].style.color = 'green';
nav[5].innerHTML = siteContent["nav"]["nav-item-6"];
nav[5].style.color = 'green';

const title = document.querySelector("h1");
title.innerHTML = siteContent["cta"]["h1"];

const btn = document.querySelector("button");
btn.innerHTML = siteContent["cta"]["button"];

const codePicture = document.getElementById("cta-img");
codePicture.setAttribute('src', siteContent["cta"]["img-src"]);

const h4Content = document.querySelectorAll('h4');
h4Content[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Content[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Content[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Content[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Content[4].innerHTML = siteContent["main-content"]["vision-h4"];
h4Content[5].innerHTML = siteContent["contact"]["contact-h4"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const textContent = document.querySelectorAll('p');
textContent[0].innerHTML = siteContent["main-content"]["features-content"];
textContent[1].innerHTML = siteContent["main-content"]["about-content"];
textContent[2].innerHTML = siteContent["main-content"]["services-content"];
textContent[3].innerHTML = siteContent["main-content"]["product-content"];
textContent[4].innerHTML = siteContent["main-content"]["vision-content"];
textContent[5].innerHTML = siteContent["contact"]["address"];
textContent[6].innerHTML = siteContent["contact"]["phone"];
textContent[7].innerHTML = siteContent["contact"]["email"];
textContent[8].innerHTML = siteContent["footer"]["copyright"];

const newA = document.createElement('a');
newA.href = '#';
newA.innerHTML = 'Prepend';
newA.style.color = 'red';

const nav2 = document.querySelector("nav");
nav2.prepend(newA);

const newerA = document.createElement('a');
newerA.href = '#';
newerA.innerHTML = 'Append';
newerA.style.color = 'red';
nav2.appendChild(newerA);