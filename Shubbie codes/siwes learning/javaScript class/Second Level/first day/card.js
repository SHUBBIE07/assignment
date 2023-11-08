let networkOption = document.getElementById("networkOption");
let generateInput = document.getElementById("generateInput");
let pinDisplay = document.getElementById("pinDisplay");
let gloSpan = document.getElementById("gloSpan");
let mtnSpan = document.getElementById("mtnSpan");
let airtelSpan = document.getElementById("airtelSpan");
let etisalatSpan = document.getElementById("etisalatSpan");
let inputMtn = document.getElementById("inputMtn");
let inputGlo = document.getElementById("inputGlo");
let inputAirtel = document.getElementById("inputAirtel");
let inputEtisalat = document.getElementById("inputEtisalat");

function generatePin(){
    let pin = Math.floor(Math.random()* 1000000000000000);

    if(generateInput.value === ""){
        alert("Enter Amount");
  } else if (networkOption.value == "SelectNetwork") {
    alert("Select Network");
  } else {
        pinDisplay.innerHTML =  pin;
        alert("You have generated " + generateInput.value + ", " + networkOption.value + " airtime");
    }
}



function setAmount(value){
generateInput.value = value;
}


function loadGlo(){

  let pin = document.getElementById("pinDisplay").innerHTML

  if(!inputGlo.value.startsWith("*123*") || !inputGlo.value.endsWith("#") || !inputGlo.value.includes(pin)){
      gloSpan.innerHTML= "<span class=val> INVALID PIN, CHECK AGAIN</span> ";
  } else if (networkOption.value !== "GLO"){
      gloSpan.innerHTML = "<span class=val> INVALID NETWORK PROVIDER</span> ";
  } else{
      gloSpan.innerHTML = "You have recharged " + networkOption.value + " of " + generateInput.value + " <span class=suc> SUCCESSFUL</span> "
  }
  

  mtnSpan.innerHTML =""
  inputMtn.value = ""
  airtelSpan.innerHTML = ""
  inputAirtel.value = ""
  etisalatSpan.innerHTML = ""
  inputEtisalat.value = ""
}


function loadMtn(){

  let pin = document.getElementById("pinDisplay").innerHTML


if( !inputMtn.value.startsWith("*555*") || !inputMtn.value.endsWith("#") || !inputMtn.value.includes(pin)){
    mtnSpan.innerHTML= "<span class=val> INVALID PIN, CHECK AGAIN</span> "
  } else if (networkOption.value !== "MTN"){
    mtnSpan.innerHTML = "<span class=val> INVALID NETWORK PROVIDER</span> "
  } else{
    mtnSpan.innerHTML = "You have recharged " + networkOption.value + " of " + generateInput.value + " <span class=suc> SUCCESSFUL</span> "
  }
 gloSpan.innerHTML =""
 inputGlo.value=""
 airtelSpan.innerHTML = ""
 inputAirtel.value = ""
 etisalatSpan.innerHTML = ""
 inputEtisalat.value = ""
}


function loadAirtel(){

  let pin = document.getElementById("pinDisplay").innerHTML


    if(!inputAirtel.value.startsWith("*141*") || !inputAirtel.value.endsWith("#") || !inputAirtel.value.includes(pin)){
        airtelSpan.innerHTML= "<span class=val> INVALID PIN, CHECK AGAIN</span> "
      } else if (networkOption.value !== "AIRTEL"){
        airtelSpan.innerHTML = "<span class=val> INVALID NETWORK PROVIDER</span> "
      } else{
        airtelSpan.innerHTML = "You have recharged " + networkOption.value + " of " + generateInput.value + " <span class=suc> SUCCESSFUL</span> "
      }
     gloSpan.innerHTML =""
     inputGlo.value=""
     mtnSpan.innerHTML = ""
     inputMtn.value = ""
     etisalatSpan.innerHTML = ""
     inputEtisalat.value = ""
}


function loadEtisalat(){

  let pin = document.getElementById("pinDisplay").innerHTML


    if(!inputEtisalat.value.startsWith("*555*") || !inputEtisalat.value.endsWith("#") || !inputEtisalat.value.includes(pin)){
        etisalatSpan.innerHTML= "<span class=val> INVALID PIN, CHECK AGAIN</span> "
      } else if (networkOption.value !== "ETISALAT"){
        etisalatSpan.innerHTML = "<span class=val> INVALID NETWORK PROVIDER</span> "
      } else{
        etisalatSpan.innerHTML =  "You have recharged " + networkOption.value + " of " + generateInput.value + " <span class=suc> SUCCESSFUL</span> "
      }
     gloSpan.innerHTML =""
     inputGlo.value=""
     mtnSpan.innerHTML = ""
     inputMtn.value = ""
     airtelSpan.innerHTML = ""
  inputAirtel.value = ""

}