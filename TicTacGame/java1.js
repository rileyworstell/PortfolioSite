const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
var wins = document.getElementById("wins");
var numOfWins = document.getElementById("numOfWins");
var winCount = 0;
var aiWinCount = 0;
var aiWins = document.getElementById("aiwins");
var aiNumOfWins = document.getElementById("numOfAiWins");


var arr = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

var Turn = true;
playerMark = "X";
aiMark = "O";
var markColor = "white";


function startGame(thisBox) {

   if (Turn) {
       // to ensure after first game 
       wins.innerHTML = "";
       //Mark Users Selection
       document.getElementById(thisBox).classList.toggle("fade");
       document.getElementById(thisBox).innerHTML = playerMark;
       document.getElementById(thisBox).style.color = markColor;
       
       // Drop from array
       arr.splice(arr.indexOf(thisBox),1);
       // Change Turn
       Turn = !Turn;
       checkForWin();
       // make sure the same is not over
       if( wins.innerHTML != "You Win") {
                aiTurn();
    
       }
   } 

}

function hardAiTurn() {
     alert("this is ahrd");
    // while it is the AI's turn
    while(!Turn) {  
        // randomly select from array // select Move
        tryMove = arr[Math.floor(Math.random()*arr.length)];
        console.log("tryMove " + String(tryMove));
        if(document.getElementById(tryMove).innerHTML == "o") {
            // remove from array
            arr.splice(arr.indexOf(tryMove),1);
            // select Ai's turn
            document.getElementById(tryMove).classList.toggle("fade");
             document.getElementById(tryMove).innerHTML = "O";
             document.getElementById(tryMove).style.color = "white";
             // change back to users turn
             Turn = !Turn;
             checkForWin();
         }
         
        }
        console.log(arr);
}



function aiTurn() {

   
    // while it is the AI's turn
    while(!Turn) {  
        // randomly select from array // select Move
        tryMove = arr[Math.floor(Math.random()*arr.length)];
        console.log("tryMove " + String(tryMove));
        if(document.getElementById(tryMove).innerHTML == "o") {
            // remove from array
            arr.splice(arr.indexOf(tryMove),1);
            // select Ai's turn
            document.getElementById(tryMove).classList.toggle("fade");
             document.getElementById(tryMove).innerHTML = "O";
             document.getElementById(tryMove).style.color = "white";
             // change back to users turn
             Turn = !Turn;
             checkForWin();
         }
         
        }
        console.log(arr);
}

function checkForWin() {
    // Horizonal Wins
    
    if((box1.innerHTML == playerMark) && (box2.innerHTML == playerMark) && (box3.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
    if((box4.innerHTML == playerMark) && (box5.innerHTML == playerMark) && (box6.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
    if((box7.innerHTML == playerMark) && (box8.innerHTML == playerMark) && (box9.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
    // Verticle Wins
    if((box1.innerHTML == playerMark) && (box4.innerHTML == playerMark) && (box7.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
    if((box2.innerHTML == playerMark) && (box5.innerHTML == playerMark) && (box8.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
    if((box3.innerHTML == playerMark) && (box6.innerHTML == playerMark) && (box9.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
    // Diagonal
    if((box1.innerHTML == playerMark) && (box5.innerHTML == playerMark) && (box9.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
    if((box3.innerHTML == playerMark) && (box5.innerHTML == playerMark) && (box7.innerHTML == playerMark)) {
        clearBoard(playerMark);
    }
// AI Wins
// Horizonal Wins

if((box1.innerHTML == aiMark) && (box2.innerHTML == aiMark) && (box3.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
if((box4.innerHTML == aiMark) && (box5.innerHTML == aiMark) && (box6.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
if((box7.innerHTML == aiMark) && (box8.innerHTML == aiMark) && (box9.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
// Verticle Wins
if((box1.innerHTML == aiMark) && (box4.innerHTML == aiMark) && (box7.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
if((box2.innerHTML == aiMark) && (box5.innerHTML == aiMark) && (box8.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
if((box3.innerHTML == aiMark) && (box6.innerHTML == aiMark) && (box9.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
// Diagonal
if((box1.innerHTML == aiMark) && (box5.innerHTML == aiMark) && (box9.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
if((box3.innerHTML == aiMark) && (box5.innerHTML == aiMark) && (box7.innerHTML == aiMark)) {
    clearBoard(aiMark);
}
checkForCat();
}

var grid = document.getElementById("grid").children;



function clearBoard(winner) {
    if(winner == playerMark) {
        wins.innerHTML = "You Win";
        winCount++;
        numOfWins.innerHTML = winCount;
    }
    else {
        wins.innerHTML = "You Lose";
        numOfAiWins.innerHTML = "AI Wins";
        aiWins.innerHTML = "Ai Wins";
        aiWinCount++;
        aiNumOfWins.innerHTML = aiWinCount;
    }
    // clear board
    
    for (i = 0; i < grid.length; i++) {
        grid[i].classList.remove("fade");
        grid[i].innerHTML = "o";
        grid[i].style.color = "#333";
    }
    // reset Game
  
    wins.style.color = "white";
    Turn = true;
    arr = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];

    return;
}

function checkForCat() {
    //alert("checking for cat");
     if((box1.innerHTML != "o") && (box2.innerHTML != "o") && (box3.innerHTML != "o") && (box4.innerHTML != "o") &&(box5.innerHTML != "o") &&(box6.innerHTML != "o") &&(box7.innerHTML != "o") &&(box8.innerHTML != "o") &&(box9.innerHTML != "o")) {
       wins.innerHTML = "CAT ATE IT";
        for (i = 0; i < grid.length; i++) {
            grid[i].classList.toggle("fade");
            grid[i].innerHTML = "o";
            grid[i].style.color = "#333";
        }
        Turn = true;
    arr = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];


     } 
   }


