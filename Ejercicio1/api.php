<?php
    $Ejercicio = (array) [
        "Enunciado" => (string) "1.Programa que lea un valor de precio base y calcule su impuesto, si es valor es mayor de 150.000 se le aplicará un 19% de impuestos, en caso contrario se le aplicará un 16%.",
        "Servidor" => "".$_SERVER["HTTP_HOST"]
    ];
    header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");
    $_DATA = file_get_contents("php://input");
    print_r(json_encode($Ejercicio,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    if($_DATA){
        $_DATA = json_decode($_DATA, true);
        extract($_DATA);
    }else{
        $numero = (integer) 1;
    }
    print_r($numero);
?>