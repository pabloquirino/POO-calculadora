# Calculadora Orientada a Objetos
Projeto feito para a prática de programação orientada a objetos, com a finalidade de escrever códigos organizados e reutilizáveis.

### Descrição do projeto:
Este projeto consiste em uma calculadora básica que oferece funcionalidades padrões, como adição, subtração, multiplicação e divisão, assim também como a capacidade de limpar a tela e apagar o último dígito. Foram utilizados métodos para verificação de processos, que verificam se a calculadora já fez uma operação antes de adicionar mais digitos, regex para separar operadores aritiméticos de números, e a possibilidade de realizar expressões numéricas respeitando a ordem de precedência dos operadores.

### Tecnologias utilizadas:
- Html
- Tailwindcss
- Javascript

### Funcionalidades Implementadas:
- Adição (+)
- Subtração (-)
- Multiplicação (*)
- Divisão (/) 
- Apagar último dígito (C)
- Limpar tela (AC)
- Resolução de expressões matemáticas
- Caso seja adicionado um **número** após uma expressão ter sido realizada, o display é limpo e outro dígito é adicionado
- Caso seja adicionado um **operador** após uma expressão ter sido realizada, a operação prossegue normalmente

### Métodos Implementados:
- **btnPress()**: Adiciona dígitos ao display da calculadora
- **clearAllValue()**: Limpa o valor exibido na tela da calculadora
- **clearLastValue()**: Remove o último dígito do valor exibido na tela
- **resolution()**: Resolve a expressão matemática inserida na calculadora
- **checkLastDigit(input, Value, reg)**: Verifica se é possível adicionar um dígito à expressão atual, evitando erros de formatação

### Veja o site aqui:
https://pabloquirino.github.io/POO-calculadora/src/

### Captura de tela:
 ![PrintScreen do projeto](./PrintSc/calculadora.png) 


