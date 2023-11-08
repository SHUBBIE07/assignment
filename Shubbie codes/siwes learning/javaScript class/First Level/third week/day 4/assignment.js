function display(){
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;
  let ptotal = document.getElementById("ptotal");
  let shoppingList = document.getElementById("shopping-list");
  
  let item = input1
  let price = Number(input2);
  let quantity = Number(input3);
  
  let total1 = price * quantity;

    
  let newItem = document.createElement("p");
  newItem.style.textAlign = "center"
  newItem.style.backgroundColor = "white"
  newItem.style.width ="1000px"
  newItem.style.margin = "4px auto"
  newItem.style.borderStyle = "solid"
  newItem.style.borderColor = "#f0f0f1"
  
  if (item === "" || price  === "" || quantity === "" ){
    alert("Inputs must not be empty")
  } else{
    newItem.innerHTML = "<b>Item🛒:</b> " + input1  +"<span></span>" + "<b>Price💸:</b> " + price + "<span></span>" +
  "<b>Quantity🤏:</b> " + quantity + "<span></span>" +  "<b> Sub-total🛒💸:</b> " + total1 + "<span></span>" +
  "<button onclick='clearItem(this)' class='btn'>Delete</button>" + "<button onclick='editItem(this)' class='btn'>Edit</button>"; 
  shoppingList.appendChild(newItem);
  }
  
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";

  ptotal.innerHTML = "Total: " + total1
}


function clearItem(item){

  item.parentElement.remove();

}




function editItem(item){
  let newShoppingItem = prompt("Enter new item🛒!", );
  let newPrice = prompt("Enter a new price💸!");
  let newQuantity = prompt("Enter a new quantity🤏!");

  let newTotal = Number(newPrice) * Number(newQuantity);

  item.parentElement.innerHTML = "<b>Item🛒:</b> " + newShoppingItem  +"<span></span>" + "<b>Price💸:</b> " + newPrice + "<span></span>" +
  "<b>Quantity🤏:</b> " + newQuantity + "<span></span>" +  "<b> Sub-total🛒💸:</b> " + newTotal + "<span></span>" +
  "<button onclick='clearItem(this)' class='btn'>Delete</button>" + "<button onclick='editItem(this)' class='btn'>Edit</button>";

  ptotal.innerHTML = "<b>Total:</b> " + total2; 

}
