$( document ).ready(function() {
	
	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 2.8,
		slidesToScroll: 1
	  });

    $( "nav li a" ).click(function() {
		$("nav li a.active").removeClass("active");
		$(this).addClass("active");
	});
	$( ".book-cart").click(function(){
		addItemToCart(this);
		cartAmount();
	});
});

