// ===============================
// main.js — GLOBAL APP CONTROLLER
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* ================= SECTION REVEAL ON SCROLL ================= */
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 100);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    reveals.forEach(el => revealObserver.observe(el));
  }

  /* ================= CARD HOVER GLOW TRACKING ================= */
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--mouse-x", "50%");
      card.style.setProperty("--mouse-y", "50%");
    });
  });

  /* ================= NAVIGATION SCROLL EFFECT ================= */
  const nav = document.querySelector(".nav");

  if (nav) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        nav.style.background = "rgba(3, 7, 18, 0.85)";
        nav.style.borderBottomColor = "rgba(212, 175, 55, 0.15)";
      } else {
        nav.style.background = "rgba(3, 7, 18, 0.75)";
        nav.style.borderBottomColor = "rgba(212, 175, 55, 0.1)";
      }
    });
  }

  /* ================= BUTTON RIPPLE EFFECT ================= */
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .cta");

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ================= MOBILE MENU ================= */
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content a');

  function toggleMobileMenu(e) {
    if (e) e.preventDefault();
    if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay) return;
    
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay) return;
    
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileMenuBtn.addEventListener('touchstart', toggleMobileMenu, { passive: false });
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
    mobileMenuOverlay.addEventListener('touchstart', (e) => {
      e.preventDefault();
      closeMobileMenu();
    }, { passive: false });
  }

  if (mobileMenuLinks) {
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  /* ================= FORM ENHANCEMENTS ================= */
  const inputs = document.querySelectorAll(".contact-card input, .contact-card textarea");

  inputs.forEach(input => {
    input.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.01)";
      this.parentElement.style.transition = "transform 0.3s ease";
    });

    input.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)";
    });
  });

});

/* ================= RIPPLE ANIMATION KEYFRAMES ================= */
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);