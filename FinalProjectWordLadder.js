// Declare the variables you want here
var wordGuess = document.getElementById("wordGuess");
var wordGuessHolder = document.getElementById("wordGuessHolder");
var card1 = document.getElementById("1");
var card2 = document.getElementById("2");
var card3 = document.getElementById("3");
var card4 = document.getElementById("4");
var card5 = document.getElementById("5");
var card6 = document.getElementById("6");
var card7 = document.getElementById("7");
// var card8 = document.getElementById("8");
var card9 = document.getElementById("9");
var card10 = document.getElementById("10");
var card11 = document.getElementById("11");
var card12 = document.getElementById("12");
var card13 = document.getElementById("13");
var card14 = document.getElementById("14");
var card15 = document.getElementById("15");
var card16 = document.getElementById("16");
var card17 = document.getElementById("17");
var card18 = document.getElementById("18");
var card19 = document.getElementById("19");
var card20 = document.getElementById("20");
var card21 = document.getElementById("21");
var card22 = document.getElementById("22");
var card23 = document.getElementById("23");
var card24 = document.getElementById("24");
var card25 = document.getElementById("25");
var card26 = document.getElementById("26");
var card27 = document.getElementById("27");
var card28 = document.getElementById("28");
var card29 = document.getElementById("29");
var card30 = document.getElementById("30");
var card31 = document.getElementById("31");
var card32 = document.getElementById("32");
var lastID = 1;       


    wordGuess.addEventListener("click", function(){
        if(lastID <= 7){
            if(wordGuessHolder.value.toUpperCase() == "HAUNTED"){
                correctFirstWord();
            }else if(lastID ==1){
                card2.src = "A.png"
                lastID = 2;
            }else if(lastID ==2){
                card3.src = "U.png"
                lastID = 3;
            }else if(lastID ==3){
                card4.src = "N.png"
                lastID = 4;
            }else if(lastID ==4){
                card5.src = "T.png"
                lastID = 5;
            }else if(lastID ==5){
                card6.src = "E.png"
                lastID = 6;
            }else if(lastID ==6){
                card7.src = "D.png"
                lastID = 7;
            }
        }else if(lastID <= 13 && lastID >=8){
            if(wordGuessHolder.value.toUpperCase() == "HOUSE"){
                correctSecondWord();
            }else if(lastID == 9){
                card10.src = "O.png"
                lastID = 10;
            }else if(lastID == 10){
                card11.src = "U.png"
                lastID = 11;
            }else if(lastID == 11){
                card12.src = "S.png"
                lastID = 12;
            }else if(lastID == 12){
                card13.src = "E.png"
                lastID = 13;
            }
        }else if(lastID <= 18 && lastID >= 14){
            if(wordGuessHolder.value.toUpperCase() == "PARTY"){
                correctThirdWord();
            }else if(lastID == 14){
                card15.src = "A.png"
                lastID = 15;
            }else if(lastID == 15){
                card16.src = "R.png"
                lastID = 16;
            }else if(lastID == 16){
                card17.src = "T.png"
                lastID = 17;
            }else if(lastID == 17){
                card18.src = "Y.png"
                lastID = 18;
            }
        }else if(lastID <= 22 && lastID >=19){
            if(wordGuessHolder.value.toUpperCase() == "TIME"){
                correctFourthWord();
            }else if(lastID == 19){
                card20.src = "I.png"
                lastID = 20;
            }else if(lastID == 20){
                card21.src = "M.png"
                lastID = 21;
            }else if(lastID == 21){
                card22.src = "E.png"
                lastID = 22;
            }
        }else if(lastID <=32 && lastID >= 23){
            if(wordGuessHolder.value.toUpperCase() == "COMPLEXITY"){
                correctFifthWord();
            }else if(lastID == 23){
                card24.src = "O.png"
                lastID = 24;
            }else if(lastID == 24){
                card25.src = "M.png"
                lastID = 25;
            }else if(lastID == 25){
                card26.src = "P.png"
                lastID = 26;
            }else if(lastID == 26){
                card27.src = "L.png"
                lastID = 27;
            }else if(lastID == 27){
                card28.src = "E.png"
                lastID = 28;
            }else if(lastID == 28){
                card29.src = "X.png"
                lastID = 29;
            }else if(lastID == 29){
                card30.src = "I.png"
                lastID = 30;
            }else if(lastID == 30){
                card31.src = "T.png"
                lastID = 31;
            }else if(lastID == 31){
                card32.src = "Y.png"
                lastID = 32;
            }
        }
    });

        
function correctFirstWord(){
    card2.src = "A.png"
    card3.src = "U.png"
    card4.src = "N.png"
    card5.src = "T.png"
    card6.src = "E.png"
    card7.src = "D.png"
    card9.src = "H.png"
    lastID = 9;
}

function correctSecondWord(){
    card10.src = "O.png"
    card11.src = "U.png"
    card12.src = "S.png"
    card13.src = "E.png"
    card14.src = "P.png"
    lastID = 14;
}

function correctThirdWord(){
    card15.src = "A.png"
    card16.src = "R.png"
    card17.src = "T.png"
    card18.src = "Y.png"
    card19.src = "T.png"
    lastID = 19;
}

function correctFourthWord(){
    card20.src = "I.png"
    card21.src = "M.png"
    card22.src = "E.png"
    card23.src = "C.png"

    lastID = 23;
}  

function correctFifthWord(){
    card24.src = "O.png"
    card25.src = "M.png"
    card26.src = "P.png"
    card27.src = "L.png"
    card28.src = "E.png"
    card29.src = "X.png"
    card30.src = "I.png"
    card31.src = "T.png"
    card32.src = "Y.png"

    window.location.assign("FinalProjectSuccess.html")
}  





