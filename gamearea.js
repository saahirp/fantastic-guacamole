document.getElementById("player1name").innerHTML = localStorage.getItem("player1");
document.getElementById("player2name").innerHTML = localStorage.getItem("player2");
function SendValue()
{
ygygyg = document.getElementById("inputnum1").value;
gygygy = document.getElementById("inputnum2").value;

document.getElementById("num1").innerHTML = ygygyg;
document.getElementById("num2").innerHTML = gygygy;
}