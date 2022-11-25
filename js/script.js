let carasello = document.getElementById("apostar")

carasello.addEventListener('click', () => {
    let seguir
    let apuesta
    let total = 0
    let resultado
    let veces = 0
    let opcion = (document.getElementById("opciones").value);
    let duplicar

    if(opcion == "..."){
        alert("Escoja una opción valida");
    }
    else{

        do {

            //Cantidad de dinero a apostar
            apuesta = prompt("Señor usuario, por favor digite la cantidad de dinero que desea apostar");
    
                //Condiciones
                if(apuesta <= 0){
                    alert("Por favor digite una apuesta valida")
                }
                else{
                        //Funcion ramdom para calcular si cae cara o sello, cara:1, sello:2
                        alert("Buena suerte");
                        let n = Math.floor(Math.random()*2)+1;

                        if (opcion == "cara" && n == 1) {
                            if(duplicar == "si"){
                                if(veces >= 5){
                                    resultado = (apuesta*3) + 1000;
                                }
                                else{
                                    resultado = apuesta*3;
                                }
                            }
                            else{
                                if(veces >= 5){
                                    resultado = (apuesta*2) + 1000;
                                }
                                else{
                                    resultado = apuesta*2;
                                }
                            }
                            alert("La maquina ha escogido " + opcion + ", ¡Felicidades usted ha ganado!");
                            alert("La cantidad de dinero que ha ganado es " + resultado);
                            total = total + resultado;
                        }
            
                        else if (opcion != "cara" && n == 1) {
                            if(duplicar == "si"){
                                if(veces >= 5){
                                    total = (total - (apuesta*3)) + 1000;
                                }
                                else{
                                    total = total - (apuesta*3);
                                }
                            }
                            else{
                                if(veces >= 5){
                                    total = (total - (apuesta)) + 1000;
                                }
                                else{
                                    total = total - apuesta;
                                }
                            }
                            alert("La maquina ha escogido sello, Lo sentimos usted ha perdido");
                            alert("La cantidad de dinero que ha perdido es " + apuesta);
                            if(total <= 0){
                                total = 0;
                            }
                            else {
                                total = total;
                            }
                        }
            
                        else if (opcion == "sello" && n == 2) {
                            if(duplicar == "si"){
                                if(veces >= 5){
                                    resultado = (apuesta*3) + 1000;
                                }
                                else{
                                    resultado = apuesta*3;
                                }
                            }
                            else{
                                if(veces >= 5){
                                    resultado = (apuesta*2) + 1000;
                                }
                                else{
                                    resultado = apuesta*2;
                                }
                            }
                            alert("La maquina ha escogido " + opcion + ", ¡Felicidades usted ha ganado!");
                            alert("La cantidad de dinero que ha ganado es " + resultado);
                            total = total + resultado;
                        }
            
                        else if (opcion != "sello" && n == 2) {
                            if(duplicar == "si"){
                                if(veces >= 5){
                                    total = (total - (apuesta*3)) + 1000;
                                }
                                else{
                                    total = total - (apuesta*3);
                                }
                            }
                            else{
                                if(veces >= 5){
                                    total = (total - (apuesta)) + 1000;
                                }
                                else{
                                    total = total - apuesta;
                                }
                            }
                            alert("La maquina ha escogido cara, Lo sentimos usted ha perdido");
                            alert("La cantidad de dinero que ha perdido es " + apuesta);
                            if(total <= 0){
                                total = 0;
                            }
                            else {
                                total = total;
                            }
                        }

                        veces = veces +1;
                        duplicar = prompt("Si desea triplicar sus apuestas por favor digite si, al contrario digite no");
                        seguir = prompt("Para volver a jugar digite 1 o si desea salir digite 2"); 
                    }
                    
                }

        while (seguir != 2){
            alert("Señor usuario usted jugo "+ veces + " veces y el total de dinero es de " + total);
        };
    }
})

