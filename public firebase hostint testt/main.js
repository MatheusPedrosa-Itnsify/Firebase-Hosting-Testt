const qs = (element) => document.querySelector(element)
const cl = (text) => console.log(text)

const display = qs(".display")
const calculadora = qs("#calculadora-container")

calculadora.addEventListener("click", ({target:element})=>{
    if(element.className.includes("buttons")){

        if(display.innerHTML == "0"){
            display.innerHTML = element.innerHTML
        } else if(element.innerHTML != "="){
            display.innerHTML += element.innerHTML
        }


        if(element.className.includes("reset")){
            display.innerHTML = "0"
        }

        if(element.className.includes("igual") && display.innerHTML != "0"){
                if(/^[^a-zA-Z]*$/.test(display.innerHTML)){  //para não colocarem códigos Js
                    display.innerHTML = eval(display.innerHTML)
                }
            }
        }

    }
)