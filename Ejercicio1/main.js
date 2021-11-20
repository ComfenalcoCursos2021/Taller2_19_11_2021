// 1.Programa que lea un valor de precio base y calcule su impuesto, si es valor es mayor de 150.000 se le aplicará un 19% de impuestos, en caso contrario se le aplicará un 16%.
addEventListener("DOMContentLoaded", ()=>{
    let myForm = document.querySelector("#myForm");
    myForm.addEventListener("submit", (e)=>{
        let myInput = Array.from(myForm);
        myInput.pop();
        let config = {
            method : myForm.method,
            body: {}
        };
        myInput.forEach(datos =>{
            config.body[datos.id] = datos.value;
        })
        config.body = JSON.stringify(config.body);
        let enviar = async()=>{
            let peticion = await fetch("api.php", config);
            let datos = await peticion.text();
            console.log(datos);
        }
        enviar();
        e.preventDefault();
    })
})