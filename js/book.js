$( document ).ready(function() {
	
	$(document).on("click", '.book-cart', function (e) {

			e.preventDefault();
			addItemToCart(this);
			cartAmount();
	});
	
});

function showBook(book){
    
    content = '';
    title = '';
    
	$.getJSON( 'https://raw.githubusercontent.com/msetijo/estore/master/books.json', function( data ) {
	
        var arr = $.grep(data, function( n ) {

            if(n.bookTitle.includes("&apos;")){

                title = n.bookTitle.replace('&apos;', "\'");
                return title == book;

            }else{
                
                return n.bookTitle == book;
            }
        });
        
        content += "<div class='book-heading'><div class='book-name'>"+ arr[0]['bookTitle'] +"</div>";
        content += "<div class='book-author'>"+ arr[0]['bookAuthor'] +"</div></div>";
        content += "<div class='book-photo-container'><div class='book-photo'><img src='images/" + arr[0]['bookPicLarge'] + "'/></div></div>";
        content += "<div class='book-desc'><h3>About this book</h3>"+ arr[0]['bookDesc'] +"</div>";
        content += "<div class='book-link'><button class='book-cart' value='"+ arr[0]['bookTitle']+"'><i class='fa fa-cart-plus'></i><span class='book-price'>"+ arr[0]['bookPrice'] +"</span></button></div>";
		
		$("#content-right").html(content);
		
	});
}