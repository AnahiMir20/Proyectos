var flujos = {}
var flujoMesAnterior = 0


function flujoAgregar() {
    if ($.isEmptyObject(flujos)) {
        var flujoMes = document.getElementById("flujoMes").selectedIndex + 1
        flujoMesAnterior = flujoMes
    } else {
        if (flujoMesAnterior == 12) {
            flujoMes = 1
            flujoMesAnterior = 1
        } else {
            flujoMes = flujoMesAnterior + 1
            flujoMesAnterior += 1
        }
    }
    var flujoIngreso = document.getElementById('flujoIngreso').value;

    nuevoFlujo = { mes: flujoMes, ingreso: Number(flujoIngreso) }
    console.log(nuevoFlujo)
    flujos[flujoMes] = nuevoFlujo
    console.log(flujos);


    $('#popup-flujo').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');

}

function flujoEliminar() {
    if ($.isEmptyObject(flujos)) {
        alert('No hay nada para eliminar')
    } else {
        ultimoFlujo = 0
       for(element  in flujos) {
           
           ultimoFlujo = element
       }
       console.log(ultimoFlujo)
       delete flujos[ultimoFlujo];
       flujoMesAnterior = ultimoFlujo - 1;
    }
}
