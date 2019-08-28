function mostrarHora() {
    var h = new Date();
    cad = h.getHours() + ":" + h.getMinutes() + ":" + h.getSeconds();
    
    var mes = h.getMonth();
    var dia = h.getDay();
    var diaMes = h.getDate();
    var anio = h.getFullYear();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var esteMes = meses[mes];
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "jueves", "viernes", "Sabado"];
    var diaHoy = diasSemana[dia];

    fecha = diaHoy +" "+ diaMes +" "+ "de"+" " + esteMes+ " " + "del"+ " " + anio;
    window.status = cad;
    /*window.status = fecha;*/
    document.getElementById('hora').innerHTML= cad;
    setTimeout("mostrarHora()", 1000);
    document.getElementById('fecha').innerHTML= fecha;
}

// funciones que nos permitira mostrar u ocultar los datos que corresponden al presionar un item del menu
function ciudad1()
{
    document.getElementById("marruecos").style.display = "none";
    document.getElementById("ciudad1").style.display = "block";
    document.getElementById("ciudad2").style.display = "none";
    document.getElementById("ciudad3").style.display = "none";
    document.getElementById("ciudad4").style.display = "none";
}
function ciudad2()
{
    document.getElementById("marruecos").style.display = "none";
    document.getElementById("ciudad1").style.display = "none";
    document.getElementById("ciudad2").style.display = "block";
    document.getElementById("ciudad3").style.display = "none";
    document.getElementById("ciudad4").style.display = "none";
}

function ciudad3()
{
    document.getElementById("marruecos").style.display = "none";
    document.getElementById("ciudad1").style.display = "none";
    document.getElementById("ciudad2").style.display = "none";
    document.getElementById("ciudad3").style.display = "block";
    document.getElementById("ciudad4").style.display = "none";

}
 
function ciudad4()
{
    document.getElementById("marruecos").style.display = "none";
    document.getElementById("ciudad1").style.display = "none";
    document.getElementById("ciudad2").style.display = "none";
    document.getElementById("ciudad3").style.display = "none";
    document.getElementById("ciudad4").style.display = "block";
}
