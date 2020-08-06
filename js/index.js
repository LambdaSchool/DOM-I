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

// Nav 
let navLinks = document.querySelectorAll('nav a')

// Nav links forEach
navLinks.forEach(
	(x, i) => (x.textContent = siteContent['nav'][`nav-item-${i + 1}`])
)

// Nav links green
navLinks.forEach(x => (x.style.color = 'green'))

// New links
let firstNav = document.createElement('a')
let textFirstNav = document.createTextNode('Home')
let lastNav = document.createElement('a')
let textLastNav = document.createTextNode('Links')
let navBar = document.querySelector('nav')

firstNav.appendChild(textFirstNav)
lastNav.appendChild(textLastNav)
navBar.prepend(firstNav)
navBar.appendChild(lastNav)

//  Title 'Dom is awesome'
let ctaTitle = document.querySelector('.cta .cta-text h1')
ctaTitle.textContent = siteContent['cta']['h1']

//  Top Button
let ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.textContent = siteContent['cta']['button']

// Top Img
let ctaImage = document.querySelector('.cta #cta-img')
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

// Titles Mid-Content
let titlesH4 = document.querySelectorAll('.main-content .text-content h4')
titlesH4[0].textContent = siteContent['main-content']['features-h4']
titlesH4[1].textContent = siteContent['main-content']['about-h4']
titlesH4[2].textContent = siteContent['main-content']['services-h4']
titlesH4[3].textContent = siteContent['main-content']['product-h4']
titlesH4[4].textContent = siteContent['main-content']['vision-h4']

// Mid-Image
let middleImage = document.querySelector('.middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

// Mid-Text
let contentText = document.querySelectorAll('.main-content .text-content p')
contentText[0].textContent = siteContent['main-content']['features-content']
contentText[1].textContent = siteContent['main-content']['about-content']
contentText[2].textContent = siteContent['main-content']['services-content']
contentText[3].textContent = siteContent['main-content']['product-content']
contentText[4].textContent = siteContent['main-content']['vison-content']

// Title Contacts
let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

// Contact Text
let contactData = document.querySelectorAll('.contact p')
contactData[0].textContent = siteContent['contact']['address']
contactData[1].textContent = siteContent['contact']['phone']
contactData[2].textContent = siteContent['contact']['email']

// Footer
let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

