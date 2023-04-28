var guessFriday = document.getElementById("guessFriday");
var friday = document.getElementById("friday");
var halloweenButton = document.getElementById("halloweenButton");
var halloween = document.getElementById("halloween");
var shiningButton = document.getElementById("shiningButton");
var shining = document.getElementById("shining");
var psychoButton = document.getElementById("psychoButton");
var psycho = document.getElementById("psycho");
var poltergeistButton = document.getElementById("poltergeistButton");
var poltergeist = document.getElementById("poltergeist");
var beetlejuiceButton = document.getElementById("beetlejuiceButton");
var beetlejuice = document.getElementById("beetlejuice");
var carrieButton = document.getElementById("carrieButton");
var carrie = document.getElementById("carrie");
var exorcistButton = document.getElementById("exorcistButton");
var exorcist = document.getElementById("exorcist");
var numCorrect =0;


guessFriday.addEventListener("click", function(event){
    var fridaysGuess = document.getElementById("fridaysGuess");
    if(fridaysGuess.value.toUpperCase() == "FRIDAY THE THIRTEENTH"){
        guessFriday.style.visibility = 'hidden';
        friday.innerHTML = 'FRIDAY THE THIRTEENTH';
        numCorrect++;
        checkForNext();
    }else{
        guessFriday.innerHTML = "Try Again";
    }
   
})

halloweenButton.addEventListener("click", function(event){
    var halloweenGuess = document.getElementById("halloweenGuess");
    if(halloweenGuess.value.toUpperCase() == "HALLOWEEN"){
        halloweenButton.style.visibility = 'hidden';
        halloween.innerHTML = 'HALLOWEEN';
        numCorrect++;
        checkForNext();
    }else{
        halloweenButton.innerHTML = "Try Again";
    }
   
})

shiningButton.addEventListener("click", function(event){
    var shiningGuess = document.getElementById("shiningGuess");
    if(shiningGuess.value.toUpperCase() == "THE SHINING"){
        shiningButton.style.visibility = 'hidden';
        shining.innerHTML = 'THE SHINING';
        numCorrect++;
        checkForNext();
    }else{
        shiningButton.innerHTML = "Try Again";
    }
   
})

psychoButton.addEventListener("click", function(event){
    var psychoGuess = document.getElementById("psychoGuess");
    if(psychoGuess.value.toUpperCase() == "PSYCHO"){
        psychoButton.style.visibility = 'hidden';
        psycho.innerHTML = 'PSYCHO';
        numCorrect++;
        checkForNext();
    }else{
        psychoButton.innerHTML = "Try Again";
    }
   
})

poltergeistButton.addEventListener("click", function(event){
    var poltergeistGuess = document.getElementById("poltergeistGuess");
    if(poltergeistGuess.value.toUpperCase() == "POLTERGEIST"){
        poltergeistButton.style.visibility = 'hidden';
        poltergeist.innerHTML = 'POLTERGEIST';
        numCorrect++;
        checkForNext();
    }else{
        poltergeistButton.innerHTML = "Try Again";
    }
   
})

beetlejuiceButton.addEventListener("click", function(event){
    var beetlejuiceGuess = document.getElementById("beetlejuiceGuess");
    if(beetlejuiceGuess.value.toUpperCase() == "BEETLEJUICE"){
        beetlejuiceButton.style.visibility = 'hidden';
        beetlejuice.innerHTML = 'BEETLEJUICE';
        numCorrect++;
        checkForNext();
    }else{
        beetlejuiceButton.innerHTML = "Try Again";
    }
   
})

carrieButton.addEventListener("click", function(event){
    var carrieGuess = document.getElementById("carrieGuess");
    if(carrieGuess.value.toUpperCase() == "CARRIE"){
        carrieButton.style.visibility = 'hidden';
        carrie.innerHTML = 'CARRIE';
        numCorrect++;
        checkForNext();
    }else{
        carrieButton.innerHTML = "Try Again";
    }
   
})

exorcistButton.addEventListener("click", function(event){
    var exorcistGuess = document.getElementById("exorcistGuess");
    if(exorcistGuess.value.toUpperCase() == "THE EXORCIST"){
        exorcistButton.style.visibility = 'hidden';
        exorcist.innerHTML = 'THE EXORCIST';
        numCorrect++;
        checkForNext();
    }else{
        exorcistButton.innerHTML = "Try Again";
    }
   
})

function checkForNext(){
    if (numCorrect == 8){
        window.location.assign("FinalProjectMemory.html")
    }
}