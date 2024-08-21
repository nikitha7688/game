//selecting elements

var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noofguess= 3
//generat random number from 1 to 5

var randomnumber = Math.floor(Math.random()*10)+1
   if(randomnumber>5)
   {
    randomnumber=randomnumber -5
   }

//event handler function

function checkthenumber()
{
  if(inputbox.value == randomnumber)
  {
    alert("You Got it Right,Congratulations .")
    result.textContent="Your Right ! 😊"
  }
  else{
    noofguess=noofguess-1
   if (noofguess==0)
   {
    alert("You Lost, Generated Random Number is :"  + randomnumber)
   }
   guesscount.textContent = "Available Guesses:"+noofguess
   result.textContent="Your Wrong ! 😞"
  }
}