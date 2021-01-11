<?php
  // GET CONNECTION FROM DB
  $con = mysqli_connect("localhost", "root", "", "demo");

  if (mysqli_connect_errno()) {
    echo "Faild..! ".mysqli_connect_err()."<br>";
  }

  else {
    return $con;
  }
 ?>