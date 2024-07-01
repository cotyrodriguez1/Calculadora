let pantalla = document.getElementById("Pantalla");
let teclas = document.getElementsByClassName("tecla");
let operaciones = document.getElementsByClassName("operacion");
let igual  = document.getElementById("igual");
let borrar = document.getElementById("borrar");
let operacion = "";
let operando1 = "";
let operando2 = "";


for (let i = 0; i < teclas.length; i ++){
    teclas[i].addEventListener("click", () => {
        if(operacion === "") {
            operando1 += teclas[i].innerText;
        }else{
            operando2 += teclas[i].innerText;
        }
        pantalla.innerText += teclas[i].innerText;
    })
}

for (let i = 0; i < operaciones.length;i ++){
    operaciones[i].addEventListener("click", () => {
       switch(operaciones [i].innerText) {
            case "+":
                operacion = "suma"
                pantalla.innerText = "+"
                break
            case "-":
                operacion = "resta"
                pantalla.innerText = "-"
                break
            case "*":
                operacion = "multiplicacion"
                pantalla.innerText = "*"
                break
            case "/":
                operacion = "division"
                pantalla.innerText = "/"
                break
            default:
                console.log("Operacion no valiva");
            }  
      pantalla.innerText = "" ;      
})

}

igual.addEventListener("click", () => {
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);
    switch(operacion) {
        case "suma":
            pantalla.innerText = operando1 + operando2;
            break;
        case "resta":
             pantalla.innerText = operando1 - operando2;
             break;
        case "multiplicacion":
            pantalla.innerText = operando1 * operando2;
            break;
        case "division":
            pantalla.innerText = operando1 / operando2;
            break;
        default:
            console.log("Operacion no valiva");
    }

})

borrar.addEventListener("click", () => {
        operacion = "";
        operando1 = "";
        operando2 = "";
        pantalla.innerText = "";
})
    


