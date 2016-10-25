<?php
	
	session_start (); // start the session, making sure php links us to the right session data
	
	$_SESSION = array (); // empty the array, effectively deleting the values
	
	session_destroy (); // destroy session data
	
	header('Location: index.php');

?>