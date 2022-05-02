// write js code here corresponding to favourites.html

var display =JSON.parse(localStorage.getItem("favourites"))
    
displayData(display);

function displayData(data){
data.forEach(function(elem,index){
  
  var tr = document.createElement("tr");

    // var div = document.createElement("tr")
    var name2 = document.createElement("td")
    name2.innerText=elem.matchNumber;
    var number2 = document.createElement("td")
    number2.innerText=elem.teamOne
    var type2 = document.createElement("td")
    type2.innerText=elem.teamSec
    var type3 = document.createElement("td")
    type3.innerText=elem.teamdate;
    var type4 = document.createElement("td")
    type4.innerText=elem.teamVenue;
    var dele = document.createElement("td")
    dele.innerText="Delete";
    dele.style.color="red";
    dele.style.cursor="pointer"
    dele.setAttribute("class","DelBtn")
    dele.addEventListener("click", function(){
      deleteItem(elem,index)
      
    })
    

    tr.append(name2,number2,type2,type3,type4,dele)
    document.querySelector("tbody").append(tr)
  })
}

function deleteItem(elem,index){
  display.splice(index,1);
  localStorage.setItem("favourites",JSON.stringify(display))
  window.location.reload();

}