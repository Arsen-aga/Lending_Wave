$(function () {

  var mixer = mixitup('.gallery__content');

  Fancybox.bind("[data-fancybox]", {});

  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  })

});