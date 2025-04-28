$(document).ready(function () {
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
