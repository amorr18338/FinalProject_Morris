// Declare the variables you want here
var swatches = document.getElementsByClassName("square");
 

// var reset = document.getElementById("reset");

var cardsFlipped = 0;
var holdId = 0;
var currentId =0;
var holdIdNum = 0;
var numCardsRemoved = 0;





// This calls the init function when the page first loads
init();

// Init is just anything you want to have happen when the page loads
function init(){
    
    // Add your setup code/functions here
    Array.from(swatches).forEach(function(swatch){
         
        swatch.addEventListener("click", function(){
            cardsFlipped++;

        // console.log(swatch.id);
        if (swatch.id == 1 || swatch.id == 17){
            swatch.src = "Bats.jpg";
        }else if(swatch.id == 11 || swatch.id == 7){
            swatch.src = "BlackCat.jpg";
        }else if(swatch.id == 2 || swatch.id == 5){
            swatch.src = "Zombie.jpg";
        }else if(swatch.id == 13 || swatch.id == 14){
            swatch.src = "skeleton.jpg";
        }else if(swatch.id == 18 || swatch.id == 20){
            swatch.src = "cauldron.jpg";
        }else if(swatch.id == 3 || swatch.id == 19){
            swatch.src = "ghost.jpg";
        }else if(swatch.id == 4 || swatch.id == 12){
            swatch.src = "BloodMoon.jpg";
        }else if(swatch.id == 6 || swatch.id == 9){
            swatch.src = "clown.jpg";
        }else if(swatch.id == 8 || swatch.id == 10){
            swatch.src = "slasher.jpg";
        }else if(swatch.id == 15 || swatch.id == 16){
            swatch.src = "shadow.jpg";
        }
        currentId = swatch.src;
        if (cardsFlipped ==2){
            if (checkforMatch() == true){
                setTimeout(() => {
                    swatch.style.visibility = 'hidden';
                    swatches[holdIdNum-1].style.visibility = 'hidden';
                  }, 1000);
                  numCardsRemoved +=2;
                  if (numCardsRemoved==20){
                    // reset.href = "FinalProject_Morris.html";
                    // reset.innerHTML = "Next Room";
                    window.location.assign("FinalProjectWordLadder.html")
                  }
                
            }else{
                setTimeout(() => {
                    swatch.src = "JackOLantern.jpg"
                    swatches[holdIdNum-1].src = "JackOLantern.jpg";
                  }, 1000); 
            }
        }else{
            holdId = swatch.src;
            holdIdNum = swatch.id;
        }
        console.log(currentId);
        
        
                });

        

    })

};

function checkforMatch(){
    cardsFlipped = 0;
    if(holdId == currentId){
        return true
    }else{
        return false;
    }
}

// I STRONGLY suggest you wrap all your remaining code in functions
// In fact you probably won't get the app working if you don't


