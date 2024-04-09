class Calculator {

    constructor() {
        this.Value = display
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

        //checa se precisa adicionar ou não
        if (calc.checkLastDigit(input, Value, reg)) {
            return false
        }

        if (Value == '0') {
            calc.Value.textContent = input
        }
        else {
            calc.Value.textContent += input
        }

    }

}

let calc = new Calculator

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calc.btnPress)
}


