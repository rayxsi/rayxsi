<?php

$dsn = "mysql:host=localhost;port=3306;dbname=test";

$connection = new PDO($dsn, 'topu', 'topu004');

$stmt = $connection->prepare("INSERT INTO student(id, name, roll, city) VALUES(:id, :name, :roll, :city)");

//$params = [':id'=>14, ':name'=>'Stones', ':roll'=>'200950', ':city'=>'Birmingham'];
//
//try {
//    $stmt->execute($params);
//}catch(PDOException $e) {
//    echo $e->getCode();
//}

//$result = $stmt->fetchColumn(1);
//
//echo $result;

$name = "dhaka";


var_dump(compact('name'));

echo compact('name')["name"];