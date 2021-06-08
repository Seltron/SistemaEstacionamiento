// forms para registrse o loguearse
const registro_form = document.getElementById("form");
const loginPaciente_form = document.getElementById("loginPacienteForm");
const loginMedico_form = document.getElementById("loginMedicoForm");

// campos del registro
const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const usuario = document.getElementById("usuario");
const fechaNacimiento = document.getElementById("fechaNac");
const dni = document.getElementById("dni");
const prestador = document.getElementById("prestadorCobertura");
const tipoCobertura = document.getElementById("tipoCobertura");
const medioDePago = document.getElementById("medioDePago");
const nroCuenta = document.getElementById("nroCuenta");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

// campos del login de pacientes
const usuarioPacienteLogin = document.getElementById("usuarioPaciente");
const passPacienteLogin = document.getElementById("passwordPaciente");
const parrafoPaciente = document.getElementById("warningsPaciente");

// campos del login de medicos
const legajoMedico = document.getElementById("legajoMedico");
const passMedico = document.getElementById("passwordMedico");
const parrafoMedico = document.getElementById("warningsMedico");

// Botones para registrarse o loguearse
const registroBtn = document.getElementById("registroBtn");
const loginMedicoBtn = document.getElementById("loginMedicoBtn");
const loginPacienteBtn = document.getElementById("loginPacienteBtn");
const restablecerContraseniaBtn = document.getElementById("restablecerPassBtn");

const mensajeMail = document.getElementById("mensajeMail");
const mailOk = document.getElementById("mailOk");
