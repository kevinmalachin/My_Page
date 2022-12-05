


function centesimiInSessantesimi(){
    let input = prompt("Inserisci il valore in centesimi.");
    if(input!="") {
        document.getElementById("resultp").innerHTML = `il valore in sessantesimi è ${input * (60/100)}`;
    } else {
        document.getElementById("resultp").innerHTML = `Vuoto!`;
    }

}



function oreInMinuti(){
    let input = prompt("Inserisci il valore in Ore");
        if (input!="") {
            document.getElementById("idore").innerHTML = `il valore in minuti è ${input * 60}`;
        } else {
            document.getElementById("idore").innerHTML = `Vuoto!`;
        }
}


function minutiInOre(){
    let input = prompt("Inserisci il valore in Minuti");
    if (input!="") {
        document.getElementById("idminuti").innerHTML = `il valore in ore è ${input / 60}`;
    } else {
        document.getElementById("idminuti").innerHTML = `Vuoto!`;
    }
}


/*

https://web.dev/read-files/#select-input

*/