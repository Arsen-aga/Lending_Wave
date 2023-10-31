$(function () {

  var mixer = mixitup('.gallery__content');

  Fancybox.bind("[data-fancybox]", {});

  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  })

  $('.menu__btn, .menu__list a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__top').toggleClass('header__top--active');
  });

  $(".menu a, .logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

});