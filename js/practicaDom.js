/*
 Dada la informacion sobre un usuario de agua:
 -Nombre
 -Estrato(1,2,3,4,5)
 -consumo del mes (cm3)
 se pide calcular el valor a pagar por servicio de agua, conociendo qe el servicio es la suma de la tarifa basica mas 
 valor del consumo.
 La tarifa basica depende del estrato, asi:
 Estrato        Tarifa Basica
    1               $10000
    2               $15000
    3               $30000
    4               $60000
    5               $89000
El valor del consumo es la multiplicacion entre el consumo del mes por $100 (valor de 1 cm3)

*/

function calcularServicio(){
    var nombre=document.getElementById("nombre").value
    var estrato=parseInt(document.getElementById("estrato").value)
    var consumo=parseInt(document.getElementById("consumo").value)
    var tarifa=0, valorConsumo=0, valorServicio=0
    switch(estrato){
        case 1: tarifa=10000; break
        case 2: tarifa=15000; break
        case 3: tarifa=30000; break
        case 4: tarifa=60000; break
        case 5: tarifa=80000; break
    }
    valorConsumo=consumo*100
    valorServicio=tarifa+valorConsumo
    alert("El usuario "+nombre+" paga por el servicio de agua "+valorServicio)
}