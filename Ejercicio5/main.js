// 5.El profesor de una materia desea conocer la cantidad de sus alumnos que no tienen derecho al examen de nivelación. Diseñe el algoritmo que lea las calificaciones obtenidas en las 5 unidades por cada uno de los 40 alumnos y escriba la cantidad de ellos que no tienen derecho al examen de nivelación.
addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method : "POST",
        body: JSON.stringify({
            numero: 50
        })
    };
    let peticion = await fetch("https://pruebacofenalco.000webhostapp.com/Taller2_19_11_2021/Ejercicio5/api.php", config);
    let datos = await peticion.text();
    console.log(datos);
})