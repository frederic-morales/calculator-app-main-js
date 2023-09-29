let resultContainer = document.getElementById('result')
let numsContainer = document.getElementById('numsContainer')

/*result es un string*/ 
let result = resultContainer.textContent
let ultElemento
let operacionHecha = true

numsContainer.addEventListener("click", returnValue)

function returnValue(event){
    if(event.target.tagName === "DIV" || event.target.tagName === "P"){

        /*-----------1----------*/ 
        let parrafo
        if(event.target.tagName === "DIV"){
            parrafo = event.target.querySelector("p")
        } else if(event.target.tagName === "P"){
            parrafo = event.target
        }

        const valor = parrafo.textContent;

        if(valor === "RESET"){
            result = " "
            resultContainer.textContent = result
            operacionHecha = false
        }   
        else if(valor === "DEL"){
            result = result.slice(0, -1)
            resultContainer.textContent  = result
            operacionHecha = false
        }   
        else if (valor === "x" && ultElemento != " "){
            result = result + " * "
            resultContainer.textContent = result
            operacionHecha = false
        }   
        else if(valor === "="){
            showResult(result)
            operacionHecha = true
        }
        if (valor >= 0 && valor <= 10) {
            if (operacionHecha) {
                result = " "
                operacionHecha = false
            }
            result = result + valor
            resultContainer.textContent = result
        }   
        else if (valor !== "x" && valor !== "RESET" && valor !== "DEL" && valor !== "=" && ultElemento != " ") {
            if (valor === ".") {
                result = result + valor
                resultContainer.textContent = result
                operacionHecha = false
            } else {
                result = result + " " + valor + " "
                resultContainer.textContent = result
                operacionHecha = false
            }
            
        }
        retornarUltimoElemento(result)
    }
}

function showResult(operacion){
    try{
        resultContainer.textContent = eval(operacion)
        result = resultContainer.textContent
        operacionHecha = true
        mostrarConComas(result)

    } catch (error){
        resultContainer.textContent = "Error"
        result = " "
    }
}

function retornarUltimoElemento(resultado){
    ultElemento = resultado[resultado.length - 1]
}

function colocarComa(cadena) {
    let cadenaConComa = ""
    if (cadena.length > 3) {
        for (let i = cadena.length - 1, contador = 0; i >= 0; i--) {
        cadenaConComa = cadena[i] + cadenaConComa
        contador++
        // Insertar una coma después de cada grupo de tres dígitos
            if (contador === 3 && i !== 0) {
                cadenaConComa = "," + cadenaConComa
                contador = 0
            }
        }
    } else{
        cadenaConComa = cadena
    }

    return cadenaConComa
}

function colocarComaAlString(str) {
    //let str = "9029889 + 2788.5998 * 2 + 323332 - 5848"
    let cadenas
    let strFinal = ""
    

        cadenas = str.split(" ") // CONVERTIMOS NUESTRO STRING EN UN ARRAY DE STRING POR CADA SPACIO ECONTRADO
        //console.log(cadenas);
        
        for (let i = 0; i < cadenas.length; i++) {
            let cadena = cadenas[i]
            
            //SI EL STRING CONTIENE UNA EXPRESION ARITMETICA SOLO LA SUMAMOS AL STRING FINAL
            if (cadena === "+" || cadena === "-" || cadena === "*" || cadena === "/") {
                strFinal = strFinal + " " + cadena + " "
            } 
            else if (cadena.includes(".")) {
                let cadenaConPunto = cadena.split(".")
                let cadenaConPuntoYComa = colocarComa(cadenaConPunto[0]) + "." + cadenaConPunto[1]
                strFinal = strFinal + cadenaConPuntoYComa
            } 
            else if (cadena.length > 3) { // SI EL STRING ES MAYOR A 3 LE AGREGAMOS UNA COMA AL INICIO 
                let cadenaConComa = colocarComa(cadena)
                strFinal = strFinal + cadenaConComa
            } 
            else{
                strFinal = strFinal + cadena
            }
            
        }   

return strFinal
}

function mostrarConComas(valor) {
    
    let valorConComa
    
    if (valor.includes(" ")) {
        valorConComa = colocarComaAlString(valor)
    }
    else if (valor.includes(".")) {
        let cadenaConPunto = valor.split(".")
        let cadenaConPuntoYComa = colocarComa(cadenaConPunto[0]) + "." + cadenaConPunto[1]
        valorConComa = cadenaConPuntoYComa
    } else{
        valorConComa = colocarComa(valor)
    }

    result = valorConComa
    resultContainer.textContent = result
    return result
}

/*SELECCIONAR COLOR*/
let main = document.getElementById('main')
let selectColor = document.getElementById('select-color')
let theme = document.getElementById('theme')

selectColor.addEventListener("click", themeSelector)
theme.addEventListener("click", changeTheme)

function changeTheme(){
    switch(selectColor.value){
        case "1":
            selectColor.value = "2"
            break;
        case "2":
            selectColor.value = "3"
            break;
        case "3":
            selectColor.value = "1"
            break;
        default:
            break;
    };
    themeSelector()
}

function themeSelector() {
    switch (selectColor.value) {
        case "1":
            main.classList.remove("theme2-main")
            main.classList.remove("theme3-main")
            break;
        case "2":
            main.classList.remove("theme3-main")
            main.classList.add("theme2-main")
            break;
        case "3":
            main.classList.remove("theme2-main")
            main.classList.add("theme3-main")
        default:
            break;
    }
}