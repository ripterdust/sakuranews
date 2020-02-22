// Dark n ligth mode
var btn = document.querySelector('.btnColor');
var bg = document.querySelectorAll('#backgroundColor');
var text = document.querySelectorAll('#text');
var footer = document.querySelector('#footer');
// Comprobando o creando la existencia del localStorage
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
	footer.style.background = 'var(--grey)';
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
	footer.style.background = 'var(--blue)';
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
// Haciendo comprobación de que tema se va a utilizar. 
if (localStorage.theme == 'dark') {
	darkMode();
}else{
	whiteMode();
}




// Making a functional seachbar
function searchBarAction(){
	var searchBar = document.querySelector('#searchBar').value;
	console.log(searchBar);
	window.location.href = "https://sakuranews.herokuapp.com/searchbar/" + searchBar;
}






