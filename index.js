// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",formsubmitFunction);
var matchArr= JSON.parse(localStorage.getItem("schedule"))||[];


function formsubmitFunction(){
    event.preventDefault();

    var matchObj ={
        matchNumber: document.querySelector("#matchNum").value,
        teamOne : document.querySelector("#teamA").value,
        teamSec : document.querySelector("#teamB").value,
        teamdate : document.querySelector("#date").value,
        teamVenue : document.querySelector("#venue").value,

    };
    matchArr.push(matchObj);
    console.log(matchArr)
    localStorage.setItem("schedule",JSON.stringify(matchArr));
    window.location.href ="matches.html"
}
