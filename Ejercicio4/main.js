// 4.El programa muestra primero una tabla de notas con sus equivalentes en el Standard Grading System o el sistema utilizado en los Estados Unidos que va desde la A hasta la F. El programa preguntará al usuario su nota y transformará ese resultado al equivalente en el Standard Grading System. También el programa dará una pequeña pero valiosa recomendación al usuario respecto a su nivel de estudio y calidad como estudiante. 
addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method : "POST",
        body: JSON.stringify({
            numero: 50
        })
    };
    let peticion = await fetch("https://pruebacofenalco.000webhostapp.com/Taller2_19_11_2021/Ejercicio4/api.php", config);
    let datos = await peticion.text();
    console.log(datos);
})