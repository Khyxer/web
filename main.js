// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const scrollThreshold = 50; // Ajusta este valor según tus necesidades

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  // Verifica si se ha desplazado más allá del umbral
  if (currentScrollPos > scrollThreshold) {
    // Hide/show navbar
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }

    // Agregar sombra al navbar cuando se ha desplazado más allá del umbral
    if (currentScrollPos > 50) {
      navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
    } else {
      navbar.style.boxShadow = "none";
    }
  } else {
    // Asegúrate de que el navbar esté visible cuando no se ha desplazado más allá del umbral
    navbar.style.top = "0";
    navbar.style.boxShadow = "none";
  }

  prevScrollpos = currentScrollPos;
};

// Contact form handling with enhanced feedback
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = this.querySelector("button");
  const originalText = button.textContent;

  // Visual feedback
  button.textContent = "Sending...";
  button.style.opacity = "0.7";

  // Simulate sending (replace with actual form submission)
  setTimeout(() => {
    button.textContent = "Message Sent!";
    button.style.backgroundColor = "#64ffda";
    button.style.color = "#0a192f";

    // Reset form
    this.reset();

    // Reset button after 2 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "transparent";
      button.style.color = "#64ffda";
    }, 2000);
  }, 1000);
});

// Add fade-in animation for project cards
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease-out";
  observer.observe(card);
});