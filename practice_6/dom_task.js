"use strict";

function btnClick1() {
    let wordvalue = document.getElementById("wordinput").value;
    let changetext = document.getElementById("changetext");
    changetext.classList.remove("change1" , "change2" , "change3" , "change4");
    changetext.textContent = wordvalue;
}

function btnClick2() {
    let wordvalue = document.getElementById("wordinput").value;
    let changetext = document.getElementById("changetext");
    changetext.classList.remove("change1" , "change2" , "change3" , "change4");
    changetext.classList.add("change1");
    changetext.textContent = wordvalue;
}

function btnClick3() {
    let wordvalue = document.getElementById("wordinput").value;
    let changetext = document.getElementById("changetext");
    changetext.classList.remove("change1" , "change2" , "change3" , "change4");
    changetext.classList.add("change2");
    changetext.textContent = wordvalue;
}

function btnClick4() {
    let wordvalue = document.getElementById("wordinput").value;
    let changetext = document.getElementById("changetext");
    changetext.classList.remove("change1" , "change2" , "change3" , "change4");
    changetext.classList.add("change3");
    changetext.textContent = wordvalue;
}