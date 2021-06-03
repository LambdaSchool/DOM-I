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

const anchorTags = document.querySelectorAll('nav a')
anchorTags[0].innerHTML = "Services"
anchorTags[1].innerHTML = "Product"
anchorTags[2].innerHTML = "Vision"
anchorTags[3].innerHTML = "Features"
anchorTags[4].innerHTML = "About"
anchorTags[5].innerHTML = "Contact"

const anchors = document.querySelector('a')
anchors.setAttribute("style", "color:green;")

// navagation.prepend(newA).prepend(newBtext)



// anchorTags.style.color = "green"
// document.querySelectorAll('nav a').style.color ="green";
// document.getElementsByName("a").style.color = "green";
// anchorTags.style="color:green"

const heading = document.querySelector("h1")
heading.innerHTML = "DOM Is Awesome"
const button = document.querySelector("button") 
button.innerHTML = "Get Started"
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

const h4 = document.getElementsByTagName('h4')
h4[0].innerHTML = "Features"
h4[1].innerHTML = "About"
h4[2].innerHTML = "Services"
h4[3].innerHTML = "Product"
h4[4].innerHTML = "Vision"
h4[5].innerHTML = "Contact"

const info = document.getElementsByTagName("p")
info[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
info[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
info[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
info[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
info[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
info[5].innerHTML = "123 Way 456 Street Somewhere, USA"
info[6].innerHTML = "1 (888) 888-8888"
info[7].innerHTML = "sales@greatidea.io"
info[8].innerHTML = "Copyright Great Idea! 2018"

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const navagation = document.querySelector('nav')
let newA = document.createElement('a')
let newAtext = document.createTextNode('Examples')
let newBtext = document.createTextNode('Explore -->')
navagation.appendChild(newA).appendChild(newAtext)
navagation.prepend(newBtext)

