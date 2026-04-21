window.addEventListener("load", () => {
  requestIdleCallback(() => {
    const cards = document.querySelectorAll(".video-card");

    cards.forEach(card => {
      const video = card.querySelector("video");
      const playBtn = card.querySelector(".play-btn");
      const muteBtn = card.querySelector(".mute-btn");

      // Play / Pause
      playBtn.addEventListener("click", () => {
        if (video.paused) video.play();
        else video.pause();
      });

      // Mute / Unmute
      muteBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        muteBtn.style.opacity = video.muted ? "0.6" : "1";
      });

      // Hover autoplay
      card.addEventListener("mouseenter", () => video.play());
      card.addEventListener("mouseleave", () => video.pause());
    });
  });
});


//Hero Section
/* TYPING EFFECT */
const text = "Make Content That Performs!";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70); // typing speed
  }
}
window.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

/* NAVBAR SCROLL EFFECT */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* SCROLL ANIMATION FOR TITLE ONLY */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
});

const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;

      if (!video.dataset.loaded) {
        video.load(); // loads only when visible
        video.dataset.loaded = "true";
      }
    }
  });
}, {
  threshold: 0.25
});

videos.forEach(video => observer.observe(video));