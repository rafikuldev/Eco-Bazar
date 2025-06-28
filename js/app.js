$(document).ready(function () {
  $('.bannerSlider').slick({
    arows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `#banner .leftArrow`,
    nextArrow: `#banner .rightArrow`,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  });
  // banner End

  $('.timer').countdown($(`.timer`).attr(`data-countdown`), function (event) {
    // $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    $(`.timer .days`).html(event.strftime('%D'));
    $(`.timer .hrs`).html(event.strftime('%H'));
    $(`.timer .min`).html(event.strftime('%M'));
    $(`.timer .sec`).html(event.strftime('%S'));
  });
  // countdown End
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
  $('.testimonialSlider').slick({
    arows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: `.testimonial .leftArrow`,
    nextArrow: `.testimonial .rightArrow`,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  new VenoBox({
    selector: '.my-video-links',
  });
});

// var main = document.querySelector('.videoContent');
// var cursor = document.querySelector('#cursor');

// main.addEventListener('mousemove',function(dets) {
//   gsap.to(cursor, {
//     x:dets.X,
//     y:dets.Y
//   });
// });

// var main = document.querySelector('.videoContent');
// var cursor = document.querySelector('.cursor');

// main.addEventListener('mousemove', function (dets) {
//   gsap.to(cursor, {
//     x:dets.X,
//     y:dets.Y
//   });
// });

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
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

