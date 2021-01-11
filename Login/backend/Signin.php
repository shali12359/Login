<?php
  // AVOID CORS POLICY
  header('Access-Control-Allow-Origin: *');
    
  // INCLUDE CONNECTION FILE
  $con = include("Connection/connection.php");

  $name = $_POST['name'];
  $email = $_POST['email'];

  // QUERY TO GET DATA 
  $select_user = "SELECT * FROM users WHERE email='$email' AND name='$name'";

  // EXECUTE QUERY 
  $sql = mysqli_query($con, $select_user);
  $check = mysqli_num_rows($sql);

  // CHECK QUERY RESULT 
  if ($check == 1) {
    echo "Signin Success";
  }

  else {
    echo "Signin Error";
  }
 ?>