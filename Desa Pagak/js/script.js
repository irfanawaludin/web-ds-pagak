// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});


// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});


// ================= FADE IN ANIMATION =================
const faders = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

faders.forEach(fader => {
    fadeObserver.observe(fader);
});


// ================= SLIDE LEFT & RIGHT =================
const sliders = document.querySelectorAll('.slide-left, .slide-right');

const slideObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

sliders.forEach(slide => {
    slideObserver.observe(slide);
});

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = 20;
            const increment = target / 100;

            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, speed);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCounter();
            observer.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

