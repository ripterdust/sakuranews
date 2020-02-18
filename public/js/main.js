'use strict'
var openModal = document.querySelector('.btnColor');
var whiteColor = document.querySelectorAll('.bgWhite');
var newsContainer = document.querySelector('.newsContainerColor');
var titleNew = document.querySelectorAll('#titleCard');
var contentCard = document.querySelectorAll('#contentCard');
var cardImage = document.querySelectorAll('#cardImage');
var container = document.querySelector('.container');
// Making localStorage object
if (localStorage.theme == null) {
	localStorage.setItem('theme', 'white');
}

function ColorSchemaDark() {
		// Body background
	document.body.style.background = 'var(--black)';
	for (var i = 0; i < whiteColor.length; i++) {
		whiteColor[i].classList.remove("bgWhite");
		whiteColor[i].classList.add('bgDark');
	}
	// Nav
	
	document.querySelector('#navLogo').style.color = '#fff';
	document.querySelector('.start').style.color = '#fff';
	document.querySelector('.news').style.color = '#fff';
	// Welcome message
	container.style.border = '2px solid #fff';
	
	// News dark mode
	newsContainer.classList.remove('bgWhite');
	newsContainer.classList.add('bgDark');
	for(var i = 0; i < titleNew.length; i ++){
		titleNew[i].style.color = '#fff';
		contentCard[i].style.color = '#fff';
		cardImage[i].style.border = '2px solid #fff';
	}
	
	// Footer
	document.querySelector('#footer').style.background = 'var(--grey)';

}

function ColorSchemaWhite() {
	// Body background
	document.body.style.background = 'var(--greyBody)';
	for (var i = 0; i < whiteColor.length; i++) {
		whiteColor[i].classList.add('bgWhite');
		whiteColor[i].classList.remove("bgDark");
	}
	// Nav
	document.querySelector('#navLogo').style.color = '#000';
	document.querySelector('.start').style.color = 'var(--blue)';
	document.querySelector('.news').style.color = 'var(--blue)';
	// Welcome message
	container.style.border = '2px solid transparent';
	// News ligth mode
	newsContainer.classList.add('bgWhite');
	newsContainer.classList.remove('bgDark');
	for(var i = 0; i < titleNew.length; i++){
		titleNew[i].style.color = '#000';
		contentCard[i].style.color = '#000';
		cardImage[i].style.border = 'none';
	}
	
	// Footer
	document.querySelector('#footer').style.background = 'var(--blue)';

}

// Making theme

if (localStorage.theme == 'dark') {
	ColorSchemaDark();
}else{
	ColorSchemaWhite();
}

openModal.addEventListener('click', () => {

	if(localStorage.theme == 'white'){
		ColorSchemaDark();
		localStorage.theme = 'dark'
		console.log(localStorage.theme);
	}else{
		ColorSchemaWhite();
		localStorage.theme = 'white';
		console.log(localStorage.theme);

	}

});
















