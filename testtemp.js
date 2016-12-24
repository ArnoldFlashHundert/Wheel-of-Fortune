		gameWordLength = parseInt(words[i][1]);


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
		var wordGuess;
		function createWordDisplay(wordInfo){
			perCharacter = 782 / parseInt(wordInfo);			// 37
			for(i = 0; i <= wordInfo; i++){
				wordGuess = wordGuess + "_ ";
				document.getElementById("wordArea").innerHTML = wordGuess;
			}
