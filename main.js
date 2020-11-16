var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");

var currentDirection = "left";
var pipeDirection = "right";

var state = true; 

function randomDirection(){
    //generates random number between 0-3
    var ran = Math.floor(Math.random() * 3)

    //checks the number and returns a direction
    switch(ran){
        case 0: return "left"
            break;
        case 1: return "right"
            break;
        case 2: return "up"
            break;
        case 3: return "down"
            break;
    }
}

var isPressed = {
    right: "false",
    left: "false",
    up: "false",
    down: "false"
}

function keyUpHandler(e){
    switch(e.keyCode){
        case 39: isPressed.right = false; break;
        case 37: isPressed.left = false; break;
        case 38: isPressed.up = false; break;
        case 40: isPressed.down = false; break;
    }
}

function keyDownHandler(e){
    switch(e.keyCode){
        case 39: isPressed.right = true; break;
        case 37: isPressed.left = true; break;
        case 38: isPressed.up = true; break;
        case 40: isPressed.down = true; break;
    }
}

function updateDirection(){
    if(isPressed.left){
        currentDirection = "left"
        
    }
    else if(isPressed.right){
        currentDirection = "right"
        
    }
    else if(isPressed.up){
        currentDirection = "up"
        
    }
    else if(isPressed.down){
        currentDirection = "down"
        
    }
}

function drawPlayer(){
    
    switch(currentDirection){
        case "left":  ctx.fillRect(30, canvas.height/2, 50, 50); break;
        case "right":  ctx.fillRect(canvas.width - (30+50),canvas.height/2, 50, 50); break;
        case "up":  ctx.fillRect(canvas.width/2,30, 50, 50); break;
        case "down":  ctx.fillRect(canvas.width/2,canvas.height - 50, 50, 50); break;
    }
}


//makes variable for the direction to be generated
var direction = randomDirection();
 
function checkDirection(input){
    switch(input){
        case "right": return true; break;
        case "left": return true; break;
        case "up": return true; break;
        case "down": return true; break;
        default: return false; break;
    }
}


function main(){
    ctx.clearRect(0,0,canvas.width, canvas.height)//clears screen
    updateDirection() 
    drawPlayer()
    window.requestAnimationFrame(main)
}
main()

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)