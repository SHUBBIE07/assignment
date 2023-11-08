 prompt("What is your name? ");
 prompt("What is their name? ");
var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
console.log(lovescore);
alert('Your love score is ' + lovescore +"%")








var guestList = ["Shubbie", "Bola", "Wonu", "Oyin"];
var  guestName = prompt("What is your name? ");
if (guestList.includes (guestName)) {
alert("WELCOME!");
} else {
alert('Sorry, maybe next time')
}






var output = [];
var count = 1;

function fizzBuzz () {
    if (count % 3 === 0 && count % 5 ===0){
        output.push("FizzBuzz");
    }
   else if (count % 3 === 0) {
    output.push("Fizz");
   }
   else if (count % 5 === 0){
    output.push("Buzz");
   }
   else {
    output.push(count);
   }
    count++;
    console.log(output);
}








function whospaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names (randomPersonPosition);
    
    return randomPerson + " is going to buy luch today!";

}