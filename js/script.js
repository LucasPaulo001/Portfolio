window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Header desaparece ao rolar pra baixo
  gsap.to("header", {
    scrollTrigger: {
      trigger: "header",
      start: "top top",
      end: "+=100",
      scrub: true,
    },
    opacity: 0,
    y: -50,
    ease: "none"
  });

  gsap.to("#about", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center", 
    end: "bottom top",  
    scrub: true,
  },
  opacity: 0,
  x: -50,
  ease: "none"
});


  // Cards desaparecem ao sair e reaparecem ao voltar
  gsap.utils.toArray(".card").forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 40%",
          scrub: true
        }
      }
    );

    gsap.fromTo(
      card,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top 90%",
          scrub: true
        }
      }
    );
  });
});
