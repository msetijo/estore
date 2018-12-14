
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

function showBooks(){
	
	var books = "";
	
	$.getJSON( 'https://raw.githubusercontent.com/msetijo/estore/master/books.json', function( data ) {
		
		$.each( data, function( index, book ) {
			books += "<div class='book-box'><div class='book-box-photo'><img src='images/" + book['bookPic'] + "'/></div>";
			books += "<div class='book-box-details'><div class='book-box-name'>"+ book['bookTitle'] +"</div>";
			books += "<div class='book-box-author'>"+ book['bookAuthor'] +"</div>";
			books += "<div class='book-box-desc'>"+ book['bookDesc'] +"</div></div>";
			books += "<div class='book-box-link'><a class='book-cart' href='javascript:void(0)'><i class='fa fa-cart-plus'></i><span class='book-box-price'>"+ book['bookPrice'] +"</span></a></div>";
			books += "</div>";
		});
		
		$("#content-right").append(books);
	});
}