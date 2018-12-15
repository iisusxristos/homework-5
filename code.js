function read (){
    location.href="https://news.tut.by/";
}
function turnColor (){
	var background = window.getComputedStyle(document.body).backgroundColor;
	if (background=="rgb(255, 215, 0)"){
    document.body.style.backgroundColor="blue";
    document.getElementById('btn1').className = 'new';
    document.getElementById('btn2').className = 'new';
    document.getElementById('btn3').className = 'new';
	}
	else{
	document.body.style.backgroundColor="gold";
    document.getElementById('btn1').className = 'knopka';
    document.getElementById('btn2').className = 'knopka';
    document.getElementById('btn3').className = 'knopka';
	}
}
function reader(){
	var iner = document.getElementById("iner");
	iner.style.display = "none";
    var vision = document.getElementById("reflex");
    vision.style.display = "flex";
    //Могу и через через style.cssText
}