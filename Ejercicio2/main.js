// 2.Calcular el sueldo que le corresponde al trabajador de una empresa que cobra $14.400.000 anual, el programa debe realizar los cálculos en función de los siguientes criterios:
// •	Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// •	Si lleva menos de 10 años, pero más que 5 se le aplica un aumento del 7%.
// •	Si lleva menos de 5 años, pero más que 3 se le aplica un aumento del 5%.
// •	Si lleva menos de 3 años se le aplica un aumento del 3%.

addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method : "POST",
        body: JSON.stringify({
            numero: 50
        })
    };
    let peticion = await fetch("https://pruebacofenalco.000webhostapp.com/Taller2_19_11_2021/Ejercicio2/api.php", config);
    let datos = await peticion.text();
    console.log(datos);
})