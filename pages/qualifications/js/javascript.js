function calculate(){
    // VERSIÓN CON PUNTOS EXTRAS POR TRABAJOS INDEPENDIENTES
    /* entrada de datos */
    let wordPress=Number(document.getElementById("wordPress").value);
    let js=Number(document.getElementById("js").value);
    // Cuando cojo el dato de una casilla de verificación, cojo la casilla entera, no value
    let extraWPProject=document.getElementById("extraWPProject");
    let extraJSProject=document.getElementById("extraJSProject");

    /* calculo de nota */
    let finalMark=wordPress*0.75+js*0.25;

    if (extraWPProject.checked) {
        finalMark++;
    }

    if (extraJSProject.checked) {
        finalMark++;
    }

    // Comprobamos que el resultado está dentro del rango
    if (finalMark > 10) {
        finalMark = 10;
    }

    /* salida de resultado */
    document.getElementById("solution").innerHTML="The final mark is: " + finalMark;

    if (finalMark >= 5){
        document.getElementById("indication").innerHTML="Congrats, you have passed.";
    }else{
        document.getElementById("indication").innerHTML="Sorry, you would need to come in June.";
    }
}
