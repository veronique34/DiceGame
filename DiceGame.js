/*-------------------------------------*/
/* definition of constants           
/*------------------------------------*/
const choosePlayer = "To Start The Game, Please Select The First Player";
const theWinnerIs = " WINNER ! ";
const maximumScore = 100;
const diceFaceImage = /* image of each face of the dice */
['./images/dice-1.svg',
  './images/dice-2.svg',
  './images/dice-3.svg',
  './images/dice-4.svg',
  './images/dice-5.svg',
  './images/dice-6.svg'];

/*-------------------------------------------------*/
/* definition of HTML node elements to be modified by JS
/*-------------------------------------------------*/
const roundScoreElement1 = document.getElementById('roundScore1'); /*<h2*/
const roundScoreElement2 = document.getElementById('roundScore2');
const globalScoreElement1 = document.getElementById('globalScore1');/*h1*/
const globalScoreElement2 = document.getElementById('globalScore2');
const tickPlayerElement1 = document.getElementById('tickPlayer1'); /*img*/
const tickPlayerElement2 = document.getElementById('tickPlayer2'); 
const diceIconElement = document.getElementById('diceIcon');  
const holdScoreElement = document.getElementById('holdScore');      /*img*/
const textPlayerElement1 = document.getElementById('textPlayer1');    /*h3*/
const textPlayerElement2 = document.getElementById('textPlayer2');    /*h3*/
const newGameElement = document.getElementById("newGame");

/*-------------------------------------------------*/
/*definition and initialization of global variables
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
/*-------------------------------------------------------*/
/* initialization of listening events 
/*-----------------------------------------------------*/
tickPlayerElement1.addEventListener('touchend', removeHoverEffect);
tickPlayerElement2.addEventListener('touchend', removeHoverEffect);
diceIconElement.addEventListener('touchend', removeHoverEffect);
holdScoreElement.addEventListener('touchend', removeHoverEffect);
newGameElement.addEventListener('touchend', removeHoverEffect);

/*-------------------------------------------------*/
/* definition of local fonctions   
/*-------------------------------------------------*/
/* function returning randomly an integer between 1 and 6 */
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
/*-------------------------------------------------*/
/* function called upon selecting the dice image
/* displays the correct dice face
/*  according to random number and 
/* calculates the current score 
/*-------------------------------------------------*/
function throwDice() {
  if (globalScore1 >= maximumScore) {return;}
  if (globalScore2 >= maximumScore) {return;}
  if (currentPlayer ==0)
  {
    alert(choosePlayer);
    return;}
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
}
/*-------------------------------------------------
/*  function called upon clicking the 
/*  icon new game, re-initializes all variables
/*-------------------------------------------------*/
function selectNewGame() {
  currentPlayer =0;
  roundScore1 = 0 ;
  roundScore2 = 0; 
  globalScore1 = 0;
  globalScore2 = 0;
  roundScoreElement1.textContent = roundScore1;
  roundScoreElement2.textContent = roundScore2;
  globalScoreElement1.textContent = globalScore1; 
  globalScoreElement2.textContent = globalScore2; 
  tickPlayerElement1.src = "./images/circle.svg";
  tickPlayerElement2.src = "./images/circle.svg";
  textPlayerElement1.textContent = "PLAYER 1 ";
  textPlayerElement2.textContent = "PLAYER 2 ";
  textPlayerElement1.style.color = 'black';
  textPlayerElement2.style.color = 'black';
  alert(choosePlayer);
}
/*-------------------------------------------------*/
/* fonctions set the currentplayer and tick the box
/*-------------------------------------------------*/
function selectPlayer1() {
  if (currentPlayer == 0) /*no initial selection*/
  {
  currentPlayer = 1;
  tickPlayerElement1.src = "./images/check2-circle.svg";
  tickPlayerElement2.src = "./images/circle.svg";
 }
}
function selectPlayer2() {
  if (currentPlayer == 0) /* no initial selection */
  {
  currentPlayer = 2;
  tickPlayerElement2.src = "./images/check2-circle.svg";
  tickPlayerElement1.src = "./images/circle.svg";
  }
}
/*-------------------------------------------------*/
/* Function called when the player clicks on "hold", 
/* its round score is added to the global score .
/* if the maximum of 100 is reached, the game is 
/* stopped and the winner est indicated
/*-------------------------------------------------*/
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
    if (globalScore1 >= maximumScore)
    { textPlayerElement1.style.color = 'red';
      textPlayerElement1.textContent = theWinnerIs;
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
    if (globalScore2 >= maximumScore)
    { textPlayerElement2.style.color = 'red';
      textPlayerElement2.textContent = theWinnerIs;
      return;
    }
    currentPlayer=0; 
    selectPlayer1();
    break;
  }
}
/*-------------------------------------------------
/* fct removes all hover effet at once. It is      
/* called in JS with an event listener on 'touchend'   
/* , while touching the screen is directly delt with 
/* in the html with 'ontouchscreen'
/*-------------------------------------------------*/
function removeHoverEffect() {
  tickPlayerElement1.classList.remove('hover-effect');
  tickPlayerElement2.classList.remove('hover-effect');
  diceIconElement.classList.remove('hover-effect');
  holdScoreElement.classList.remove('hover-effect');
  newGameElement.classList.remove('hover-effect'); 
}


