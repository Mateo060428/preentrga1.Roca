
function login() {
    let= nombreUsuario=prompt("Ingrese su usuario");

 if (nombreUsuario=="") {
    alert("error:usuario no encontrado");
 } else {
    alert("Bienvenido " + nombreUsuario);
 }   

}

function pedirTurno() {
    let solicitarTurno=prompt("¿quieres pedir un turno?")
    if (solicitarTurno=="no") {
        alert("ok muchas gracias vuelva pronto")
    } 
    if (solicitarTurno="si") {
    
        for (let i = 1; i <=20; i++) {
        
            alert("su turno es el Nro "+i+" Usuario: " + nombreUsuario )
            break
        
    }
}
if (solicitarTurno=="") {
    alert("error:no hay respuesta por parte del usuario")
}
}
 
login()
pedirTurno()


