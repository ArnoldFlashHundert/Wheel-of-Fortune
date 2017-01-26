// Use JavaScript to give the user a word to guess
// letter by letter. Will the user lose points as they
// guess wrong? Will they try to beat the clock? Do
// they only get 3 guesses? You decide! Make it clear
// to the user what their goal is. The app should be
// styled with simple but modern design trends and fun
// for the user. Remember keep your user engaged.

window.addEventListener("load",function(){
	myFunction();
	function myFunction() {
		var myVar;
		myVar = setTimeout(fadeoutFunc, 1000); // 2B used while coding
		// myVar = setTimeout(fadeoutFunc, 5000); // 2B used when coding is done
	}
	function fadeoutFunc() {
		document.getElementById("goal").style.opacity = 0;
		var myVar2;
		myVar2 = setTimeout(fadeInFunc, 1000); // 2B used while coding
		// myVar2 = setTimeout(fadeInFunc, 4000); // 2B used when coding is done
	}
	function fadeInFunc() {
		document.getElementById("startGame").style.opacity = 1;
		document.getElementById("startGame").focus();
	}
	document.getElementById("startGame").addEventListener("click", function(){
		var myVar3;
		myVar3 = setTimeout(fadeOutFunc2, 100); // 2B used while coding
		// myVar3 = setTimeout(fadeOutFunc2, 4000); // 2B used when coding is done
		function fadeOutFunc2() {
			// document.getElementById("startGame").style.opacity = 0;
			document.getElementById("startGame").style.display = "none";
			var myVar4;
			myVar4 = setTimeout(fadeInFunc2, 100); // 2B used while coding
			// myVar4 = setTimeout(fadeInFunc2, 4000); // 2B used when coding is done
		}
		function fadeInFunc2() {
			document.getElementById("guessBox").style.opacity = 1;
			document.getElementById("guessText").focus();
			var myVar5;
			myVar5 = setTimeout(wordsInitialize, 100);
		}
	});

	var j, k, l;
	var wordComplete = false;// Boolean: Guessing on each word is complete?
	var playersGuess;        // The single character guess that the player makes
	var gameWord;            // Just what it says - from the array
	var words = new Array(); // Holds all of the hard-coded words
	var whichWord = 0;       // Is the iterator in the 'words' array
	var gameWordLength;      // Just what it says - from the array
	var gameWordHint;        // Again, just what it says - from the array
	var gameWordCategory;    // Yet again, just what it says - from the array
	var guessesLeft = 7;     // A counter depicting the # of remaining wrong guesses
	var wordAreaSpaces = "";

	function wordsInitialize(){
		var i;
		for(i = 0; i <= 9; i++){
			words[0] = new Array("constructor", 11, "An Object of coding.", "WDI");
			words[1] = new Array("javascript", 10, "Coffee writing.", "WDI");
			words[2] = new Array("television", 10, "The 'boob' box.", "Technology");
			words[3] = new Array("developers", 10, "What we are now.", "WDI");
			words[4] = new Array("NYCDA", 5, "Where we learned.", "WDI");
			words[5] = new Array("microwave", 9, "A 'modern-day' invention.", "Technology");
			words[6] = new Array("fortune", 7, "wheel of ?.", "Miscellaneous");
			words[7] = new Array("independance", 12, "Reason for the Revolutionary War.", "Miscellaneous");
			words[8] = new Array("Christmas", 9, "The celebration of Jesus' birth.", "Miscellaneous");
			words[9] = new Array("Jeremy", 6, "NYCDA's 'head honcho'.", "People");
		}
		var myVar6;
		myVar6 = setTimeout(wordDisplay, 100);
	}
	function wordDisplay() {
		if (wordComplete == true){
			whichWord++;
			wordAreaSpaces = "";
			wordComplete = false;
		}
		gameWord = words[whichWord][0];
		gameWordLength = parseInt(words[whichWord][1]);
		gameWordHint = words[whichWord][2];
		gameWordCategory = words[whichWord][3];

		document.getElementById("categoryWords").innerHTML = gameWordCategory;
		document.getElementById("hintArea").innerHTML = "Hint: " + gameWordHint;
		document.getElementById("remainingGuessesArea").innerHTML = "Left: " + guessesLeft;

		// This creates the empty spaces for each new word
		for (j = 0; j <= gameWordLength - 1; j++) {
			wordAreaSpaces = wordAreaSpaces + "_ ";
			document.getElementById("wordArea").innerHTML = wordAreaSpaces;
		}
		document.getElementById("guessText").oninput = function() {myBtnFocus()};
		function myBtnFocus(){
			document.getElementById("placeGuest").focus();
		}
		document.getElementById("placeGuest").addEventListener("click",playerGuessing);
	}
// ********************************************************************************
	// This function is for the actual player's guessing
		function playerGuessing(){
			// var wordGuess = "";
			var wordArray;           // Holds the split string in an array
			var wordAreaSpacesArray; // To hold updated version of "wordArea"
			var wordGuessingAreaSpaces = ""; // _'s & spaces for word being played
			var numberRight = 0;     // # of correct letters
			var underscoreCount = 0; // To determine if word being played is finished
// ********************************************************************************
			playersGuess = document.getElementById("guessText").value;
			//"split" = string --> array
			wordArray = gameWord.split("");
			wordGuessingAreaSpaces = document.getElementById("wordArea").innerHTML;
			wordAreaSpacesArray = wordGuessingAreaSpaces.split("");
// ********************************************************************************
// ********************************************************************************
//			           Test player's guess
			for (k = 0; k < gameWordLength; k++) {
				if (playersGuess == wordArray[k]) {
					wordAreaSpacesArray[k*2] = playersGuess;
					numberRight++; // # of correct letters
				}
			}
// *******************************************************************************
// 						Testing for the # of correct letters
			if (numberRight > 0) {
				guessedRight();
			// Testing to see if the guessed letter was wrong
			}else if (numberRight == 0) {
				guessedWrong();
			}
// ********************************************************************************
			function guessedRight(){
// 				Testing to see if there are any letters left to be guessed
				for (l = 0; l < wordAreaSpacesArray.length; l++){
					if (wordAreaSpacesArray[l] == "_") {
						underscoreCount++;
					}
				}
				document.getElementById("wordArea").innerHTML = wordAreaSpacesArray.join("");
				if (underscoreCount == 0) {
					var myVar7;
					myVar7 = setTimeout(nextWord, 1000);
				}
				function nextWord(){
					wordComplete = true;
					alert("Congratulations! You guessed the word.");
					wordDisplay();
				}
			}
// ********************************************************************************
			function guessedWrong(){
				var remainingGuesses;
				var remainingGuessesArray;
				var remainingGuessesValue;
//				Get the # of remaining guesses from the page
				remainingGuesses = document.getElementById("remainingGuessesArea").innerHTML;
				remainingGuessesArray = remainingGuesses.split("");

				var x = remainingGuessesArray.pop();
				remainingGuessesValue = parseInt(x) - 1;
				document.getElementById("remainingGuessesArea").innerHTML = "Left: " + remainingGuessesValue.toString();
			}
// ********************************************************************************
			document.getElementById("guessText").value = "";
			document.getElementById("guessText").placeholder="abc";
			document.getElementById("guessText").focus();
		}
});

// Plan:
// *** DONE *** • Design display for "hangman-style" layout & input
// *** DONE *** • Determine source of words (ie. - hardcode some [qty?] into code in an array)
// *** DONE ***   • Create an object constructor w/key:value pairs to include a hint as the value
//   • Determine how/when to access/display "next" word in series
// *** DONE *** • Display goal for the user
// • Determine/write code for correct answers
//   • How to output correct answers

// Optional:
// • Determine code for whether the user loses points for a wrong guess
// • Do I limit user in # of guesses? Code?
