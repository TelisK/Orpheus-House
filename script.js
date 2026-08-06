// ===========================
// Sticky Header
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


// ===========================
// Smooth Fade Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.review,.offer-card,.gallery img,.welcome,.luxury")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ===========================
// Active Navigation
// ===========================

const links = document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener("click",function(){

        links.forEach(a=>a.classList.remove("active"));

        this.classList.add("active");

    });

});


// ===========================
// Gallery Hover
// ===========================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


// ===========================
// Book Button
// ===========================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        console.log("Button Click");

    });

});