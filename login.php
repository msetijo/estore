<?php session_start(); 
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	
	<header>
		<title> Bookit </title>
		<link rel="stylesheet" type="text/css" href="styles/q3.css" />
		<link rel="stylesheet" type="text/css" href="styles/login.css" />
		<link href="https://fonts.googleapis.com/css?family=Raleway:400,700,700i,800,800i,900,900i" rel="stylesheet">
		<script src="js/q3.js" type="text/javascript"> </script>
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

			<?php 
			if( isset($_SESSION['user']) )
				{
					echo "<div id='logged_in'>
					<h3>Success! You're logged in.</h3>
					</div>";
				}
					
			else{
				echo '	
				<div id="error_msg" style="color: red; font-size:120%; font-weight: 600;"></div>
				
				<h3 id="login_heading">Log In</h3>
				<p>Use <b>ms@gmail.com</b> as username and <b>japan</b> as password</p>
				<form method="post" onsubmit="return validate()">
					
					<label class="login_label">Email: </label>
					<input name="email" id="emailaddress" type="text" size="20" maxlength="25" />
						
					<label class="login_label">Password:</label>
					<input name="pass" id="password" type="password" />
							
					<input id="button" name="signIn" type="submit" value="Sign in" />
					
				</form>';


				if( isset($_POST['signIn']) )
				{
					$counter = 0;
					$email = $_POST['email'];
					$pass = $_POST['pass'];
					
					$file=simplexml_load_file("member.xml") or die("Error: Cannot open file");
					
					foreach($file -> children() as $member){
						$femail = (string)$member->email;
						$fpass = (string)$member->password;

						if( preg_match("/$email/", $femail) && preg_match("/$pass/", $fpass) )
						{
							echo "inside";
							$_SESSION['user'] = $femail;
							header('Location: login.php');	
						}
						$counter++;
					}
					
					if($file -> count() == $counter)
						echo "<h3 id='login_err_msg'>Wrong ID and/or password</h3>";
					}
				else{
					
					echo "";
				}
			}
				?>
			
			</div>
			
			<footer> 
				<p>Copyright &copy; 2016 E-Store. All rights reserved. </p>
			</footer>
			
		</div>
		
	</body>
	
</html>