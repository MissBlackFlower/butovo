$(document).ready(function() {
	// заполняем лейблы номерами квартир для выбранного этажа
	$('.storey__section input').on('change', function(){
		var floor = $(this).attr('value')
		for (var n = 0; n <= 9; n++) {
				    if (floor == 1) {
				        document.getElementById('label'+(n+1)).innerText = ('№'+(n+1));
				    }  else {
				          document.getElementById('label'+(n+1)).innerText = ('№'+(floor-1)+n);
								}
				}
	});
	$('.apartments__conteiner').slick({
  dots: false,
  infinite: true,
	// autoplay: true,
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
    },
  ]
	});

	$('#main-menu').slicknav({
		prependTo:'#mobileMenu',
		closeOnClick: true
	});

});
