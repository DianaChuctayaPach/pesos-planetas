function calcular() {
  var g_tierra = 9.8;
  var gravedad;
  var peso_final;
  var nombre;
  var peso = document.getElementById("peso").value;
  var planeta = document.getElementById("planetas").value;
  if(planeta==1){
    gravedad= 3.7;
    nombre = "Marte";
  } else if (planeta==2){
    gravedad = 24.8;
    nombre = "Jupiter";
  }else if (planeta==3){
    gravedad = 3.72;
    nombre = "Mercurio";
  }else if (planeta==4){
    gravedad = 8.82;
    nombre = "Venus";
  }else if (planeta==5){
    gravedad = 9.01;
    nombre = "Saturno";
  }else if (planeta==6){
    gravedad = 8.72;
    nombre = "Urano";
  }else if (planeta==7){
    gravedad = 10.97;
    nombre = "Neptuno";
  }else if (planeta==8){
    gravedad = 0.65;
    nombre = "Pluton";
  } else {
    alert ("Esa opción no existe");
  }

  peso_final = peso * gravedad / g_tierra;
  var respuesta = '<br>'+"Tu peso en "  + nombre + " es <strong> " + peso_final.toFixed(2) + "</strong> Kilos";
  document.getElementById('resultado').innerHTML=respuesta;
}
