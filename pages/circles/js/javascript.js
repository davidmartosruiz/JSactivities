function calculate() {
    /* Algoritmo secuencial para calcular la longitud, el área y el volumen.
    CON NOVEDAD V2.0: FORMULARIO DE ENTRADA */

    /* entrada de datos */
    /* let radio = Number(prompt("Type a radio in centimetres: "));*/
    let radio=Number(document.getElementById("radio").value);
    const PI = Number(3,14159);

    /* cálculo interno */
    length = (2 * PI * radio) / 2;
    area = (PI * radio**2) / 2;
    volume = (4 / 3 * PI * radio**3) / 2;

    /* mostrar resultado */
    document.getElementById("lengthSolution").innerText="The circumference length is: " + length + " cm";
    document.getElementById("areaSolution").innerText="The circle area is: " + area + " cm2";
    document.getElementById("volumeSolution").innerText="The sphere volume is: " + volume + " cm3";
}