let resultContainer = document.getElementById('result')
const numsContainer = document.getElementById('numsContainer')

/*result es un string*/ 
let result = resultContainer.innerHTML

numsContainer.addEventListener("click", returnValue)

function returnValue(event){
    if(event.target.tagName === "DIV"){
        const parrafo = event.target.querySelector("p");
        if(parrafo){
            const valor = parrafo.textContent;

            if(valor === "RESET"){
                result = " "
                resultContainer.textContent  = result
            }else if(valor === "x"){
                console.log(valor)
                result = result + "*"
                resultContainer.textContent  = result
            }else if(valor === "="){
                showResult(result)
            }else if(valor === "DEL"){
                if(typeof(result) === "string"){
                    result = result.slice(0, -1)
                    resultContainer.textContent  = result
                }else{
                    result = result.toString()
                    result = result.slice(0, -1)
                    resultContainer.textContent  = result
                    console.log(typeof(borrar), borrar);
                }
            } 
             else{
                result = result + valor;
                resultContainer.textContent  = result
            }
        }
    }
}

function showResult(operacion){
    try{
        const resultado = eval(operacion)
        resultContainer.textContent = resultado
        result = resultado
        return result.toString()
    } catch (error){
        resultContainer.textContent = "Error"
        result = " "
        return "Error en la operación", result.toString()
    }
}
