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

const titleUpdate = document.title ='Great Idea!'

//  NAV LIST

const nav = document.querySelectorAll('nav a')
// document.querySelector('nav').style.color = 'green'


const linksRealArr = Array.from(nav)
const services = nav[0];
const product = nav[1];
const vision = nav[2]
const features = nav[3]
const about = nav[4]
const contact = nav[5]
const blogLink = document.createElement('a');
const scrubbles = document.createElement('a');



services.textContent = 'Services';
product.textContent = 'Product';
vision.textContent = 'Vision';
features.textContent = 'Features';
about.textContent = 'About';
contact.textContent = 'Contact';
scrubbles.textContent = 'Scrubbles';
blogLink.textContent = 'Blog';
blogLink.href = '#';


document.querySelector('nav').appendChild(blogLink)
document.querySelector('nav').prepend(scrubbles)

nav.forEach(link => link.style.color = 'green')

// IMAGES

const imageOne = document.querySelector('.logo');
const imageTwo = document.querySelector('#middle-img');
imageOne.setAttribute('src', "img/logo.png");
imageTwo.setAttribute('src', "img/mid-page-accent.jpg");


// CTA

const ctaTxt = document.querySelector('.cta-text');
const buttontext = ctaTxt.querySelector('button');
const linkbreak = document.createElement('br');
header = document.querySelector('h1')
header.innerHTML = 'DOM<br> Is<br> Awesome';
buttontext.textContent = 'Get Started'

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', "img/header-img.png");


// Top Content

const topContent = document.querySelector('.top-content')

const feature = topContent.querySelector('.text-content:nth-of-type(1)')
const featureTitle = feature.querySelector('h4');
const featureTxt = feature.querySelector('p');
featureTitle.textContent = "Feature"
featureTxt.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.'

const aboutSection = topContent.querySelector('.text-content:nth-of-type(2)')
const aboutTitle = aboutSection.querySelector('h4');
const aboutTxt = aboutSection.querySelector('p');
aboutTitle.textContent = 'About';
aboutTxt.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.'



// Bottom Content

const bottomContent = document.querySelector('.bottom-content')

const servicesSection = bottomContent.querySelector('.text-content:nth-child(1)')
const serviceTitle = servicesSection.querySelector('h4')
const serviceTxt = servicesSection.querySelector('p')

serviceTitle.textContent = 'Services';
serviceTxt.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.';


const productSection = bottomContent.querySelector('.text-content:nth-child(2)')
const productTitle = productSection.querySelector('h4')
const productTxt = productSection.querySelector('p')

console.log(productSection)
console.log(servicesSection)

productTitle.textContent = 'Product';
productTxt.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.'

const visionSection = bottomContent.querySelector('.text-content:nth-child(3)')
const visionTitle = visionSection.querySelector('h4')
const visionTxt = visionSection.querySelector('p')

visionTitle.textContent ='Vision';
visionTxt.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.'

// Contact Section 

const contactSection = document.querySelector('.contact');
const contactTitle = contactSection.querySelector('h4');
const address = contactSection.querySelector('p:nth-of-type(1)');
const phone = contactSection.querySelector('p:nth-of-type(2)');
const email = contactSection.querySelector('p:nth-of-type(3)');

contactTitle.textContent = 'Contact';
address.innerHTML= '123 Way 456 Street<br>Somewhere, USA'
// address.textContent = '123 Way 456 Street Somewhere, USA';
phone.textContent = '1 (888) 888-8888';
email.textContent = 'sales@greatidea.io';


// Footer

const footer = document.querySelector('footer');
const copyright = footer.querySelector('p');
copyright.textContent = 'Copyright Great Idea! 2018';



