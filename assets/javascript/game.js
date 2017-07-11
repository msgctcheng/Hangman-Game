var wordBank = ["spurs", "cowboy", "lasso", "saloon", "gallows", "saddle"];

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var picture = document.getElementById("image");

var lettersDiv = document.getElementById("letters");
console.log(randomWord);

var ranwordArray = [];

var alreadyGuessed = [];

var wordPicked = false;

var guessesLeft = 9;

var spacesArray = [];

var imgCounter = 0;

var winsNum = 0;

var lossNum = 0; 

picture.style.display = "block";
    
picture.style.marginLeft = "auto";
    
picture.style.marginRight = "auto";

var lettersRemaining = 0;

 

document.onkeyup = function(event) { 

    var keyPressed = event.key; 
    console.log(keyPressed);

   
    alreadyGuessed.push(keyPressed);
    
    document.getElementById("guessed").innerText = alreadyGuessed;
    
    document.getElementById("gLeft").innerText = guessesLeft;
    document.getElementById("wins").innerText = winsNum;
    document.getElementById("loss").innerText = lossNum;


   if (!wordPicked) {
        
        wordPicked = true;
        


        for (var i = 0; i < randomWord.length; i++) {
            spacesArray[i] = " _ "
            lettersDiv.innerText += spacesArray[i];
            lettersDiv.style.fontSize = "xx-large"; 
            lettersDiv.style.marginLeft = "35%";
            ranwordArray.push(randomWord[i]);

            
        };
    }

    for(var j = 0; j < randomWord.length; j++) {
        if (keyPressed == randomWord[j]) {
            spacesArray[j] = keyPressed;
            lettersDiv.innerText = spacesArray;
            lettersRemaining++;
            
             
        }
    };

   
    
    if (ranwordArray.indexOf(keyPressed) == -1) {
        guessesLeft--;
        imgCounter++;        
    }

   

    if (imgCounter === 1) {
        picture.src = "assets/images/firstx.png";
    }

    if (imgCounter === 2) {
        picture.src = "assets/images/secondx.png";
    }

    if (imgCounter === 3) {
        picture.src = "assets/images/thirdx.png";
    }

    if (imgCounter === 4) {
        picture.src = "assets/images/fourthx.png";
    }

    if (imgCounter === 5) {
        picture.src = "assets/images/fifthx.png";
    }

    if (imgCounter === 6) {
        picture.src = "assets/images/sixthx.png";
    }

    if (imgCounter === 7) {
        picture.src = "assets/images/seventhx.png";
    }  

    if (imgCounter === 8) {
        picture.src = "assets/images/eighthx.png";
    }

    if (imgCounter === 9) {
        picture.src = "assets/images/ninthx.png";
    }

    if (guessesLeft <= 0 || imgCounter === 10) {

        picture.src = "assets/images/loss.png";

        lossNum++;

        document.getElementById("heading").innerText = "You Lose... :( Press a key to start a new game.";
       
        var resetGame = confirm("You Lose...Do you want to play again?");  

        if (resetGame) {
            alreadyGuessed = [" "];
            lettersDiv.innerText = " ";
            randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
            guessesLeft = 10;
            imgCounter = 0;
            picture.src = "assets/images/start.png";
            lettersRemaning = 0;
            wordPicked = false;
                
        }    
    }
    
    
    if (lettersRemaining == randomWord.length) {
        picture.src = "assets/images/win.png";
        winsNum++;
        document.getElementById("heading").innerText = "You Win :D! The word was " + randomWord + ". Press a key to start a new game.";

        var resetGame = confirm("You Win! Do you want to play again?");    
    
        if (resetGame) {
            alreadyGuessed = [" "];
            lettersDiv.innerText = " ";
            randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
            guessesLeft = 10;
            imgCounter = 0;
            picture.src = "assets/images/start.png";
            lettersRemaning = 0;
            wordPicked = false;
            

        }
    }
    
};



