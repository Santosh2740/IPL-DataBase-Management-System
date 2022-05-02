// write js code here corresponding to matches.html

function handleFiler(){
    var selected = document.getElementById("filterVenue").value;
        var arrAA=[];
 arr.forEach(function(elem){
     if(elem.teamVenue == selected ){
         arrAA.push(elem)
     }
 })
 console.log(arrAA)
 displayData(arrAA);
}

var arr = JSON.parse(localStorage.getItem('schedule'))
var bookMarkrr =JSON.parse(localStorage.getItem("favourites"))||[];

// function displayData(data)
arr.forEach(function(elem){
  
var tr = document.createElement("tr");

  // var div = document.createElement("tr")
  var name2 = document.createElement("td")
  name2.innerText=elem.matchNumber
  var number2 = document.createElement("td")
  number2.innerText=elem.teamOne
  var type2 = document.createElement("td")
  type2.innerText=elem.teamSec
  var type3 = document.createElement("td")
  type3.innerText=elem.teamdate
  var type4 = document.createElement("td")
  type4.innerText=elem.teamVenue
  var bookmar =document.createElement("td")
  bookmar.innerText="Favourites"
  bookmar.style.color="blue"
  bookmar.style.cursor="pointer"
  bookmar.addEventListener("click",function(){
    favouritesFunction(elem)
  })

  tr.append(name2,number2,type2,type3,type4,bookmar)
  document.querySelector("tbody").append(tr)
})

function favouritesFunction(elem){
  bookMarkrr.push(elem);
  localStorage.setItem("favourites",JSON.stringify(bookMarkrr))
}







