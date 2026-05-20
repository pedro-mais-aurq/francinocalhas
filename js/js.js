// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Close nav on link click (mobile)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
});


const hero = document.getElementById("hero");
const whatsapp = document.getElementById("whatsapp");

const observer = new IntersectionObserver(([entry]) => {
    if(entry.isIntersecting) {
        whatsapp.classList.remove("show");
        
     } else {
    whatsapp.classList.add("show");
}
},
{
    threshold: 0.15
});

observer.observe(hero);;