$(document).ready(function() {
	$('.apartments__conteiner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
	prevArrow: '.slick-left',
  nextArrow: '.slick-right',
	responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
	});
});
