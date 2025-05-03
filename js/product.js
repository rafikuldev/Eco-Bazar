$(document).ready(function () {
  $('.bannerSlider').slick({
    arows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    asNavFor: '.minibannerSlider',
  });
  $('.minibannerSlider').slick({
    asNavFor: '.bannerSlider',
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    focusOnSelect: true,
    prevArrow: ` .slick-prev`,
    nextArrow: ` .slick-next`,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          verticalSwiping: false,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $('.featureSlider').slick({
    arows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `.featuredProductsSlider .leftArrow`,
    nextArrow: `.featuredProductsSlider .rightArrow`,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(document).ready(function () {
  // Quantity selector
  $('.increase-btn').click(function () {
    let currentVal = parseInt($('.quantity-input').val());
    $('.quantity-input').val(currentVal + 1);
  });

  $('.decrease-btn').click(function () {
    let currentVal = parseInt($('.quantity-input').val());
    if (currentVal > 1) {
      $('.quantity-input').val(currentVal - 1);
    }
  });
});
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
