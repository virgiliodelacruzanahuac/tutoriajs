document.body.innerHTML = "<h2> Hola Mundo </h2>";
//alert("hola mundo");

var w = 0;

console.log("hola consola");

function suma()
{
    //alert("soy un boton");
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var suma = n1 + n2;
    document.getElementById("suma").innerHTML = " la suma es " + suma;     
 
}