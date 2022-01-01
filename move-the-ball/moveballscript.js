

var ball=document.getElementById("ball");

ball.style.top=ball.offsetTop + "px";
ball.style.left=ball.offsetLeft+"px";

var ballHeight=ball.offsetHeight;
var ballWidth=ball.offsetWidth;

function setValue(value){
    return value+"px";
}

function key(keyPress){
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);

    if(keyPress==="w" || keyPress==="W"){
        if(top>6){
            ball.style.top=setValue(top-6);
        }
    }
    else if(keyPress==="a" || keyPress==="A"){
        if(left>6){
            ball.style.left=setValue(left-6);
        }
    }

   else if(keyPress==="s" || keyPress==="S"){
        if(top<(window.innerHeight-ballHeight)-6){
            ball.style.top=setValue(top+6);
        }
    }

   else if(keyPress==="d" || keyPress==="D"){
        if(left<(window.innerWidth-ballWidth)-6){
            ball.style.left=setValue(left+6);
        }
    }


}

 window.addEventListener("keypress",function(event){
    key(event.key);
 });