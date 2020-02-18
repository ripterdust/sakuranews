// Dark n ligth mode
var btn = document.querySelector('.btnColor');
var bg = document.querySelectorAll('#backgroundColor');
var text = document.querySelectorAll('#text');

if (localStorage.theme == null) {
	localStorage.setItem('theme', 'white');
}

function darkMode(){
	document.body.style.background = 'var(--black)';
	for(var i = 0; i < bg.length; i++){
		bg[i].classList.remove('bgWhite');
		bg[i].classList.add('bgDark');
	}
	for(var i = 0; i < text.length; i++){
		text[i].classList.remove('blackText');
		text[i].classList.add('whiteText');
	}
}

function whiteMode(){
	document.body.style.background = 'var(--greyBody)';
	for(var i = 0; i < bg.length; i++){
		bg[i].classList.remove('bgDark');
		bg[i].classList.add('bgWhite');
		
	}
	for(var i = 0; i < text.length; i++){
		text[i].classList.add('blackText');
		text[i].classList.remove('whiteText');
	}
}

btn.addEventListener('click', () => {
	if(localStorage.theme == 'white'){
		darkMode();
		console.log('if');
		localStorage.theme = 'dark';
	}else{
		whiteMode();
		console.log('else');
		localStorage.theme = 'white';
	}
});
if (localStorage.theme == 'dark') {
	darkMode();
}else{
	whiteMode();
}






