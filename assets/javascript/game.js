// Click button ---> Random number generates to begin game.

function randomNumber() {

    var randomNum = Math.floor(Math.random() * 120) + 19;

    console.log(randomNum);

    $("#rndm-nmbr").append("<h2>" + randomNum + "</h2>");


}
randomNumber();


var redCrystalNum = Math.floor(Math.random() * 13) + 1;
var blueCrystalNum = Math.floor(Math.random() * 13) + 1;
var yellowCrystalNum = Math.floor(Math.random() * 13) + 1;
var greenCrystalNum = Math.floor(Math.random() * 13) + 1;


    $("#redcrystal").on('click', function () {   
         
        if (redCrystalNum !== blueCrystalNum && redCrystalNum !== yellowCrystalNum && redCrystalNum !== greenCrystalNum){
            scoreSum.push(redCrystalNum); 
            console.log(redCrystalNum);
        } else {
            redCrystalNum = Math.floor(Math.random() * 13) + 1;
        }
       
    });




    $("#bluecrystal").on('click', function () { 
        if (blueCrystalNum !== redCrystalNum && blueCrystalNum !== yellowCrystalNum && blueCrystalNum !== greenCrystalNum){
            scoreSum.push(blueCrystalNum); 
            console.log(blueCrystalNum);
        } else {
            blueCrystalNum = Math.floor(Math.random() * 13) + 1;
        } 
         
    });





    $("#yellowcrystal").on('click', function () {
        if (yellowCrystalNum !== redCrystalNum && yellowCrystalNum !== blueCrystalNum && yellowCrystalNum !== greenCrystalNum){
            scoreSum.push(yellowCrystalNum); 
            console.log(yellowCrystalNum);
        } else {
            yellowCrystalNum = Math.floor(Math.random() * 13) + 1;
        }
         
    });



    $("#greencrystal").on('click', function () {  
        if (greenCrystalNum !== redCrystalNum && greenCrystalNum !== blueCrystalNum && greenCrystalNum !== yellowCrystalNum){
            scoreSum.push(greenCrystalNum);
            console.log(greenCrystalNum);
        } else {
            greenCrystalNum = Math.floor(Math.random() * 13) + 1;
        } 
        
    });

var scoreSum = []
console.log(scoreSum);



// Generate random numbers for each crystal ---> save to var

// Sum crystal vars on click, 

// Check against randomNum, 

// If = display win, 

// If greater than display lose

