const texts = [
  "Irsyaad Faalih Sulistyanto",
  "UI/UX Designer",
  "Graphic Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 150);
  }
})();


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});


const pageTransition = document.querySelector(".page-transition");
const navLinksClick = document.querySelectorAll(".nav-links a, .home-buttons a");
const sound = document.getElementById("transition-sound");

navLinksClick.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");

    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }

    pageTransition.classList.add("active");

    setTimeout(() => {
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        pageTransition.classList.remove("active");
      }, 600);
    }, 300);
  });
});


window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  document.body.style.backgroundPosition = `center ${scroll * 0.3}px`;
});


VanillaTilt.init(document.querySelector("#about .card img"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

window.addEventListener("scroll", () => {
  const progress = document.getElementById("progress-bar");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progress.style.width = scrollPercent + "%";
});
