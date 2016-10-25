<?php session_start(); ?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	
	<header>
		<title> Bookit </title>
		<link rel="stylesheet" type="text/css" href="styles/q3.css" />
		<link rel="stylesheet" type="text/css" href="styles/cart.css" />
		<link href="https://fonts.googleapis.com/css?family=Raleway:400,700,700i,800,800i,900,900i" rel="stylesheet">
		<script src="js/q3.js" type="text/javascript"> </script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<meta http-equiv="Content-type" content="application/xhtml+xml;charset=UTF-8"/>
	</header>

	<body>
				
		<div id="container">
		
			<h1 id="banner">BOOKIT</h1> 
			<nav id="menu">
				<ul>
					<li> <a href="/"> Home </a></li>
					<li> <a href="#">Products </a></li>
					<li> <a href="#">Register</a></li>
					<?php 
					if( isset($_SESSION["user"]) ) {
						echo "<li><a href=\"cart.php\">Cart</a></li>";
					}
					else{
						echo "";
					} ?>
					<li> <?php 
					if( !isset($_SESSION["user"]) ) {
						echo "<a href=\"login.php\">Log IN</a>";
					}
					else{
						echo "<a href=\"logout.php\">Log OUT</a>";
					} ?>
					</li>
				</ul>
			</nav>
			
			
			<div class="content"> 
			
			<script>
			$(document).ready(function(){
			    $('.remove_btn').click(function(){
			        var bookID = $(this).attr("name");
			        console.log(bookID);
			        var ajaxurl = 'cart.php',
			        data =  {'action': bookID};
			        $.post(ajaxurl, data, function (response) {
			            // Response div goes here.
			            console.log("action performed successfully");
			        });
			    });
			
			});
			</script>
			
			<?php
				$file=simplexml_load_file("book.xml") or die("Error: Cannot open file");
				
				$counter = $total_price = $product_price = 0;
				echo "<h3 class='medium_heading'>My Cart</h3>";
				echo "<div id='cart_wrapper'>";
				foreach ($file->children() as $book){
					
					if($book->amount > 0){
						if($counter == 0){
							echo "<div id='cart_labels'>
									<div class='item_name'><h3>Item's Name</h3></div>
									<div class='item_quantity'><h3>Amount</h3></div>
									<div class='item_price'><h3>Price</h3></div>
								</div><div class='clear'></div>";
						}
						$product = 16.55 * 2;
						$counter++;
						
						$price = $book->price;
						$amount = $book->amount;
						$product_price = number_format((float)$price,2) * $amount;
						
						echo "
							<div class='item'>
								<div class='item_name'>$book->title</div>
								<div id='$book->id' class='item_quantity'>$amount</div>
								<div class='item_price'>$$product_price</div>
								<input class='remove_btn' name='$book->id' type='submit' value='remove' >
							</div>";
					}
					$total_price += $product_price;
					$product_price = 0;
				}
				if($total_price > 0){
					echo "<div id='total_price'>Total price: $$total_price</div>";
				}
				echo "<p style='margin-left: 3%;'><b>Please refresh page after every remove/add</b></p>";
				echo "</div>";
				
				if(isset($_POST["action"]) )
				{
					$file=simplexml_load_file("book.xml") or die("Error: Cannot open file");
					
					$book_id = $_POST["action"];
					foreach ($file->children() as $book){
						if($book->id == $book_id){
							$book->amount = 0;
						}
					}
					$file->asXML('book.xml');
					header("location:cart.php");
				}
				?>
				
				
				<?php
				/*
				echo "<p><a href=\"q3.php\"> Continue shopping </a></p>";
				
				echo "<p><a href=\"receipt.php\"> Check out </a></p>";
					
				*/
				?>
				
			</div>
			
			<div class="clear"></div>

			<footer> 
				<p>Copyright &copy; 2016 E-Store. All rights reserved. </p>
			</footer>
			
		</div>

	</body>
</html>