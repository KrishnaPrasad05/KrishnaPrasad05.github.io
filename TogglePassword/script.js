const inputBox=document.getElementById("input-box");
const eyeIcon=document.getElementById("eye-icon");
const border=document.querySelector(".row");
function showPass(){
    if(inputBox.type=="password"){
        inputBox.type="text";
        eyeIcon.src="show.png";
        border.style.border="3.5px solid rgb(255, 0, 162)";
    }
    else{
        inputBox.type="password";
        eyeIcon.src="invisible.png";
        border.style.border="none";
    }
}
