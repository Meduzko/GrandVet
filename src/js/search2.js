(function() {
var searchInput = document.getElementById('tipue_search_input'),
	searchButton = document.getElementById('searchButton');

const AllWords = [
		{
			words: {
				a: "услуги",
				b: "services"
			}
		},
		{
			words: {
				a: "зоомагазин",
				b: "zooshop"
			}
		},
		{
			words: {
				a: "зоогостинница",
				b: "zoohotel"
			}
		},
		{
			words: {
				a: "диагностика",
				b: "diagnostic"
			}
		},
	];

let actionButton = document.getElementById('actionButton');
let locationString = window.location.search.substr(1);
let decodedLocStirng = decodeURIComponent(locationString);

document.addEventListener('DOMContentLoaded', function() {

    //actionButton.addEventListener('click', function (event) {});
	AllWords.forEach((currentWord, wordNumber) => {
		//if (locationString == )
	const answers = [];
	//console.log(wordNumber + " " + currentWord.words.b);
	let url2 = "q=" + currentWord.words.a;
			if (decodedLocStirng == url2) {

				//console.log(currentWord.words.a);
				console.log(decodedLocStirng);
				location.href = 'search.html?q='+ currentWord.words.b;
				//document.location.replace()
			} else {
				//console.log(currentWord.words.a + " " + "something wrong");
				//console.log(decodedLocStirng);
			}

/*
		for (letter in currentWord.words) {
			
			
		}
		*/
	 });

}, false);








})();