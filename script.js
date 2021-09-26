var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")"; 
    css.textContent=body.style.background;
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

function randomColorGenerator(){
    var letters="0123456789ABCDEF";
    var color1 = '#';
    var color2="#";
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++)
       {color1 += letters[(Math.floor(Math.random() * 16))];}
    for (var i = 0; i < 6; i++)
       {color2 += letters[(Math.floor(Math.random() * 16))];}
    // var color1 = Math.floor(Math.random()*16777215).toString(16);
    // var color2 = Math.floor(Math.random()*16777215).toString(16);
     body.style.background="linear-gradient(to right,"+color1+","+color2+")"; 
}