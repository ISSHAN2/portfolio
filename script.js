document.addEventListener("DOMContentLoaded", function () {
  animateCircle();
  gsap.to(".sticky", {
    scrollTrigger: {
      trigger: ".sticky",
      start: "top top",
      end: () =>
        "+=" +
        (window.innerHeight +
          document.querySelector(".website-content").offsetHeight * 0.5),
      scrub: 1,
      pin: true,
    },
    y: 250,
    scale: 0.75,
    rotation: -15,
    ease: "power3.out",
  });

  gsap.fromTo(
    ".website-content",
    {
      x: -100,
      scale: 0.3,
      rotation: 15,
    },
    {
      scrollTrigger: {
        trigger: ".website-content",
        start: "top 200%",
        end: "top 50%",
        scrub: 1,
      },
      x: 0,
      scale: 1,
      rotation: 0,
      ease: "power3.out",
    }
  );
});
function startLoader() {
  var counterElement = document.querySelector(".counter");
  var currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue + "%";

    var delay = Math.floor(Math.random() * 200) + 250;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

function animateCircle() {
  startLoader();
  gsap.from(".circles", 2, {
    top: "-100%",
    ease: "elastic.out",
    delay: 0.5,
  });

  gsap.to(".circle-inner", 1, {
    width: "75px",
    height: "75px",
    ease: "power4.inOut",
    delay: 2,
  });

  gsap.to(".circle-inner-rotator", 1, {
    scale: 1,
    ease: "power4.inOut",
    delay: 2.5,
  });

  gsap.to(".circles", 1.5, {
    rotation: 360,
    ease: "power4.inOut",
    delay: 3,
  });

  gsap.to(".block", 0.75, {
    display: "block",
    height: "200px",
    ease: "power4.inOut",
    delay: 4,
  });

  gsap.to(".block", 0.75, {
    width: "800px",
    ease: "power4.inOut",
    delay: 4.5,
  });

  gsap.fromTo(
    ".page-container",
    {
      duration: 2,
      left: "100%",
      scale: 0.5,
      ease: "power4.inOut",
      delay: 4,
    },
    {
      duration: 2,
      left: "50%",
      scale: 0.5,
      transform: "translateX(-50%)",
      ease: "power4.inOut",
      delay: 4,
    }
  );

  gsap.to(".block", 1.5, {
    width: "0px",
    ease: "power4.inOut",
    delay: 5,
  });

  gsap.to(".block", 0.75, {
    display: "block",
    height: "0px",
    ease: "power4.inOut",
    delay: 6,
  });

  gsap.to(".circles", 1.5, {
    rotation: 0,
    ease: "power4.inOut",
    delay: 6.5,
  });

  gsap.to(".loader", 2.5, {
    scale: 0,
    ease: "power4.inOut",
    delay: 7,
  });

  gsap.to(".page-container", 2, {
    scale: 1,
    ease: "power4.inOut",
    delay: 7.5,
  });
}
