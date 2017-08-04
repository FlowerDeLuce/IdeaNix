$(document).ready(function() {  
   $('.projects__slider__js').slick({
	nextArrow: '.projects__slider-next',
	prevArrow: '.projects__slider-prev',
   dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
       
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
	});
	
    
$('#header__lang').on('click', function (e) {
        e.preventDefault();
        $('#lang_dropdown-list').slideToggle();
    });    
    
$(".lang_dropdown-link").on('click', function (e) {
        e.preventDefault();
        var currentLanguage = $(this).text();
        $('#header__lang').text(currentLanguage);
        $('#lang_dropdown-list').slideToggle();
    }); 
    
$("#main-menu-icon").on('click', function () {
        
        $('#main-menu').toggleClass("open");
    }); 
    
});

