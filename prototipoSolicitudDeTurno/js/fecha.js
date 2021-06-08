var fechaElegida;
var horaElegida;
var horariosDisponibles;
var arregloTest;
var especialidadElegida;

$(function() {
    // An array of dates
    var eventDates = [];
    eventDates[new Date("06/08/2021")] = new Date("06/08/2021");
    eventDates[new Date("06/12/2021")] = new Date("06/12/2021");
    eventDates[new Date("06/18/2021")] = new Date("06/18/2021");
    eventDates[new Date("06/23/2021")] = new Date("06/23/2021");

    var fecha1 = new Date("06/08/2021");
    var fecha2 = new Date("06/12/2021");
    var fecha3 = new Date("06/18/2021");
    var fecha4 = new Date("06/23/2021");

    arregloTest = [fecha1, fecha2, fecha3, fecha4];

    var horario0 = "09:00";
    var horario1 = "10:00";
    var horario2 = "15:00";
    var horario3 = "14:00";

    horariosDisponibles = [horario0, horario1, horario2, horario3];

    $.datepicker.setDefaults($.datepicker.regional["es"]);
    // datepicker
    $("#datepicker").datepicker({
        onSelect: function(date) {
            parrafoCalendario.innerHTML = " ";
            parrafoSubmit.innerHTML = "";
            var encontrado = false;
            const fecha = new Date(date);
            for (let i = 0; i < arregloTest.length; i++) {
                if (arregloTest[i].getTime() == fecha.getTime()) {
                    parrafoCalendario.innerHTML =
                        "Horarios disponibles : <br> " + horariosDisponibles[i];
                    var encontrado = true;
                    fechaElegida = arregloTest[i].getTime();
                }
            }
            if (encontrado == false) {
                parrafoCalendario.innerHTML = "No hay horarios disponibles";
                fechaElegida = "";
            }
        },
        beforeShowDay: function(date) {
            var highlight = eventDates[date];
            if (highlight) {
                return [true, "event", "Tooltip text"];
            } else {
                return [true, "", ""];
            }
        },
    });
});
especialidad.addEventListener(
    "click",
    function() {
        especialidadElegida = especialidad.value
    },
    false
)
hora.addEventListener(
    "click",
    function() {
        //valueSpan.innerText = hora.value;
        //console.log(hora.value)
        horaElegida = hora.value;
    },
    false
);

const boton = document.querySelector("#botonConfirmar");

boton.addEventListener("click", function(evento) {
    evento.preventDefault();


    parrafoSubmit.innerHTML = " ";

    let turnoExitoso = false;
    for (let i = 0; i < arregloTest.length; i++) {
        for (let j = 0; j < horariosDisponibles.length; j++) {
            if (arregloTest[i].getTime() == fechaElegida) {
                if (horariosDisponibles[j] == horaElegida && i == j) {
                    turnoExitoso = true;
                }
            }
        }
    }
    if (fechaElegida == undefined || horaElegida == undefined || especialidadElegida == "value1" || especialidadElegida == undefined) {
        console.log(fechaElegida + "1")
        console.log(horaElegida + "2")
        console.log(especialidadElegida + " 3")
        parrafoSubmit.innerHTML = "Completar todos los campos"
    } else {
        if (turnoExitoso) {

            parrafoSubmit.innerHTML = "Turno solicitado exitosamente";

        } else {
            parrafoSubmit.innerHTML = "Horario no disponible";
        }
    }

});