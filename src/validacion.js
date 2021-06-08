const cuentaPacienteValida = () => {
    let warnings = "";
    let validacionMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    parrafo.innerHTML = "";
    if (nombre.value.length <= 2) {
        warnings += "El nombre no es valido <br>";
    }
    if (apellido.value.length <= 2) {
        warnings += "El apellido no es valido <br>";
    }
    if (usuario.value.length < 8) {
        warnings += "El usuario no es valido <br>";
    }
    if (existeUsuario(usuario.value)) {
        warnings += "El usuario ya esta ocupado <br>";
    }
    if (fechaNacimiento.value == "") {
        warnings += "Debe ingresar fecha de nacimiento <br>";
    }
    if (/^\d+$/.test(dni.value) && dni.value.length != 8) {
        warnings += "Debe ingresar D.N.I. de 7 dígitos <br>";
    }
    if (!validacionMail.test(email.value)) {
        warnings += "El correo electronico no es valido <br>";
    }
    if (pass.value.length < 8) {
        warnings += "La contraseña no es valida <br>";
    }
    return warnings;
};

const accessoPacienteValido = () => {
    let warnings = "";
    parrafoPaciente.innerHTML = "";
    esUsuarioValido = false;
    esContraseniaValida = false;
    tieneMuchosIntentos = false;
    for (let i = 0; i < cuentasPacientes.length; i++) {
        cuenta = cuentasPacientes[i];
        if (
            cuenta.usuario.localeCompare(
                usuarioPacienteLogin.value.toLowerCase()
            ) == 0
        ) {
            esUsuarioValido = true;
            if (cuenta.password.localeCompare(passPacienteLogin.value) == 0) {
                esContraseniaValida = true;
            } else {
                cuenta.intentos += 1;
            }
            if (cuenta.intentos > 5) {
                tieneMuchosIntentos = true;
            }
        }
        if (!esUsuarioValido) {
            warnings = "El usuario es invalido";
        }
        if (!esContraseniaValida) {
            warnings = "La contraseña es invalida";
        }
        if (!esUsuarioValido && !esContraseniaValida) {
            warnings = "El usuario y la contraseña son invalidos";
        }
        if (tieneMuchosIntentos) {
            warnings = "Cuenta bloqueada";
        }
        return warnings;
    }
};

const accessoMedicoValido = () => {
    let warnings = "";
    parrafoMedico.innerHTML = "";
    esValida = false;
    esUsuarioValido = false;
    esContraseniaValida = false;
    tieneMuchosIntentos = false;
    for (let i = 0; i < cuentasMedicos.length; i++) {
        cuenta = cuentasMedicos[i];
        if (
            cuenta.legajo.localeCompare(legajoMedico.value.toLowerCase()) == 0
        ) {
            esUsuarioValido = true;
            if (cuenta.password.localeCompare(passMedico.value) == 0) {
                esContraseniaValida = true;
            } else {
                cuenta.intentos += 1;
            }
            if (cuenta.intentos > 5) {
                tieneMuchosIntentos = true;
            }
        }

        if (!esUsuarioValido) {
            warnings = "El usuario es invalido";
        }
        if (!esContraseniaValida) {
            warnings = "La contraseña es invalida";
        }
        if (!esUsuarioValido && !esContraseniaValida) {
            warnings = "El usuario y la contraseña son invalidos";
        }
        if (tieneMuchosIntentos) {
            warnings = "Cuenta bloqueada";
        }
        return warnings;
    }
};
