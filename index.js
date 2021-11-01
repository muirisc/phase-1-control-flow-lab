function scuberGreetingForFeet(distance){
  // Write your code here!
  let result
  if (distance <= 400) {
    result = "This one is on me!"
  }
  else if (distance > 2000 && distance < 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else result = "No can do."
return result
}

function ternaryCheckCity(Location){
  return (Location == "NYC" ? "Ok, sounds good." : "No go.")
  // Write your code here!

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous': 
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default:
      return "Bye."
}
}