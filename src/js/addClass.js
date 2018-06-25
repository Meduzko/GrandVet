(function () {})();
	/*
		let cardFontSideAll = document.querySelectorAll('.service_card-reveal');
		*/
		



	let els = document.getElementsByClassName('service_card-reveal');
	//removeClass(els, 'opened_card');
	//addClass(els, 'closed_card');
/*
	var el = document.getElementById('current-class-name');
	removeClass([el], 'closed_card');
	addClass([el], 'closed_card');
*/
	function addClass(elements, className) {
		for (let i = 0; i < elements.length; i++) {
			let element = elements[i];
			if (element.classList) {
				element.classList.add(className);
			} else {
				element.className += ' ' + className;
			}
		}
	}

	function removeClass(elements, className) {
		for (let i = 0; i < elements.length; i++) {
			let element = elements[i];
			if (element.classList) {
				element.classList.remove(className);
			} else {
				element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		}
	}

/*
	let revealButtons = document.querySelectorAll('.action_reveal_button');
		for (let i = 0; i < revealButtons.length; i++) {
		  revealButtons[i].addEventListener("click", function() {
		    //cardFontSide.setAttribute("style", "display:block;transition: all 0.3s ease-in-out;transform:translateY(0%);");
		  addClass(els, 'closed_card');
		  });
	}
		let buttons = document.querySelectorAll('.action_button_wrapper');
		for (let i = 0; i < buttons.length; i++) {
		  buttons[i].addEventListener("click", function() {
		    //cardFontSide.setAttribute("style", "display:block;transition: all 0.3s ease-in-out;transform:translateY(0%);");
		  	//removeClass(els, 'closed_card');

		  });
	}
*/


