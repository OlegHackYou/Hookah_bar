function test() {
	alert("Дані відправлено!");
}

var el = document.getElementById("logo");
el.onmouseenter = function() {
	this.style.width = '130px';
}
el.onmouseleave = function() {
	this.style.width = null;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}