<?php
    $Ejercicio = (array) [
        "Enunciado" => (string) "2.Calcular el sueldo que le corresponde al trabajador de una empresa que cobra $14.400.000 anual, el programa debe realizar los cálculos en función de los siguientes criterios:
        •	Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
        •	Si lleva menos de 10 años, pero más que 5 se le aplica un aumento del 7%.
        •	Si lleva menos de 5 años, pero más que 3 se le aplica un aumento del 5%.
        •	Si lleva menos de 3 años se le aplica un aumento del 3%.",
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