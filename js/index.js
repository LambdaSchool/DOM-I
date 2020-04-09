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



// My Code

//navigation

const navBar = document.querySelectorAll('a');
navBar[0].textContent = 'Services';
navBar[1].textContent = 'Product';
navBar[2].textContent = 'Vision';
navBar[3].textContent = 'Features';
navBar[4].textContent = 'About';
navBar[5].textContent = 'Contact';

// new navbar content

let newNav = document.querySelector('nav');
let homeContent = document.createElement('a');
homeContent.textContent = "Home";
newNav.prepend(homeContent);
homeContent.style.color = 'green';

let blogContent = document.createElement('a');
blogContent.textContent = "Blog";
newNav.appendChild(blogContent);
blogContent.style.color = 'green';

// green navbar text

Array.from(navBar).forEach((element) =>
{
  element.style.color = "green";
})
// navBar.prepend("Home");
// navBar.append("Blog");



//header content

const ctaText = document.querySelector('h1');
ctaText.textContent = "DOM is awesome";

const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

const content = document.querySelectorAll('h4');
content[0].textContent = 'Features';
content[1].textContent = 'About';
content[2].textContent = 'Services';
content[3].textContent                                           = 'Product';
content[4].textContent = 'Vision';
content[5].textContent = 'Contact';

// top content

const text = document.querySelectorAll('p');
text[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
text[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//bottom content

text[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
text[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
text[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// contact

text[5].textContent = '123 Way 456 Street Somewhere, USA';
text[6].textContent = '1 (888) 888-8888';
text[7].textContent = 'sales@greatidea.io';

//footer

text[8].textContent = 'Copyright Great Idea! 2018';


//images

// header img
const headImg = document.getElementById('cta-img');
headImg.src = 'img/header-img.png';
// middle img
const middleImg = document.getElementById ('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');


// header margin adjustments

const headerMargin = document.querySelector('.cta-text');
headerMargin.style.width = "25%"

