if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "cherri.gq", "cherri.g", "cherri.", "cherr", "cher", "che", "ch", "c", "ch", "che", "cher", "cherr", "cherri", "cherri.g", "cherri.gq", "cherri.gq wel", "cherri.gq welcome"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
