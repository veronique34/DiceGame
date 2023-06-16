/*-------------------------------------*/
/* definition of constants           */
/*------------------------------------*/
const choosePlayer = "To Start The Game, Please Select The First Player";
const theWinnerIs = " Hurray!!, the winner of this game is Player "
/*-------------------------------------------------*/
/* definition of HTML elements to be modified by JS*/
/*-------------------------------------------------*/
const roundScoreElement1 = document.getElementById('roundScore1');
const roundScoreElement2 = document.getElementById('roundScore2');
const globalScoreElement1 = document.getElementById('globalScore1');
const globalScoreElement2 = document.getElementById('globalScore2');
const tickPlayerElement1 = document.getElementById('tickPlayer1');
const tickPlayerElement2 = document.getElementById('tickPlayer2');
const diceIcon = document.getElementById('diceIcon');
console.log(tickPlayerElement1);
console.log(tickPlayerElement2);
// Get a reference to the image element
const imageElement = document.getElementById("new-game");


/* exécution of initialisation */
/*-------------------------------------------------*/
/*definition and initialization of global variables*/
/*-------------------------------------------------*/
var currentPlayer = 0; /* means no player selected */
var roundScore1 = 0;
var roundScore2 = 0;
var globalScore1 = 0;
var globalScore2 = 0;
roundScoreElement1.textContent = roundScore1;
roundScoreElement2.textContent = roundScore2;
globalScoreElement1.textContent = globalScore1; 
globalScoreElement2.textContent = globalScore2;  
/*-------------------------------------------------*/
/* definition of local fonctions   */
/*-------------------------------------------------*/
/* function returning randomly an integer between 1 and 6 */
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
function throwDice() {
  if (currentPlayer ==0)
  {
    alert(choosePlayer);
    return;}
  let diceFaceImage = ['./images/dice-1-fill.svg',
  './images/dice-2-fill.svg',
  './images/dice-3-fill.svg',
  './images/dice-4-fill.svg',
  './images/dice-5.svg',
  './images/dice-6.svg'];
  let diceFace;
  diceFace = getRandomNumber();
  diceIcon.src = diceFaceImage[diceFace-1];
  
  if (currentPlayer==1) {
    if (diceFace == 1)
      {roundScore1=0;
      currentPlayer =0;
      selectPlayer2();
      }
    else {
      roundScore1 = roundScore1 + diceFace;
      } 
    roundScoreElement1.textContent = roundScore1;
  }
  else {
    if (diceFace == 1)
      {roundScore2=0;
      currentPlayer=0;
      selectPlayer1();
      }
    else {
      roundScore2 = roundScore2 + diceFace;
    } 
    roundScoreElement2.textContent = roundScore2;
  }
  console.log("dice for player",currentPlayer,roundScore1,roundScore2)
  console.log(diceIcon.style.color);
  console.log("globalScore1",globalScoreElement1.textContent);
  console.log("globalScore2",globalScoreElement2.textContent);
  console.log("roundScore1",roundScoreElement1.textContent);
  console.log("roundScore2",roundScoreElement2.textContent);
}
function selectNewGame() {
  if (currentPlayer ==0)
  {
    alert(choosePlayer);
    return;
  }
  console.log('select new game');
  roundScore1 = 0 ;
  roundScore2 = 0; 
  globalScore1 = 0;
  globalScore2 = 0;
  roundScoreElement1.textContent = roundScore1;
  roundScoreElement2.textContent = roundScore2;
  globalScoreElement1.textContent = globalScore1; 
  globalScoreElement2.textContent = globalScore2;  
}
function selectPlayer1() {
  if (currentPlayer == 0) /*no initial selection*/
  {
  currentPlayer = 1;
  console.log("selected player", currentPlayer);
  tickPlayerElement1.src = "./images/check2-circle.svg";
  tickPlayerElement2.src = "./images/circle.svg";
}
}
function selectPlayer2() {
  if (currentPlayer == 0) /* no initial selection */
  {
  currentPlayer = 2;
  console.log("selected player", currentPlayer);
  tickPlayerElement2.src = "./images/check2-circle.svg";
  tickPlayerElement1.src = "./images/circle.svg";
  }
}
/* When the player clicks on "hold", its round score is added to the global score */
function holdInGlobalScore()
{ 
  switch (currentPlayer) {
  case 0:
    alert(choosePlayer);
    return;
  case 1:
    globalScore1 =  globalScore1 + roundScore1;
    globalScoreElement1.textContent = globalScore1;
    roundScore1 = 0;
    roundScoreElement1.textContent = roundScore1;
    if (globalScore1 >= 100)
    {alert (theWinnerIs,currentPlayer);
      return;
    }
    currentPlayer=0; 
    selectPlayer2();
    break;
  case 2:
    globalScore2 =  globalScore2 + roundScore2;
    globalScoreElement2.textContent = globalScore2;
    roundScore2 = 0;
    roundScoreElement2.textContent = roundScore2;
    if (globalScore2 >= 100)
    {alert (theWinnerIs,currentPlayer);
      return;
    }
    currentPlayer=0; 
    selectPlayer1();
    break;
  }

}



