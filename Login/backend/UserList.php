<?php
   // AVOID CORS POLICY
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

   // INCLUDE CONNECTION FILE
   $con = include("Connection/connection.php");

   // QUERY TO GET DATA 
   $select_user = "SELECT * FROM users";
    
   // EXECUTE QUERY 
   $result = mysqli_query($con, $select_user);

   // CREATE ARRAY FOR HOLD DATA 
   $names = array();

   // PUSH DATA TO ARRAY 
   while($row = mysqli_fetch_array($result)) {
      array_push($names, array('id' => $row['id'], 'name' => $row['name'], 'email' => $row['email']));
   }

   // ENCODE DATA TO JSON FORMAT 
   echo json_encode($names);
 ?>

