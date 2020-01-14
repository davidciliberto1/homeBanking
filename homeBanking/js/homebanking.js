
//Declaración de letiables
let nombreUsuario = "Deivid";
let saldoCuenta = 20000;
let limiteExtraccion = 20000;

let insuficiente = "Saldo Insuficiente.";
let servicios = {
    Agua: 350,
    Telefono: 425,
    Luz: 210,
    Internet: 570
}
let Lali = 123456789;
let Alex = 987654321;



//Ejecución de las funciones que actualizan los valores de las letiables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function sumarDinero(monto) {
    saldoCuenta = saldoCuenta + monto;
}

function restarDinero(monto) {
    saldoCuenta = saldoCuenta - monto;
}

function numeroTransferencia() {
    let numeroCuenta = prompt(`Ingrese numero de cuenta al que desea transferir.`)
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    let nuevoLimiteExtraccion = parseInt(prompt(`Ingrese nuevo limite de extraccion`));
    limiteExtraccion = nuevoLimiteExtraccion;
    actualizarLimiteEnPantalla();
    console.log(limiteExtraccion);
    console.log(nuevoLimiteExtraccion);
}

function extraerDinero() {
    let montoIngresado = parseInt(prompt("Cantidad de dinero que desea extraer"));
    if (montoIngresado % 100 !== 0) {
        return alert("Solo puedes extraer billetes de 100");
    }
    else if (montoIngresado > saldoCuenta) {
        return alert("La cantidad que desea extraer no esta disponible " + "\n" + insuficiente);
    }
    else if (montoIngresado > limiteExtraccion) {
        return alert("La cantidad que desea extraer supera su limite diario");
    }
    else {
        restarDinero(montoIngresado);
        actualizarSaldoEnPantalla();
        let saldoAnterior = saldoCuenta + montoIngresado;
        let alertaExtraccion = alert("Has extraido: $" + montoIngresado + "\n Saldo anterior: $" + saldoAnterior + "\n Saldo actual: $" + saldoCuenta);
    }
}

function depositarDinero() {
    let montoIngresado = parseInt(prompt("Cantidad de dinero que desea depositar"));
    sumarDinero(montoIngresado);
    actualizarSaldoEnPantalla();
    let saldoAnterior = saldoCuenta - montoIngresado;
    let alertaDeposito = alert("Has depositado: $" + montoIngresado + "\n Saldo anterior: $" + saldoAnterior + "\n Saldo actual: $" + saldoCuenta);
}

function mensajeServicios(servicio, nombreServicio) {
    let saldoAnterior = saldoCuenta + servicio;

    alert(`Has pagado el servicio de ${nombreServicio}
    Dinero descontado: $${servicio}
    Saldo anterior: $${saldoAnterior}  
    Saldo actual: $${saldoCuenta}`)
}


function pagarServicio() {
    let servicio = prompt("Ingrese el numero que corresponda con el servicio que desea pagar:" + "\n 1-Agua: $" + servicios.Agua + "\n 2-Telefono: $" + servicios.Telefono + "\n 3-Luz: $" + servicios.Luz + "\n 4-Internet: $" + servicios.Internet);
    numeroServicio = parseInt(servicio)

    switch (numeroServicio) {

        case 1:
            if (servicios.Agua < saldoCuenta) {
                restarDinero(servicios.Agua);
                mensajeServicios(servicios.Agua, 'Agua')
            }
            else { alert(insuficiente) };
            break;
        case 2:
            if (servicios.Telefono < saldoCuenta) {
                restarDinero(servicios.Telefono)
                mensajeServicios(servicios.Telefono, 'Telefono')
            }
            else { alert(insuficiente) };
            break;
        case 3:
            if (servicios.Luz < saldoCuenta) {
                restarDinero(servicios.Luz)
                mensajeServicios(servicios.Luz, 'Luz')
            }
            else { alert(insuficiente) };
            break;
        case 4:
            if (servicios.Internet < saldoCuenta) {
                restarDinero(servicios.Internet)
                mensajeServicios(servicios.Internet, 'Internet')
            }
            else { alert(insuficiente) };
    }
    actualizarSaldoEnPantalla();
}

function transferirDinero() {
    let montoTranferencia = parseInt(prompt(`Ingerse el monto que desea transferir.`));
    let cuentaTransferencia = parseInt(prompt(`Ingrese numero de cuenta a transferir.`));
    if (montoTranferencia > saldoCuenta) {
        (alert(`No tiene suficiente saldo para realizar esta transferencia.`));
    }
    else if (cuentaTransferencia == Lali | cuentaTransferencia == Alex) {
        restarDinero(montoTranferencia);
        alert(`Haz transferido: $${montoTranferencia}
        A la cuenta numero: ${cuentaTransferencia}`);
    } else (alert(`No puede transferir a cuentas que no son amigas.`));
    actualizarSaldoEnPantalla();

}


function iniciarSesion() {

}

//Funciones que actualizan el valor de las letiables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
