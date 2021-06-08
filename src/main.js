crearCuentaPaciente2("Seltron06", "chau@gmail.com", "1234567");

crearCuentaMedico("123456789", "1234567");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = cuentaPacienteValida();
    if (warnings.length != 0) {
        parrafo.innerHTML = warnings;
    } else {
        crearCuentaPaciente();
        cambiarVisibilidad(registro_form, false); // guarda tambien lo resetea
    }
});

loginPaciente_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = accessoPacienteValido();
    if (warnings.length != 0) {
        parrafoPaciente.innerHTML = warnings;
    } else {
        window.alert("Ingreso exitoso");
        window.location.href = "prototipoSolicitudDeTurno/solicitarturnos2.html"
            // crearCuentaPaciente();
            // cambiarVisibilidad(registro_form, false); // guarda tambien lo resetea
    }
});

loginMedico_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = accessoMedicoValido();
    if (warnings.length != 0) {
        parrafoMedico.innerHTML = warnings;
    } else {
        window.alert("Ingreso exitoso");
        window.location.href = "prototipoSolicitudDeTurno/solicitarturnos2.html"
    }
});

loginPacienteBtn.addEventListener("click", (e) => {
    cambiarVisibilidad(loginPaciente_form, true);
    cambiarVisibilidad(registro_form, false);
    cambiarVisibilidad(loginMedico_form, false);
});

loginMedicoBtn.addEventListener("click", (e) => {
    cambiarVisibilidad(loginMedico_form, true);
    cambiarVisibilidad(registro_form, false);
    cambiarVisibilidad(loginPaciente_form, false);
});

registroBtn.addEventListener("click", (e) => {
    cambiarVisibilidad(registro_form, true);
    cambiarVisibilidad(loginMedico_form, false);
    cambiarVisibilidad(loginPaciente_form, false);
});

restablecerContraseniaBtn.addEventListener("click", (e) => {
    cambiarVisibilidadDOM(mensajeMail, true);
});
mailOk.addEventListener("click", (e) => {
    cambiarVisibilidadDOM(mensajeMail, false);
});