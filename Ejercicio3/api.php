<?php
    $Ejercicio = (array) [
        "Enunciado" => (string) "3.	Programa para solicitar el nombre, y la nota promedio de 5 estudiantes de un curso de computación.",
        "Servidor" => "".$_SERVER["HTTP_HOST"]
    ];
    header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");
    $_DATA = file_get_contents("php://input");
    print_r(json_encode($Ejercicio,JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG ));
    if($_DATA){
        $_DATA = json_decode($_DATA, true);
        extract($_DATA);
    }else{
        $numero = (integer) 1;
    }
    print_r($numero);
?>