


   let  askNumbers = (prompt("Enter two numbers"))

    let numbers = askNumbers.split(",")
    alert(numbers[0])
    let number1 = parseInt(numbers[0])
    let number2 = parseInt(numbers[1])
    while (isNaN(parseInt(numbers[0])) || isNaN(parseInt(numbers[1]))) {
        askNumbers = prompt("Enter two numbers");
        numbers = askNumbers.split(",");
        
      }
     number1 = parseInt(numbers[0])
     number2 = parseInt(numbers[1])
// let number2
// while(isNaN(number2)){
//  number2 = parseInt(prompt("Enter second number"))
// }
let finalNumber
let operation = prompt("Enter the appropriate operation", "*,/,-,+")

function addNumbers(number1, number2, operation)
{
    if(operation == "+"){
        finalNumber = number1 + number2
}
    else if(operation == "-"){
        finalNumber = number1 - number2
    }
    else if(operation == "*"){
        finalNumber = number1 * number2
    }
    else if(operation == "/"){
        
        finalNumber = number1/number2
        
    }
    alert(finalNumber)


}

addNumbers(number1,number2,operation)