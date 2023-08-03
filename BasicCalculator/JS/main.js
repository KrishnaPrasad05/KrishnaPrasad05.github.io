/* document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("Complete");
        
        initApp();
    }
})

const initApp=()=>{
    const a=document.getElementById("no").value;
    a.addEventListener("Submit",(event)=>{
        event.preventDefault();
        console.log(a);
    })
    
} */
/* function getInput1(){
    const a=document.getElementById("no1").value;
    console.log(a);
}

function getInput2(){
    const b=document.getElementById("no2").value;
    console.log(b);
} */

function add(){
    const a=document.getElementById("no1").value;
    const b=document.getElementById("no2").value;
    const p=document.getElementById("para");
    d=parseInt(a);
    e=parseInt(b);
    let c=d+e;
    p.textContent=c;
    
}
function sub(){
    const a=document.getElementById("no1").value;
    const b=document.getElementById("no2").value;
    const p=document.getElementById("para");
    d=parseFloat(a);
    e=parseFloat(b);
    let c=d-e;
    p.textContent=c;
}
function mul(){
    const a=document.getElementById("no1").value;
    const b=document.getElementById("no2").value;
    const p=document.getElementById("para");
    d=parseInt(a);
    e=parseInt(b);
    let c=d*e;
    p.textContent=c;
}
function div(){
    const a=document.getElementById("no1").value;
    const b=document.getElementById("no2").value;
    const p=document.getElementById("para");
    d=parseFloat(a);
    e=parseFloat(b);
    let c=d/e;
    p.textContent=c;
}
function clr(){
    location.reload();
}