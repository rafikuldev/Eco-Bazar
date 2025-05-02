OmRangeSlider.init({
  min: 50,
  max: 1500,
  unit: ' Pcs.',
});



// cursor animation
var main = document.querySelector('body');
var cursor = document.querySelector('.cursor');

main.addEventListener('mousemove', function (dets) {
  gsap.to(cursor, {
    x: dets.clientX - 0, // Subtract half of cursor width (40px/2)
    y: dets.clientY - 0, // Subtract half of cursor height (40px/2)
    duration: 1,
    ease: 'back.out',
  });
});

// Example hover effect
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to('.cursor', { scale: 1.5 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to('.cursor', { scale: 1 });
  });
});
