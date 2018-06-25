(function() {
})();
	let searchInput = document.getElementById('tipue_search_input'),
		searchButton = document.getElementById('searchButton');
	let searchSection = document.getElementById('searchSection');
	let searchIcon = document.getElementById('searchIcon');

const open = () => {
	searchSection.style = "display:block;"
}
const close = () => {
	searchSection.style = "display:none;"
}
/*
function open () {
	if (searchSection.style.display == "none;") {
		searchSection.style = "display:block;"
	}
	
	console.log("open");
}
*/

searchIcon.addEventListener('click', open, false);
//searchIcon.addEventListener('click', close, false);
/*
searchIcon.addEventListener('click', function (event) {
	if (searchSection.style.display == "none;") {
		open();
	} else {
		close();
	}

});
*/


searchButton.addEventListener('click', function (event) {

			var query = searchInput.value;
		if (query == 'тест') {
			query = 'test';
		}
		var encodeQuery = encodeURIComponent(query);
		//var url = 'search.html?q='+ decodeURIComponent(query);
		var url = 'search.html?q='+ query;
		//alert(url);
		location.href = url;
		//location.href = 'www.yoursite.com';
});

