// 1.Programa que lea un valor de precio base y calcule su impuesto, si es valor es mayor de 150.000 se le aplicará un 19% de impuestos, en caso contrario se le aplicará un 16%.
addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method : "POST",
        body: JSON.stringify({
            numero: 50
        })
    };
    let peticion = await fetch("https://pruebacofenalco.000webhostapp.com/Taller2_19_11_2021/Ejercicio6/api.php", config);
    let datos = await peticion.text();
    console.log(datos);
})