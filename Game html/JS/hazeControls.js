
document.addEventListener("keydown", function(e) {

    switch(e.key) {
        case "ArrowUp": 
        case "ArrowDown":
        case "ArrowRight":
        case "ArrowLeft":
        case " ":        {
            e.preventDefault();
            break;
        }    
    }

    switch(e.key) {
        case "ArrowUp": {
            document.getElementById('up').click();
            break;
        }
        case "ArrowDown": {
            document.getElementById('down').click();
            break;
        }
        case "ArrowRight": {
            document.getElementById('right').click();
            break;
        }
        case "ArrowLeft": {
            document.getElementById('left').click();
            break;
        }
        case "w": {
            document.getElementById('up').click();
            break;
        }
        case "s": {
            document.getElementById('down').click();
            break;
        }
        case "d": {
            document.getElementById('right').click();
            break;
        }
        case "a": {
            document.getElementById('left').click();
            break;
        }
        case " ": {
            document.getElementById('power').click();
            break;
            
        }
        
    }

} )

