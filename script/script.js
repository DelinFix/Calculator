const input = document.getElementById('input-calc')

document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', ()=>{
        const buttonValue = button.innerHTML

        //Clear All to clicked
        if(buttonValue === "CA"){
            input.value = '0'
        }
        //Clear to clicked
        else if(buttonValue === '◄'){//
            if(input.value.length === 1){
                input.value = '0'
            }
            else if(input.value != /^0/) {
                input.value = input.value.substring(0, input.value.length - 1)
            }
        }
        //Equal to clicked
        else if(buttonValue === '='){
            //Remove the signs at the end and beginning except '-'
            if(/\W$/.test(input.value)){
                input.value = input.value.substring(0, input.value.length - 1)
                input.value = eval(input.value)
            }
            else if(/^\W/.test(input.value) && /^[^-]/.test(input.value)){
                input.value = input.value.substring(1, input.value.length)
                input.value = eval(input.value)
            }
            else{
                input.value = eval(input.value)
            }
        }
        //Replacing zero with a number
        else if(buttonValue != '.' && input.value === '0'){
            input.value = buttonValue
        }
        //If the last character was a sign, do not add anything other than a number
        else if(/\W$/.test(input.value)  && /\W/.test(buttonValue)){
        }
        //Add a number/sign
        else{
            input.value += buttonValue
        }
    })
})