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
// показывать кнопку меню при ширине окна меньше 1000
	$('body').ready(function(){
		if ($('body').width() <= 1150) {
			$('.js-header').removeClass('is-active');
			$('.js-header-nav').slideUp(200);
		}
	});
// открыть навигацию при клике на кнопку меню
	$('.js-btn-menu').on('click', function(event){
		var this_ = $(this),
			parent = this_.parents('.js-header'),
			nav = parent.find('.js-header-nav');
		if (!parent.hasClass('is-active')){
			parent.addClass('is-active');
			nav.slideDown(200);
		}
		else {
			parent.removeClass('is-active');
			nav.slideUp(200);
		}
		event.stopPropagation();
	});

	$h = $('.js-header').offset().top;
	$(window).scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию
		if ( ($(window).scrollTop() > $h) && ($('body').width() <= 1150) ) {
	        	$(".js-header").css({"padding": "10px" , "position":"fixed", "top":0 , "left":0 , "z-index":50 , "background-color": "#fff" , "border-bottom":"solid 1px #61c1f3"});
	        }else{
	            //Иначе возвращаем всё назад. Тут вы вносите свои данные
	        $(".js-header").css({"position":"static", "padding": "0", "border-bottom":"none"});
	        }
	  });
});
