let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

function displayNum(num){
    input1.value += num
}

function operate(a) {
   sign = a
  input2.value = input1.value
  input1.value = ""
}

function del(){
  input1.value = ""
  input2.value = "0"
}

function del1(){
  input1.value = input1.value.substring(0, input1.value.length -1)
  if(input1.value.length === 0){
    input2.value = "0"
  }
}

function result() {
  let num1 = input1.value
  let num2 = input2.value

  if(sign === "+"){
    input2.value = Number(num2) + Number(num1)
  }
  else if(sign === "-"){
    input2.value = Number(num2) - Number(num1)
  }
  else if(sign === "*"){
    input2.value = Number(num2) * Number(num1)
  }
  else if(sign === "/"){
    input2.value = Number(num2) / Number(num1)
  }
 
}
