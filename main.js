var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext("2d");
    var width= screen.width
    if (width<992){
        document.getElementById("canvas1").width=screen.width-75
        document.getElementById("canvas1").height=screen.height-600
        document.body.style.overflow="hidden"
    }
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("touchstart",Touchstart)
    function Touchstart(e){
        TouchX=e.touches[0].clientX-canvas.offsetLeft
        TouchY=e.touches[0].clientY-canvas.offsetTop
    }
    canvas.addEventListener("touchmove",Touchmove)
    function Touchmove(e){
        CTouchX=e.touches[0].clientX-canvas.offsetLeft
        CTouchY=e.touches[0].clientY-canvas.offsetTop
        ctx.beginPath();
        ctx.strokeStyle = document.getElementById("Color").value;
        ctx.lineWidth = document.getElementById("LW").value;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + TouchX + "y = " + TouchY);
        ctx.moveTo(TouchX, TouchY);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + CTouchX + "y = " + CTouchY);
        ctx.lineTo(CTouchX, CTouchY);
        ctx.stroke();

        TouchX = CTouchX; 
        TouchY = CTouchY;  
    }
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        
        color = document.getElementById("Color").value;
        width_of_line = document.getElementById("LW").value;
        

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


