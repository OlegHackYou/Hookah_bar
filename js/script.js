  var head = document.head,
      link = document.createElement('link');
  link.rel = 'stylesheet';
  
  if (localStorage.getItem('themeStyle') === 'dark') {
    link.href = "css/dark.css"; 
    document.getElementById('switch-1').setAttribute('checked', true); 
  }

  else {
    link.href = "css/light.css"; 
  }
  head.appendChild(link); 

 
  document.getElementById('switch-1').addEventListener('change', ev => {
    let btn = ev.target;
    alert("event has happened");
    
    if (btn.checked) {
      link.href = "css/dark.css"; 
    }
    else {
      link.href = "css/light.css"; 
    }
  });

function test(){
    if(CheckFirstName() && CheckNumber())
    {
        alert("Стіл заброньовано");
    }}
function AuditText(value){
    var re=/^[а-яА-Я]+$/; /*функція для перевірки на наявність букв*/
    if (value.match(re))
    {
        return true;
    }
    else
    {
        return false;
    }}
function AuditNumber(value){
    return !isNaN(value); /*isNaN-функція js яка перевіряє на число*/
}
function CheckFirstName()
{
    let fnameValue = document.forms["section-form"]["name"].value; 
    if(!AuditText(fnameValue)) /*перевіряєм на наявність букв*/
    {
        alert("Ім'я повинно вводитись буквами"); 
        return false;
    }
    return true;
}
function CheckNumber(){
    let numberValue = document.forms["section-form"]["number"].value;
    if(!AuditNumber(numberValue)){
        alert("Неправильний номер"); /*Перевіряєм на наявність цифр*/
        return false;
    }
    return true;

}
var el = document.getElementById("logo");
el.onmouseenter = function() {
	this.style.width = '200px';
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
function buttonClick(button)
{
    alert("Ви забронювали стіл");
}


