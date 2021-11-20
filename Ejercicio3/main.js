// 3.Programa para solicitar el nombre, y la nota promedio de 5 estudiantes de un curso de computación.
addEventListener("DOMContentLoaded", async()=>{
    let config = {
        method : "POST",
        body: JSON.stringify({
            numero: 50
        })
    };
    let peticion = await fetch("api.php", config);
    let datos = await peticion.text();
    console.log(datos);
})