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
const scrollThreshold = 50;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > scrollThreshold) {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-180px";
    }

    if (currentScrollPos > 50) {
      navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
    } else {
      navbar.style.boxShadow = "none";
    }
  } else {
    navbar.style.top = "0";
    navbar.style.boxShadow = "none";
  }

  prevScrollpos = currentScrollPos;
};

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = this.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Sending...";
  button.style.opacity = "0.7";

  setTimeout(() => {
    button.textContent = "Message Sent!";
    button.style.backgroundColor = "#64ffda";
    button.style.color = "#0a192f";

    // Reset form
    this.reset();

    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "transparent";
      button.style.color = "#64ffda";
    }, 2000);
  }, 1000);
});

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

// COSAS A MEJORAR EN EL FUTURO #1 - OPTIMIZAR ESTA MRDA

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
  if (toggleTheme.checked) {
    document.documentElement.style.setProperty("--primary-color", "#45b097");
    document.documentElement.style.setProperty("--background-color", "#cdcdcd");
    document.documentElement.style.setProperty("--secondary-bg", "#f8f9fa");
    document.documentElement.style.setProperty("--text-color", "#212529");
    document.documentElement.style.setProperty("--text-secondary", "#495057");
    document.documentElement.style.setProperty("--card-background", "#e9ecef");
    document.documentElement.style.setProperty(
      "--hover-color",
      "rgba(0, 123, 255, 0.1)"
    );
  } else {
    document.documentElement.style.setProperty("--primary-color", "#64ffda");
    document.documentElement.style.setProperty("--background-color", "#0a192f");
    document.documentElement.style.setProperty("--secondary-bg", "#112240");
    document.documentElement.style.setProperty("--text-color", "#ccd6f6");
    document.documentElement.style.setProperty("--text-secondary", "#8892b0");
    document.documentElement.style.setProperty("--card-background", "#1a2744");
    document.documentElement.style.setProperty("--hover-color", "#64ffda20");
  }
});

// menu responsive

const buttonMenuRes = document.getElementById("checkbox");
const menuRes = document.getElementById("menu-responsive");
const links = document.querySelectorAll("#menu-responsive a");

buttonMenuRes.addEventListener("click", () => {
  menuRes.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("menu-responsive").classList.toggle("active");

    const checkMenu = buttonMenuRes;
    checkMenu.checked = !checkMenu.checked;
  });
});

// iconos en los lados

const iconAside = document.getElementById("social-buttons");
const pixelUmbral = 600;

window.addEventListener("scroll", () => {
  if (window.scrollY > pixelUmbral) {
    iconAside.classList.add("active");
  } else {
    iconAside.classList.remove("active");
  }
});

// text typing
const introductionText = document.getElementById("introduction-text");
text = "Khyxer developer <.../>";

function effectTextTyping(elemento, text, i = 0) {
  elemento.textContent += text[i];

  if ( i ===text.length-1) return

  setTimeout(() => effectTextTyping(introductionText, text, i + 1), 60);
}

effectTextTyping(introductionText, text);
