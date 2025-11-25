/* ===========================
   Sonny - JavaScript Dinema
   =========================== */

/* ---------------------------
   1. Header scroll effect
--------------------------- */
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ---------------------------
   2. Smooth scrolling
--------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });
    });
});


/* ---------------------------
   3. Card reveal on scroll
--------------------------- */
const revealElements = document.querySelectorAll(
    ".instruction-card, .feature-card, .reel-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

revealElements.forEach(el => revealObserver.observe(el));


/* ---------------------------
   4. Glitch text effect (Optional)
--------------------------- */
function glitchText(selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    const text = element.innerText;
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________";

    const randomChar = () =>
        glitchChars[Math.floor(Math.random() * glitchChars.length)];

    function distort() {
        let result = "";

        for (let i = 0; i < text.length; i++) {
            if (Math.random() < 0.15) result += randomChar();
            else result += text[i];
        }

        element.innerText = result;

        setTimeout(() => {
            element.innerText = text;
        }, 120);
    }

    element.addEventListener("mouseenter", distort);
}

// Aplica glitch a títulos
glitchText("h1");
glitchText("h2");


/* ---------------------------
   5. Button ripple effect
--------------------------- */
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 500);
    });
});


/* ---------------------------
   6. Console branding
--------------------------- */
console.log("%cDINEMA - Sonny Neuromarketing JS Loaded", "color:#6a11cb;font-size:14px;font-weight:bold;");
