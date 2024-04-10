class Calculator {

    constructor() {
        this.Value = display
        this.reset = 0
    }

    clearAllValue() {
        this.Value.textContent = ''
    }

    clearLastValue() {
        let currentValue = this.Value.textContent

        if(currentValue.length > 0) {
            this.Value.textContent = currentValue.slice(0, -1)
        }
    }

    resolution() {

        let valueString = this.Value.textContent.replace(',', '.') // substituir todas as vírgulas por pontos
        let valueArray = valueString.split(/([-+*/])/) //separar por operações

        for (let i = 1; i < valueArray.length; i += 2) { // iterar sobre operadores

            let operator = valueArray[i] 
            let operand = Number(valueArray[i + 1]) // primeiro número depois do operador

            if (operator === '*' || operator === '/') {

                if (operator === '*') {
                    valueArray[i - 1] *= operand
                }
                else if (operator !== 0) {
                    valueArray[i - 1] /= operand
                }
                else  {
                    this.Value.textContent = `Error: Divison by zero`
                    return
                }

                if (valueArray.length > 2) { // após realizar operação, 'reset' passa a valer 1
                    calc.reset = 1
                }

                //remover operador e operando do array
                valueArray.splice(i, 1)
                valueArray.splice(i, 1)
                i -= 2 //atualize o índice para continuar na próxima iteração corretamente
            }
        }

        let result = Number(valueArray[0]) // começar pelo primeiro número (switch/case)
        for (let i = 1; i < valueArray.length; i += 2) {

            let operator = valueArray[i] 
            let operand = Number(valueArray[i + 1]) // primeiro número depois do operador

            if (operator === '+') {
                result += operand
            }
            else if(operator === '-') {
                result -= operand
            }

            if (valueArray.length > 2) { // após realizar operação, 'reset' passa a valer 1
                calc.reset = 1
            }

        }

        this.Value.textContent = result

    }

    checkLastDigit(input, Value, reg) {
        if ( (!reg.test(input) && !reg.test(Value.substr(Value.length - 1))) ) {
            return true
        }
        else{
            return false
        }
    }

    btnPress() {
        
        let input = this.textContent
        let Value = calc.Value.textContent
        let reg = new RegExp('^\\d+$') //verifica se tem só números

        if (calc.reset == 1 && reg.test(input)) {
            calc.clearAllValue() //limpa display após realizar a operação, se reset=1 & o proximo digito for um número
        }

        calc.reset = 0 // passa a valer '0', permitindo adicionar outra operação sem limpar a tela

        if (input == 'AC') {
           calc.clearAllValue()
        }

        else if (input == 'C') {
            calc.clearLastValue()
        }

        else if (input == '=') {

            calc.resolution()

        }

        else {

            //checa se adiciona ou não
            if (calc.checkLastDigit(input, Value, reg)) {
                return false
            }

            if (Value == '0') {
                calc.Value.textContent = input
            }
            else {
                
                if (calc.Value.textContent == '|') {

                    calc.Value.textContent = ''
                    calc.Value.textContent += input
                }
                else {

                    calc.Value.textContent += input
                }
            }
        }

    }

}

let calc = new Calculator

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calc.btnPress)
}


