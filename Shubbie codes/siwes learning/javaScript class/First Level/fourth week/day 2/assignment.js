function display() {
    let input1 = document.getElementById("input1").value;
    let input2 = parseInt(document.getElementById("input2").value);

    let div1 = document.getElementById("div1");

    div1.innerHTML = ""; 

    var min = 1000000000000000;
    var max = 9999999999999999;

    var network1 = ["mtn", "airtel", "glo","etisalat"];

    if (input1 === "" || isNaN(input2)) {

        alert("Enter network and valid amount");

    } else if (network1.includes(input1.toLowerCase()) || network1.includes(input1.toUpperCase())) {
           
        div1.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;

    } else {

        alert("Enter a valid Network");

    }
}

function load (){
    let h1 = document.getElementById("h1")
    let input3 = parseInt(document.getElementById("input3").value);
    let div1 = parseInt(document.getElementById("div1").innerHTML);

 
if(div1 === input3){

 h1.innerHTML = "<p class='suc'>SUCCESSFUL!!!</p> "    
  div1.innerHTML = ""
} else {
 h1.innerHTML = "<p class=val>THIS PIN IS INVALID!!!</p> "
 div1.innerHTML = ""
 
}
}

function button(value){
    document.getElementById("input2").value = value;
}
