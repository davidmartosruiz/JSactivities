function diviEntera(){
    let divi=Number(document.getElementById("divi").value);
    let disor=Number(document.getElementById("disor").value);
    let consciente=0;

    if (divi>=0 && disor>0 && Number.isInteger(divi) && Number.isInteger(disor)) {
        while (divi >= disor){
            divi -= disor; //El montón se reduce en la cantidad a repartir
            consciente++;
            console.log(divi);
        }
    
    document.getElementById("solution").innerHTML="The quotient is " + consciente + " and the remainder is " + divi;
    document.getElementById("solution").style.visibility="visible"
    } else {
        document.getElementById("solution").innerHTML="ERROR";
    }
}