
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

    $( "nav li a" ).on("click", function (e) {

		e.preventDefault();
		$("nav li a.active").removeClass("active");
		$(this).addClass("active");
		var bookGenre = $(e.target).text();
		showBooks(bookGenre);
	});
	
	$(document).on("click", '.book-cart', function (e) {

		e.preventDefault();
		addItemToCart(this);
		cartAmount();
	});
	
});

function showBooks(filter){
	
	books = "";
	arr = [];
	filterLowercase = filter.toLowerCase();

	$.getJSON( 'https://raw.githubusercontent.com/msetijo/estore/master/books.json', function( data ) {
	
		if(filter !== 'All Genres'){
			arr = $.grep(data, function( n ) {
				return n.bookGenre === filterLowercase;
			});
		}else{
			arr = data;
		}

		$.each( arr, function( index, book ) {
			books += "<div class='book-box'><div class='book-box-photo'><img src='images/" + book['bookPic'] + "'/></div>";
			books += "<div class='book-box-details'><div class='book-box-name'><a href='/book.html?book="+book['bookTitle']+"'>"+ book['bookTitle'] +"</a></div>";
			books += "<div class='book-box-author'>"+ book['bookAuthor'] +"</div>";
			books += "<div class='book-box-desc'>"+ book['bookDesc'] +"</div></div>";
			books += "<div class='book-box-link'><button class='book-cart' value='"+ book['bookTitle']+"'><i class='fa fa-cart-plus'></i><span class='book-box-price'>"+ book['bookPrice'] +"</span></button></div>";
			books += "</div>";
		});
		
		$("#content-right").html(books);
		$("#category-label").text(filter);
	});
}