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
	var perCharacter;
	var characterSpace;
	var spacesInbetween;
	document.getElementById("startGame").addEventListener("click", function(){
		var myVar3;
		myVar3 = setTimeout(fadeOutFunc2, 1000); // 2B used while coding
		// myVar3 = setTimeout(fadeOutFunc2, 4000); // 2B used when coding is done
		function fadeOutFunc2() {
			// document.getElementById("startGame").style.opacity = 0;
			document.getElementById("startGame").style.display = "none";
		}

		var i;
		var gameWord;
		var gameWordLength;
		var gameWordHint;
		var gameWordCategory;
		var words = new Array();
		for(i = 0; i <= 9; i++){
			words[0] = new Array("Constructor", 11, "The Object of our coding", "WDI");
			words[1] = new Array("JavaScript", 10, "Coffee writing", "WDI");
			words[2] = new Array("America", 7, "She's beautiful", "Miscellaneous");
			words[3] = new Array("Developers", 10, "What we are", "WDI");
			words[4] = new Array("NYCDA", 5, "Where we are", "WDI");
			words[5] = new Array("Camerican", 9, "Our instructor's github name", "People");
			words[6] = new Array("Fortune", 7, "Wheel of ?", "Miscellaneous");
			words[7] = new Array("Independance", 12, "The Declaration of ?", "Miscellaneous");
			words[8] = new Array("Christmas", 9, "The celebration of Jesus' birth", "Miscellaneous");
			words[9] = new Array("Jeremy", 6, "NYCDA's 'head honcho'", "People");

			gameWord = words[i][0];
			gameWordLength = parseInt(words[i][1]);
			gameWordHint = words[i][2];
			gameWordCategory = words[i][3];

			document.getElementById("categoryWords").innerHTML = gameWordCategory;

			totalLength(gameWordLength);

			function totalLength(totlen){
				var x = parseInt(totlen) + (parseInt(totlen) -1);
				// x = 21
				createWordDisplay(x);
			}

			// Calculate "spreadout" of word 'dashes'
			// Word available space
			//	800 - 18 = (782)
			// wordInfo = 21
			function createWordDisplay(wordInfo){
				perCharacter = 782 / parseInt(wordInfo); // 37
				var wordGuess="";
				alert("You made it here. " + gameWordLength)
				for(i = 0; i < gameWordLength; i++){
					wordGuess = wordGuess + "_ ";
				}
				document.getElementById("wordArea").innerHTML = wordGuess;

			// totalLength(gameWordLength);
			// function totalLength(totlen){
			// 	var x = parseInt(totlen) + (parseInt(totlen) -1);
			// 	createWordDisplay(x);
			// }

			// Calculate "spreadout" of word 'dashes'
			// Word available space
			//	800 - 18 = (782)
			// function createWordDisplay(wordInfo){
			// 	perCharacter = 752 / parseInt(wordInfo);			// 35
			// 	characterSpace = parseInt(perCharacter) * 2 / 3;	// 23
			// 	spacesInbetween = parseInt(perCharacter) / 3;		// 11
			// 	for(i = 0; i <= perCharacter; i = i++){
			// 		var wordGuess = wordGuess = "_";
			// 		document.getElementById("wordArea").innerHTML = wordGuess;
			// 	}
			// }

				document.getElementById("hintArea").innerHTML = "Hint: " + gameWordHint;
			}

			// Split word into array
			function wordTransform(whichWord){
				// split word
				var wordTemp = whichWord.split;
			}
		}
	});
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
