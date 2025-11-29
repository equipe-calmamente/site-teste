gsap.from(".menu", {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.1
});

gsap.from(".container", {
  scrollTrigger: ".container",
  opacity: 0,
  y: 50,
  duration: 1,
  delay:0.9
});



gsap.from(".texto", {
  scrollTrigger: ".texto",
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 0.8,
  delay:2
});

gsap.from(".container .container-images-banner3", {
  scrollTrigger: ".banner_3",
  duration: 0.9,
  scale: 0.9,
  y: 20,
  opacity: 0,
  stagger: 0.12,
  ease: "back.out(1.2)",
  delay:3
});

gsap.from(".imagem", {
  scrollTrigger: ".imagem",
  clipPath: "inset(0 0 100% 0)",
  duration: 1.3,
  delay:2
});



