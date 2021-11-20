// 3.Programa para solicitar el nombre, y la nota promedio de 5 estudiantes de un curso de computación.
addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method : "POST",
        body: JSON.stringify({
            numero: 50
        })
    };
    let peticion = await fetch("https://pruebacofenalco.000webhostapp.com/Taller2_19_11_2021/Ejercicio3/api.php", config);
    let datos = await peticion.text();
    console.log(datos);
})