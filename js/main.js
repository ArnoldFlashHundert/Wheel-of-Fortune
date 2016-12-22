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
		for(var i = 0; i <= 9; i++){
		alert("You made it here. i = " + i);
			// console.log(Words[i].word);
			// var gameWord = Words[i].word;
			var gameWordLength = parseInt(wordList[i].wordLength);
			var gameWordHint = wordList[i].hint;
			document.getElementById("hintArea").innerHTML = "Hint: " + gameWordHint;
			var gameWordCategory = wordList[i].category;
			document.getElementById("categoryArea").innerHTML = gameWordCategory;
			totalLength(gameWordLength);
		}
		function totalLength(totlen){
			var x = parseInt(totlen) + (parseInt(totlen) -1);
			createWordDisplay(x);
		}
		// Calculate "spreadout" of word 'dashes'
		// Word available space
		//	770 - 18 = (752)
		function createWordDisplay(wordInfo){
			perCharacter = 752 / parseInt(wordInfo);			// 35
			characterSpace = parseInt(perCharacter) * 2 / 3;	// 23
			spacesInbetween = parseInt(perCharacter) / 3;		// 11
			for(i = 0; i <= perCharacter; i = i++){
				var wordGuess = wordGuess = "_";
				document.getElementById("wordArea").innerHTML = wordGuess;
			}
		}
		// Split word into array
		function wordTransform(whichWord){
			// split word
			var wordTemp = whichWord.split;
		}
		function Words(word, wordLength, hint, category) {
		    this.word = word;
		    this.wordLength = wordLength;
		    this.hint = hint;
		    this.category = category;
		}
		var wordList = [
			new Words("Constructor", 11, "The Object of our coding", "WDI"),
			new Words("JavaScript", 10, "Coffee writing", "WDI"),
			new Words("America", 7, "She's beautiful", "Miscellaneous"),
			new Words("Developers", 10, "What we are", "WDI"),
			new Words("NYCDA", 5, "Where we are", "WDI"),
			new Words("Camerican", 9, "Our instructor's github name", "People"),
			new Words("Fortune", 7, "Wheel of ?", "Miscellaneous"),
			new Words("Independance", 12, "The Declaration of ?", "Miscellaneous"),
			new Words("Christmas", 9, "The celebration of Jesus' birth", "Miscellaneous"),
			new Words("Jeremy", 6, "NYCDA's 'head honcho'", "People")
		]
	})
});
// function person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// var myFather = new person("John", "Doe", 50, "blue");
// var myMother = new person("Sally", "Rally", 48, "green");

// document.getElementById("demo").innerHTML =
// "My father is " + myFather.age + ". My mother is " + myMother.age;

	// var word1 = new Words("Constructor", 11, "The Object of our coding", "WDI");
	// var word2 = new Words("JavaScript", 10, "Coffee writing", "WDI");
	// var word3 = new Words("America", 7, "She's beautiful", "Miscellaneous");
	// var word4 = new Words("Developers", 10, "What we are", "WDI");
	// var word5 = new Words("NYCDA", 5, "Where we are", "WDI");
	// var word6 = new Words("Camerican", 9, "Our instructor's github name", "People");
	// var word7 = new Words("Fortune", 7, "Wheel of ?", "Miscellaneous");
	// var word8 = new Words("Independance", 12, "The Declaration of ?", "Miscellaneous");
	// var word9 = new Words("Christmas", 9, "The celebration of Jesus' birth", "Miscellaneous");
	// var word10 = new Words("Jeremy", 6, "NYCDA's 'head honcho'", "People");

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
