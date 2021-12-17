<?php

$a = $_POST['num1'];
$b = $_POST['num2'];

$result = $a + $b;

$jsonEncode  = json_encode("O resultado final é " .$result);

echo($jsonEncode); 

?>