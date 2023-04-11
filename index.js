
  function scuberGreetingForFeet(feet){
    if (feet <= 400) {
      return 'This one is on me!'
   } else if (feet > 400 && feet <= 2000 ) {
      return 'That will be twenty bucks.'
   } else if (feet > 2000 && feet <= 2500) {
      return 'I will gladly take your thirty bucks.'
   } else {
      return 'No can do.'
   }
  }


function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." // this is where you declare the initial condition
        : "No go." // this is the second condition no "if  else or else needed"
        // This is how we write a ternary statement 
// function example() {
//   return condition1 ? value1
//         : condition2 ? value2
//         : condition3 ? value3
//         : value4;
// }

}

function switchOnCharmFromTip(Tip){
switch (Tip){   
  case "generous":
    return "Thank you so much."
  
case "not as generous":
  return "Thank you."

  default : 
  return "Bye."

}




}


  // this is the syntax for switch statements
  // switch (expression) {
  //   case value1:
  //     statements
  //   case value2:
  //     statements
  //   // …
  //   case valueN:
  //     statements
  //   default:
  //     statements
  // }
  
  



