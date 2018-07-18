var path = window.location.pathname;
var page = path.split("/").pop();

var cartItems, item;

$( document ).ready(function() {
	cartAmount();
	
	if(page == "cart.html") loadCart(); 
	
});
function cartAmount(){
	var cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "null");
	
	if(cartItems != null){
		$("#cart-amount").html(cartItems.length);
	}else{
		$("#cart-amount").html("0");
	}
}
function addItemToCart(n){
	var bookName = $(n).parent().parent().find(".book-box-details .book-box-name").text();
	var bookPrice = $(n).find("span").text();
	var bookQuantity = 1;
	
	cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "null");
	
	if(cartItems == null){
		cartItems = [];
		item = {name:bookName, price: bookPrice, quantity: bookQuantity};
		cartItems.push(item);
	}else{
		for (var i in cartItems) {
		    if (cartItems[i].name == bookName) {
				cartItems[i].quantity += 1;
				bookQuantity++;
				break; //Stop this loop, we found it!
		    }
	    }
		if(bookQuantity == 1){
			item = {name:bookName, price: bookPrice, quantity: bookQuantity};
			cartItems.push(item);
		}
	}
	
	window.sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
	
}
function loadCart(){
	var str = "";
	cartItems = JSON.parse(sessionStorage.getItem("cartItems") || null);
	
	if(cartItems === null){
		str = "No items on the cart";
		$("#cart-container").html(str);
	}else{
		
		cartItems.forEach(function(item){
			var itemName = "<div class='item-name'>"+item.name+"</div>";
			var itemPrice = "<div class='item-price'>"+item.price+"</div>";
			var itemQuantity = "<div class='item-amount'>"+item.quantity+"</div>";
			str += itemName + itemPrice + itemQuantity;
		});
		$("#cart-container").html(str);
	}

}
function removeItem(){
	
}
