'use strict'
var openModal = document.querySelector('.btnColor');
var whiteColor = document.querySelector('.bgWhite');

// Making localStorage object
localStorage.setItem('theme', 'white');

function ColorSchemaDark() {
		// Body background
	document.body.style.background = 'var(--black)';

	// Nav
	whiteColor.classList.remove("bgWhite");
	whiteColor.classList.add('bgDark');
	document.querySelector('#navLogo').style.color = '#fff';
	document.querySelector('.start').style.color = '#fff';
	document.querySelector('.news').style.color = '#fff';

	// News dark mode
	document.querySelector('.newsContainerColor').classList.remove('bgWhite');
	document.querySelector('.newsContainerColor').classList.add('bgDark');
	document.querySelector('#titleCard').style.color = '#fff';
	document.querySelector('#contentCard').style.color = '#fff';
	document.querySelector('#cardImage').style.border = '2px solid #fff';
	
	// Footer
	document.querySelector('#footer').style.background = 'var(--grey)';

}

function ColorSchemaWhite() {
	// Body background
	document.body.style.background = 'var(--greyBody)';
	// Nav
	whiteColor.classList.add('bgWhite');
	whiteColor.classList.remove("bgDark");
	document.querySelector('#navLogo').style.color = '#000';
	document.querySelector('.start').style.color = 'var(--blue)';
	document.querySelector('.news').style.color = 'var(--blue)';
	// News dark mode
	document.querySelector('.newsContainerColor').classList.add('bgWhite');
	document.querySelector('.newsContainerColor').classList.remove('bgDark');
	document.querySelector('#titleCard').style.color = '#000';
	document.querySelector('#contentCard').style.color = '#000';
	
	// Footer
	document.querySelector('#footer').style.background = 'var(--blue)';

}

// Making theme

if (localStorage.theme == 'dark') {
	ColorSchemaDark();
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
















