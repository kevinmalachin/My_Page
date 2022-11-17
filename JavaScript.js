
function centesimiInSessantesimi(){
    let input = prompt("Inserisci il valore in centesimi.");
    if(input!="") {
        document.getElementById("resultp").innerHTML = `il valore in sessantesimi è ${input * (60/100)}`;
    } else {
        document.getElementById("resultp").innerHTML = `Vuoto!`;
    }

}




/*


*/