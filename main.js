
function IngresarUsuario() {
    let= nombreUsuario=prompt("Ingrese su usuario");

 if (nombreUsuario=="") {
    alert("error:usuario no encontrado");
 } else {
    alert("Bienvenido a la sucursal Chevrolet " + nombreUsuario);
 }   

}

const Auto = function (nombre,precio,año,cantidad){
    this.nombre = nombre,
    this.precio = precio,
    this.año = año,
    this.cantidad = cantidad
}
 let auto1= new Auto("corsa",120000,2008,5)
 let auto2= new Auto("montana",240000,2024,20)
 let auto3= new Auto("onix",600000,2023,8)
 let auto4= new Auto("tracker",360000,2024,12)
 const lista = [auto1,auto2,auto3,auto4]
 function BuscarAuto(){
    let palabraClave = prompt("ingresa el nombre del auto q estas buscando").trim().toUpperCase()
    let resultado = lista.filter( (x)=> x.nombre.toUpperCase().includes(palabraClave))
    if (resultado.length >0) {
        console.table(resultado)
        ComprarAuto(resultado); 
    } else {
       alert("no se encontro el auto que buscas") 
    }
 }
 function ComprarAuto(resultado){
    let eleccion = prompt("¿desea comprar el auto elegido? si/no").toLowerCase();

if (eleccion==="si") {

    let nombredelAuto = prompt("ingrese el nombre del auto por favor").trim();
    let AutoElegido = resultado.find(auto => auto.nombre.toLowerCase() === nombredelAuto.toLowerCase());

    if (AutoElegido){
        let cuotas = 12;
        let cuotaMensual = AutoElegido.precio / cuotas; 
        alert(`El precio del auto ${ AutoElegido.nombre } es ${ AutoElegido.precio } Cada cuota será de ${ cuotaMensual } durante ${ cuotas } meses.`);

    }
} else {
    alert("Selección no válida.");
}
if (eleccion==="no") {
    alert("recibido gracias por entrar a nuestra pagina")
}
 }

IngresarUsuario()   
BuscarAuto()



 
 


