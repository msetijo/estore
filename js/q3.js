
$( document ).ready(function() {

	$(".regular").slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 2.8,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 820,
			settings: {
				slidesToShow: 1.7
			}
		}, {
			breakpoint: 565,
			settings: {
				slidesToShow: 1,
				arrows: false,
				infinite: true
			}
		}]
	});

    $( "nav li a" ).click(function(e) {
		e.preventDefault();
		$("nav li a.active").removeClass("active");
		$(this).addClass("active");
	});
	$( ".book-cart").click(function(e){
		e.preventDefault();
		addItemToCart(this);
		cartAmount();
	});
});

