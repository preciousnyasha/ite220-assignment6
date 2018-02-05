//task#1
var width = document.getElementById("width");
var heigth = document.getElementById("height");

function precious(){
	var w = window.innerWidth;
	var h = window.innerHeight;

	this.width.innerHTML = w;
	this.height.innerHTML= h;
};

window.addEventListener("resize", precious);

document.getElementById("location").innerHTML = window.location.pathname;

document.getElementById('button-reload').onclick = function(event) {
    window.location.reload(true);
}

//task#2
document.getElementById('button-hello').onclick = function(event){
	document.getElementById('hello').innerHTML = "Hello World";
}

document.getElementById('button-change').onclick = function(event){
	document.getElementById('p3').style.color ="yellow";
}

document.getElementById('button-show').onclick = function(event){
	var show = document.getElementById('p2');
	if (show.style.display === "none"){
		show.style.display = "block";
	}else{
		show.style.display = "none";
	}
}