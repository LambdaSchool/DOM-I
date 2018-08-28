const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM <br>Is<br> Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "man-top-1": "Features",
    "man-top-2": "About",
    "man-btm-1": "Services",
    "man-btm-2": "Product",
    "man-btm-3": "Vision",

    "main-top-content-1":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "main-top-content-2":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

/* 
//let nav = document.querySelectorAll("nav a")[0];
// nav.innerHTML = siteContent.nav['nav-item-1'];
// let nav1 = document.querySelectorAll("nav a")[1];
// nav1.innerHTML = siteContent.nav['nav-item-2'];
// let nav2 = document.querySelectorAll("nav a")[2];
// nav2.innerHTML = siteContent.nav['nav-item-3'];
// let nav3 = document.querySelectorAll("nav a")[3];
// nav3.innerHTML = siteContent.nav['nav-item-4'];
// let nav4 = document.querySelectorAll("nav a")[4];
// nav4.innerHTML = siteContent.nav['nav-item-5'];
// let nav5 = document.querySelectorAll("nav a")[5];
// nav5.innerHTML = siteContent.nav['nav-item-6'];
 */

//Mapped navigation
let nav = Array.from(document.querySelectorAll('nav a'));
let navigation = nav.map((element, arr) => {
  element.innerHTML = siteContent.nav[`nav-item-${arr + 1}`]
  element.style.color = "limegreen";
});

// Appending to the end of the Nav List
var a = document.createElement("a");
const contentDiv = document.querySelector('nav');
a.innerHTML = 'Stefan';
a.style.color = "limegreen";
contentDiv.appendChild(a)

// Pre-pending items to the Nav List
var ap = document.createElement("a");
const  navItem = document.querySelector('nav');
ap.innerHTML = 'Pre-Order';
ap.style.color = "limegreen";
navItem.prepend(ap);
console.log(ap)



// CTA Content 
const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
//Middle Content
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent.cta['h1'];
ctaH1.style.fontSize= '80px'
ctaH1.setAttribute('h1', siteContent['cta']['h1']);

let ctaButton = document.querySelector("button");
ctaButton.innerHTML = "Get Started";
ctaButton.setAttribute('button', siteContent['cta']['button']);

// Main Content Top 

// All h4 headding are here.
let main = Array.from(document.querySelectorAll(".main-content .top-content h4"));
let mainCtn = main.map((item, ar) => {
  item.innerHTML = siteContent['main-content'][`man-top-${ar + 1}`]
});

// All content here 
let content = Array.from(document.querySelectorAll(".main-content .top-content p"))
let cntTop = content.map((element, arr) => {
  element.innerHTML = siteContent['main-content'][`main-top-content-${arr +1 }`]
});
 

// Main Content Bottom 
const bottom = Array.from(
  document.querySelectorAll(".main-content .bottom-content h4")
);
const btmCtn = bottom.map((element, arr) => {
  element.innerHTML = siteContent['main-content'][`man-btm-${arr + 1}`]
});


// const navigation = nav.map((element, arr) => {
//   element.innerHTML = siteContent.nav[`nav-item-${arr + 1}`];
// });
// let main2 = document.querySelector("h4");
// main2.innerHTML = siteContent["main-content"]["about-h4"];
console.log(content);
