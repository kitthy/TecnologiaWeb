// fecha actual dinámicamente en el siguiente formato de fecha: lunes 6 de abril de 2020

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

