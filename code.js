let resultContainer = document.getElementById('result')
let numsContainer = document.getElementById('numsContainer')

/*result es un string*/ 
let result = resultContainer.textContent
let ultElemento
let operacionHecha = false

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
        }   else if(valor === "DEL"){
                result = result.slice(0, -1)
                resultContainer.textContent  = result
                operacionHecha = false
            }   else if (valor === "x" && ultElemento !== "*" && ultElemento !== "+" && ultElemento !== "-" && ultElemento !== "/" && ultElemento !== "."){
                    result = result + "*"
                    resultContainer.textContent = result 
                    operacionHecha = false
                }   else if(valor === "="){
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
        }   else if (valor !== "x" && valor !== "RESET" && valor !== "DEL" && valor !== "=" && ultElemento !== "+" && ultElemento !== "-" && ultElemento !== "*" && ultElemento !== "/" && ultElemento !== ".") {
                result = result + valor
                resultContainer.textContent = result
                operacionHecha = false
            }
    }
    retornarUltimoElemento(result)
    console.log(operacionHecha,typeof(operacionHecha));
}
function showResult(operacion){
    try{
        resultContainer.textContent = eval(operacion)
        result = resultContainer.textContent
        operacionHecha = true
    } catch (error){
        resultContainer.textContent = "Error"
        result = " "
    }
}
function retornarUltimoElemento(resultado){
    ultElemento = resultado[resultado.length - 1]
}

/*SELECCIONAR COLOR*/
let main = document.getElementById('main')
let selectColor = document.getElementById('select-color')

selectColor.addEventListener("click", themeSelector)

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

