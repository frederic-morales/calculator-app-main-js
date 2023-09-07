let resultContainer = document.getElementById('result')
let numsContainer = document.getElementById('numsContainer')

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
                resultContainer.textContent = result
            }else if(valor === "x"){
                result += "*"
                resultContainer.textContent = result
            }else if(valor === "="){
                showResult(result)
            }else if(valor === "DEL"){
                result = result.slice(0, -1)
                resultContainer.textContent  = result
            } 
             else{
                result = result + valor;
                resultContainer.textContent  = result
            }
        }
    }

    /*
    for(i = 0; i < result.length; i += 3){
        let resultComa = result.substring(i, i + 3)
        resultComa = resultComa + ","
        
        console.log(result);
    }*/
    console.log(typeof(result));

}

function showResult(operacion){
    try{
        resultContainer.textContent = eval(operacion)
        result = resultContainer.textContent
        result = result.toString()
        return result
    } catch (error){
        resultContainer.textContent = "Error"
        result = " "
        return "Error en la operación", result
    }
}

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

