
var jsMilisec = 0;
var jsSec = 0;
var jsMin = 0;

var interval;

var htmlMilisec = document.querySelector('#min')
var htmlSec = document.querySelector('#sec')
var htmlMin = document.querySelector('#milisec')

function start(){
    interval = setInterval(function() {
        jsMilisec++
        htmlMilisec.innerText = jsMilisec

        if(jsMilisec >= 100){
            jsSec++
            htmlSec.innerText = jsSec
            jsMilisec = 0
        }
        else if(jsSec >= 59){
            jsMin++
            htmlMin.innerText = jsMin
            jsSec = 0
        }
    },10);

    document.querySelector('#btnn').disabled = true
}
function stop(){
    clearInterval(interval)
        document.querySelector('#btnn').disabled = false
    
}
function reset(){
    clearInterval(interval)
    jsMilisec = 0;
    jsSec = 0;
    jsMin = 0;

    htmlMilisec.innerText = jsMilisec;
    htmlSec.innerText = jsSec;
    htmlMin.innerText = jsMin;

    document.querySelector('#btnn').disabled = false
}
