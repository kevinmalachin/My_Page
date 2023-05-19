// the DOM elements

const operations = document.querySelectorAll('[data-operation]');
const display = document.querySelector('Display');
const numberButtons = document.querySelectorAll('[data-number]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');

class Calculator {                                                          // i need something where to store the value
  constructor(previousOperandTextElement, currentOperandTextElement) {    // as parameters i take the DOM elements for the display 
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()                                                 // i want to clear everything when i start use the calculator
 }

 clear() {
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined                    //this funcion set empty values and that's why i put at the end of the constructor
}

 delete () {
  this.currentOperand = this.currentOperand.toString().slice(0, -1)
 }

 appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return             // with a period => return so the function stops
    this.currentOperand = this.currentOperand.toString() + number.toString() // the append number function has to be update with the current number into string
                                                                              //otherwise JS will add the numbers instead of appending (1+1=2 instead 1+1=11)
 }

 chooseOperation(operation) {
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
    this.compute()
  }
    this.operation = operation                            // equal to the operation we're passing
    this.previousOperand = this.currentOperand          // so we can cicle again after we're done to type the previous operand
    this.currentOperand = ''                            // to clear the current value
 }

 compute () {                                        //here we define the operations with a switch case
  let result
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if(isNaN(prev) || isNaN(current)) return
  switch (this.operation) {
    case "+":
      result = prev + current
      break
      case "-":
      result = prev - current
      break
      case "x":
        result = prev * current
        break
        case "÷":
          result = prev / current
          break
        default:
          return
  }
  this.currentOperand = result                        // setting equal to the result of the operations
  this.operation = undefined                          // because after the switch we have the result
  this.previousOperand = ''
 }

 getDisplayNumber(number) {
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`
  } else {
    return integerDisplay
  }
}

updateDisplay() {
  this.currentOperandTextElement.innerText =
    this.getDisplayNumber(this.currentOperand)
  if (this.operation != null) {
    this.previousOperandTextElement.innerText =
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
  } else {
    this.previousOperandTextElement.innerText = ''
  }
}
}


 const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)   // i want to create the object i need with the previous class i build with the constructor


numberButtons.forEach(button => button.addEventListener('click', e => {     //the button DOM elements
    e.preventDefault();

    calculator.appendNumber(button.innerText)              // append the number inside the button!!!!!!!
    calculator.updateDisplay()                   // after that update the display (the function)
  }))


  operations.forEach(button => button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    }))
  
  equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })

/* creating functions


function sum(x, y) {
  return x + y;
};


function subtraction(x, y) {
  return x - y;
};


function moltiplication(x, y) {
  return x * y;
};


function division(x, y) {
  return x / y;
};

*/