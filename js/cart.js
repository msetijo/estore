var path = window.location.pathname;
var page = path.split("/").pop();
var sum = 0;

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
			
			var totalPrice = parseFloat(item.price.substr(1)) * item.quantity;
			sum += totalPrice;
			
			var itemTotalPrice = "<div class='item-total-price'>$"+totalPrice+"</div>";
			
			str += "<div class='item-box'>"+ itemName + itemPrice + itemQuantity + itemTotalPrice +"</div>";
		});
		var label = "<div class='label-box'><div id='name-label'>Item Name</div><div id='price-label'>Price</div><div id='amount-label'>Quantity</div><div id='total-label'>Total Price</div></div>";
		var sumStr = "<div id='cartSum'><div>Total: </div><span>$"+sum.toFixed(2)+"</span></div>";
		$("#cart-container").html(label + str + sumStr);
		
	}
	
}

function removeItem(){
	
}
