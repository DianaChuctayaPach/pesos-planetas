    var usuario = prompt("CUAL ES TU PESO?");
    var planeta = parseInt(prompt("Elige tu planeta:\n 1 es marte\n 2 es jupiter \n 3 es mercurio \n 4 es venus \n 5 es saturno \n 6 urano \n 7 neptuno \n 8 pluton"));
    var peso = parseInt(usuario);
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var g_mercurio =3.72;
    var g_venus = 8.82;
    var g_saturno = 9.01;
    var g_urano = 8.72;
    var g_neptuno = 10.97;
    var g_pluton = 0.65 
    var peso_final;
    var nombre;

    if(planeta == 1)
    {
      peso_final = peso * g_marte / g_tierra;
       nombre = "Marte";
    }
    else if(planeta == 2)
    {
      peso_final = peso * g_jupiter / g_tierra;
       nombre = "Jupiter";
    }
    else if (planeta == 3)
    {
      peso_final = peso * g_mercurio / g_tierra;
      nombre = "Mercurio";
    }
      else if (planeta == 4)
    {
      peso_final = peso * g_venus / g_tierra;
      nombre = "Venus";
    }
      else if (planeta == 5)
    {
      peso_final = peso * g_saturno / g_tierra;
      nombre = "Saturno";
    }
      else if (planeta == 6)
    {
      peso_final = peso * g_urano / g_tierra;
      nombre = "Urano";
    }
      else if (planeta == 7)
    {
      peso_final = peso * g_neptuno / g_tierra;
      nombre = "Neptuno";
    }  else if (planeta == 8)
    {
      peso_final = peso * g_pluton/ g_tierra;
      nombre = "Pluton";
    }else 
    {
      alert ("Esa ocpión no existe");
    }
    peso_final = parseInt(peso_final);

    document.write("Tu peso en "  + nombre + " es <strong> " + peso_final + "</strong> Kilos");