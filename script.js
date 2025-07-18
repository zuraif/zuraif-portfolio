const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".cursor");

const colors = [
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000",
  "#000"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();




const container = document.querySelector('.background-icons');
const iconCount = 40; // lower for spacing
const placedCoords = [];

for (let i = 0; i < iconCount; i++) {
  const icon = document.createElement('span');
  const size = 30 + Math.random() * 50;
  const delay = Math.random() * 10;
  const duration = 25 + Math.random() * 20;
  const iconNumber = (i % 11) + 1;

  let x, y, tries = 0;
  do {
    x = Math.random() * 100;
    y = Math.random() * 100;
    tries++;
  } while (
    placedCoords.some(coord => Math.abs(coord.x - x) < 6 && Math.abs(coord.y - y) < 6) &&
    tries < 20
  );
  placedCoords.push({ x, y });

  icon.style.width = `${size}px`;
  icon.style.height = `${size}px`;
  icon.style.left = `${x}%`;
  icon.style.top = `${y}%`;
  icon.style.backgroundImage = `url('./icons/${iconNumber}.svg')`;
  icon.style.animation = `float ${duration}s ease-in-out infinite`;
  icon.style.animationDelay = `${delay}s`;

  // Dreamy blur & depth
  icon.style.opacity = (Math.random() * 0.3 + 0.05).toFixed(2);
  icon.style.filter = `blur(${Math.random() * 2}px)`;

  container.appendChild(icon);
}


// Your birthdate (format: YYYY-MM-DDTHH:MM:SS)
const birthDate = new Date("2004-07-31T05:35:12");

// Update every second
setInterval(() => {
    const now = new Date();
    let diff = now - birthDate;

    const msInSec = 1000;
    const msInMin = 60 * msInSec;
    const msInHour = 60 * msInMin;
    const msInDay = 24 * msInHour;
    const msInWeek = 7 * msInDay;
    const msInMonth = 30.44 * msInDay;
    const msInYear = 365.25 * msInDay;

    const years = Math.floor(diff / msInYear);
    diff -= years * msInYear;

    const months = Math.floor(diff / msInMonth);
    diff -= months * msInMonth;

    const weeks = Math.floor(diff / msInWeek);
    diff -= weeks * msInWeek;

    const days = Math.floor(diff / msInDay);
    diff -= days * msInDay;

    const hours = Math.floor(diff / msInHour);
    diff -= hours * msInHour;

    const minutes = Math.floor(diff / msInMin);
    diff -= minutes * msInMin;

    const seconds = Math.floor(diff / msInSec);

    // Select the span using your given DOM path
    const ageSpan = document.querySelector(".main-container .right-pane .bio-section .bio-text p span:nth-child(2)");
    if (ageSpan) {
        ageSpan.textContent =
            `${years}y : ${months}m : ${weeks}w : ${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }
}, 1000);

const thoughts = [
  "Building things the smart way.",
  " Always worth it.",
  "ESPs and Arduinos are my jazz",
  "Minimal UI, maximum satisfaction.",
  "resisting writing this in Rust.",
  "Still better than your average AI...",
  "Waiting for the servo to calm down.",
  "Design is intelligence made visible.",
  "I speak fluent GPIO.",
  "Writing CSS like it's a boss battle."
];

let currentThoughtIndex = 0;
const thoughtEl = document.querySelector('.left-pane-thought');

let typingInterval;
let erasing = false;
let charIndex = 0;

function typeThought() {
  const currentThought = thoughts[currentThoughtIndex];

  if (!erasing && charIndex <= currentThought.length) {
    thoughtEl.textContent = currentThought.slice(0, charIndex++);
  } else if (erasing && charIndex >= 0) {
    thoughtEl.textContent = currentThought.slice(0, charIndex--);
  }

  if (charIndex === currentThought.length + 1) {
    erasing = true;
    clearInterval(typingInterval);
    setTimeout(() => {
      typingInterval = setInterval(typeThought, 30);
    }, 2500); // pause before erase
  }

  if (charIndex < 0 && erasing) {
    erasing = false;
    currentThoughtIndex = (currentThoughtIndex + 1) % thoughts.length;
    clearInterval(typingInterval);
    setTimeout(() => {
      typingInterval = setInterval(typeThought, 40);
    }, 500); // pause before typing new
  }
}

// Start typing loop
typingInterval = setInterval(typeThought, 40);


