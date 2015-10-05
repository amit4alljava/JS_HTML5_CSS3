/**
 * Created by arnav on 10/5/2015.
 */
$(document).ready(init);
window.addEventListener("load",init);
function init(){
    var button1 = document.getElementsByTagName("button")[0];
    button1.addEventListener("click",showMessage);

    var button2 = document.getElementsByTagName("button")[1];
    button2.addEventListener("click",changeLook);

}
//init();
function showMessage(){
    var name = document.getElementById("txtName").value;
    document.getElementById("msg").innerHTML="welcome "+name;

}

function changeLook(){
    document.getElementById("msg").classList.toggle("mystyle");
    $("div div p span").html("Folks");
}
