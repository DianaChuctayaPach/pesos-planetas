var peso = Number(prompt("CUAL ES TU PESO?"));
var planeta = Number(prompt("Elige tu planeta:\n 1 es marte\n 2 es jupiter \n 3 es mercurio \n 4 es venus \n 5 es saturno \n 6 urano \n 7 neptuno \n 8 pluton"));
var g_tierra = 9.8;
var gravedad;
var peso_final;
var nombre;

switch(planeta){
case 1:
  gravedad= 3.7;
   nombre = "Marte";
break;
case 2:
  gravedad = 24.8;
  nombre = "Jupiter";
break;
case 3:
  gravedad = 3.72;
  nombre = "Mercurio";
break;
case 4:
  gravedad = 8.82;
  nombre = "Venus";
break;
case 5:
  gravedad = 9.01;
  nombre = "Saturno";
break;
case 6:
  gravedad = 8.72;
  nombre = "Urano";
break;
case 7:
  gravedad = 10.97;
  nombre = "Neptuno";
break;
case 8:
  gravedad = 0.65;
  nombre = "Pluton";
break;
default:
  alert ("Esa ocpión no existe");
}

peso_final = peso * gravedad / g_tierra;

document.write("Tu peso en "  + nombre + " es <strong> " + peso_final.toFixed(2) + "</strong> Kilos");
