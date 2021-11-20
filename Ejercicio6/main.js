// 6.Determina si un carácter de entrada es una letra minúscula, una letra mayúscula o un número. Si estas tres condiciones son false, el carácter no es un carácter alfanumérico. En el ejemplo se muestra un mensaje para cada caso.
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