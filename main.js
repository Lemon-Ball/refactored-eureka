var LPO_x,LPO_y;
var mouse_event="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width=5;
canvas.addEventListener("mouse_down",my_mouse_down);
function my_mouse_down(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouse_event="mouseDown";
}
canvas.addEventListener("mouse_up",my_mouse_up);
function my_mouse_up(e){
    mouse_event="mouseUp";
}
canvas.addEventListener("mouse_leave",my_mouse_leave);
function my_mouse_leave(e){
    mouse_event="mouseLeave";
}
canvas.addEventListener("mouse_move",my_mouse_move);
function my_mouse_move(e){
CPO_x=e.clientX-canvas.offsetLeft;
CPO_y=e.clientY-canvas.offsetTop;

if (mouse_event == "mouseDown"){
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

    console.log("Last position of x and y coordnates are:");
    console.log("x = "+ LPO_x + "y = "+ LPO_y);
    ctx.moveTo(LPO_x,LPO_y);

    console.log("Current position of x and y coordnates are:");
    console.log("x = "+ CPO_x + "y = "+ CPO_y);
    ctx.lineTo(CPO_x,CPO_y);

    ctx.stroke();
}
LPO_y=CPO_y;
LPO_x=CPO_x;
}
