
let myHours = document.getElementById("myHours");
let myMinutes = document.getElementById("myMinutes");
let mySeconds = document.getElementById("mySeconds");

setInterval(() => {
    let date = new Date();
    myHours.innerHTML = (date.getHours() % 12 || 12).toString().padStart(2, '0');
    myMinutes.innerHTML = date.getMinutes().toString().padStart(2, '0');
    mySeconds.innerHTML = date.getSeconds().toString().padStart(2, '0');
});

function display() {
    let date = new Date();

    let inputAlarm1 = Number(document.getElementById("inputAlarm1").value);
    let inputAlarm2 = Number(document.getElementById("inputAlarm2").value);

    let setAlarmButton = document.getElementById("setAlarmButton")
    let setAlarm1 = document.getElementById("setAlarm1")

    let set = document.createElement("P")
    set.style.margin = "20px auto"
    set.style.textAlign = "center"
    set.style.paddingTop = "10px"
    set.style.justifyContent = "center"
    set.style.backgroundColor = "#FFE4C4"
    set.style.height = "120px"
    set.style.width = "230px"
    set.style.fontSize = "40px"
    set.style.color = "black"
    set.style.border = "1px solid #FF8A00"

    set.innerHTML = inputAlarm1 + ":" + inputAlarm2 + "<br>" + "<div class='setBtn'><button onclick='deleteAlarm(this)' class='delete'>Delete</button>  <button onclick='editAlarm(this)' class='edit'>Edit</button></div>"
    setAlarm1.appendChild(set)
  

    let alarmAudio = document.getElementById("audio1");

            if( (myHours.value === inputAlarm1) && (myMinutes.value  === inputAlarm2 )) {
                alarmAudio.play();
            }



}


function deleteAlarm(element) {
    element.parentElement.parentElement.remove();

    let setAlarm1 = document.getElementById("setAlarm1");
    let alarms = setAlarm1.querySelectorAll('p');


    if (alarms.length === 0) {
        let alarmAudio = document.getElementById("audio1");
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
    }

}

function editAlarm(element) {
    let newHours = prompt("Enter The Hours:");
    let newMinutes = prompt("Enter The Minutes:");

    if (newHours !== null && newMinutes !== null) {
        element.parentElement.parentElement.innerHTML = newHours + ":" + newMinutes + "<br>" + "<div class='setBtn'><button onclick='deleteAlarm(this)' class='delete'>Delete</button>  <button onclick='editAlarm(this)' class='edit'>Edit</button></div>";
    }


    let currentHours = parseInt(myHours.innerText, 10);
    let currentMinutes = parseInt(myMinutes.innerText, 10);
  

    if (currentHours === parseInt(newHours, 10) && currentMinutes === parseInt(newMinutes, 10)) {
        let alarmAudio = document.getElementById("audio1");
        alarmAudio.play();
    }

}

function stop() {
    let alarmAudio = document.getElementById("audio1");
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
}

