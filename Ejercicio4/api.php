<?php
    $Ejercicio = (array) [
        "Enunciado" => (string) "4.	El programa muestra primero una tabla de notas con sus equivalentes en el Standard Grading System o el sistema utilizado en los Estados Unidos que va desde la A hasta la F. El programa preguntará al usuario su nota y transformará ese resultado al equivalente en el Standard Grading System. También el programa dará una pequeña pero valiosa recomendación al usuario respecto a su nivel de estudio y calidad como estudiante.",
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