
var cardArray = ["1clubs.png", "1hearts.png", "2clubs.png", "2hearts.png",
"3clubs.png", "3hearts.png"];

function shuffleArray(array)
 {
    for(var i = array.length - 1; i > 0; i--)
    {
        random = getRandomInt(0, 6);
        var temp = array[i]
        array[i] = array[random];
        array[random] = temp;
    }
    return array;
 }

 
cardArray = shuffleArray(cardArray);

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

var cardIDs = ["card1","card2", "card3", "card4", "card5", "card6"];

// let pauseCards = false;

function changeCard (event)
{
    var index = 0;
    var cardClick = event.target;
    for(var i = 0; i < cardIDs.length; i++)
    {
        if (cardClick.id ==  cardIDs[i]) 
        {
            index = [i];
        }
    }
    cardClick.src = cardArray[index];
}

function resetCards()
{

    location.reload();
}

var firstPick = true;
var firstPickCard = "";
var firstPickIndex;

function changePause (event)
{
    var cardClick = event.target;
    if(cardClick.getAttribute("disabled") != "true")
    {

    var index = 0;
    for(var i = 0; i < cardIDs.length; i++)
    {
        if (cardClick.id ==  cardIDs[i]) 
        {
            index = [i];
        }
    }
    
    if(firstPick == true)
    {
        firstPickCard = cardIDs[index];
        cardClick.src = cardArray[index];
        firstPickIndex = index;
        firstPick = false;
    }
    else
    {
        
        var firstPickLocal = firstPickCard;
        var firstIndexLocal = firstPickIndex;
        cardClick.src = cardArray[index];


        cardOne.removeEventListener("click", changePause);
        cardTwo.removeEventListener("click", changePause);
        cardThree.removeEventListener("click", changePause);
        cardFour.removeEventListener("click", changePause);
        cardFive.removeEventListener("click", changePause);
        cardSix.removeEventListener("click", changePause);
    

        
        if(cardArray[firstIndexLocal].charAt(0) == cardArray[index].charAt(0))
        {

        setTimeout(()=> {
            cardOne.addEventListener("click", changePause);
        cardTwo.addEventListener("click", changePause);
        cardThree.addEventListener("click", changePause);
        cardFour.addEventListener("click", changePause);
        cardFive.addEventListener("click", changePause);
        cardSix.addEventListener("click", changePause);
        cardClick.src = "clear.png";
        cardClick.setAttribute("disabled", "true");
        document.getElementById(firstPickLocal).src = "clear.png";
        document.getElementById(firstPickLocal).setAttribute("disabled", "true");
                        }, 1500);

           
        }
        else
        {

        setTimeout(()=> {
            cardOne.addEventListener("click", changePause);
        cardTwo.addEventListener("click", changePause);
        cardThree.addEventListener("click", changePause);
        cardFour.addEventListener("click", changePause);
        cardFive.addEventListener("click", changePause);
        cardSix.addEventListener("click", changePause);
        cardClick.src = "back.png";
        document.getElementById(firstPickLocal).src = "back.png";
        
                        }, 1500);
        }

        firstPickIndex = null;
        firstPickCard = "";
        firstPick = true;
    }

}
}

images = document.getElementsByTagName("img");

function blockMoves() {
    var time = new Date().getTime();
    var endTime = time + 1500;
    var count = 0;
    do {
        count++;
    } while (new Date().getTime() < endTime);
}

var cardOne = document.getElementById("card1");
cardOne.addEventListener("click", changePause);

var cardTwo = document.getElementById("card2");
cardTwo.addEventListener("click", changePause);

var cardThree = document.getElementById("card3");
cardThree.addEventListener("click", changePause);

var cardFour= document.getElementById("card4");
cardFour.addEventListener("click", changePause);

var cardFive = document.getElementById("card5");
cardFive.addEventListener("click", changePause);

var cardSix = document.getElementById("card6");
cardSix.addEventListener("click", changePause);

var resetButton = document.getElementById("restart");
resetButton.addEventListener("click", resetCards);

var cardVar = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix];


