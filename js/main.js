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
	var wordComplete;        // Boolean: Guessing on each word is complete?
	var playersGuess;        // The single character guess that the player makes
	var isRight;             // 2B deleted (All)
	var gameWord;            // Just what it says - from the array
	var words = new Array(); // Holds all of the hard-coded words
	var whichWord = 0;       // Is the iterator in the 'words' array
	var gameWordLength;      // Just what it says - from the array
	var gameWordHint;        // Again, just what it says - from the array
	var gameWordCategory;    // Yet again, just what it says - from the array

	function wordsInitialize(){
		var i;
		for(i = 0; i <= 9; i++){
			words[0] = new Array("Constructor", 11, "An Object of coding", "WDI");
			words[1] = new Array("JavaScript", 10, "Coffee writing", "WDI");
			words[2] = new Array("America", 7, "She's beautiful", "Miscellaneous");
			words[3] = new Array("Developers", 10, "What we are", "WDI");
			words[4] = new Array("NYCDA", 5, "Where we are", "WDI");
			words[5] = new Array("Camerican", 9, "Our instructor's github name", "People");
			words[6] = new Array("Fortune", 7, "Wheel of ?", "Miscellaneous");
			words[7] = new Array("Independance", 12, "The Declaration of ?", "Miscellaneous");
			words[8] = new Array("Christmas", 9, "The celebration of Jesus' birth", "Miscellaneous");
			words[9] = new Array("Jeremy", 6, "NYCDA's 'head honcho'", "People");
		}
		var myVar6;
		myVar6 = setTimeout(wordDisplay, 100);
	}
	function wordDisplay() {
		if (wordComplete == "True"){
			whichWord++;
		}
		gameWord = words[whichWord][0];
		gameWordLength = parseInt(words[whichWord][1]);
		gameWordHint = words[whichWord][2];
		gameWordCategory = words[whichWord][3];

		document.getElementById("categoryWords").innerHTML = gameWordCategory;
		document.getElementById("hintArea").innerHTML = "Hint: " + gameWordHint;

		// This creates the empty spaces for each new word
		var wordAreaSpaces = "";
		for (j = 0; j <= gameWordLength - 1; j++) {
			wordAreaSpaces = wordAreaSpaces + "_ ";
			document.getElementById("wordArea").innerHTML = wordAreaSpaces;
		}
	}









	// This function is for the actual player's guessing
	// wordComplete = "False";
	wordComplete = gameWordLength + 8;
	for(isRight = 1; isRight < wordComplete; isRight++){
	// while(wordComplete == "False"){

		playersGuess = document.getElementById("guessText").value;

		document.getElementById("placeGuest").addEventListener("click",playerGuessing);

		function playerGuessing(){
			// var wordGuess = "";
			var wordArray, wordAreaSpacesArray, guessCorrect;
			//"split" = string --> array
			wordArray = gameWord.split("");
			wordAreaSpacesArray = wordAreaSpaces.split("");

			guessCorrect = false;
			guessRight();
			function guessRight(){
				for (k = 0; k < gameWordLength - 1; k++) {
					if (playersGuess == wordArray[k]) {
						wordAreaSpacesArray[k] = playersGuess;
						guessCorrect = true;
					}
				}
				wordAreaSpaces
					document.getElementById("wordArea").innerHTML = wordAreaSpacesArray.join("");
			}
			function guessWrong(){
				
			}
			// for(l = 0; l < gameWordLength - 1; l++){
			// 	wordGuess = wordGuess + wordArray[l] + "   ";
			// }
			// document.getElementById("wordArea").innerHTML = wordGuess;
		}
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
