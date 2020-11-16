

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

var direction = "none"

alert("Dodge in the correct direction!")

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


do{
    
    //gives you the prompt, and uses .toLowerCase to sanitize the input, compares to direction var
    var selectedDirection = prompt("You see a pipe " + direction + " of you coming your way!").toLowerCase() 
    if(checkDirection(selectedDirection) && selectedDirection !== direction){
        //generate a new direction and then loops
        direction = randomDirection();
    }else{
        if(confirm("You lost, game over. continue?")){
            continue; // continue the loop from beginning
        }else{
            state = false; // stop the loop, game over
        }
    }

}while(state)