
    let y = 70;
    let x = 100;

function border(x,y) {
    return xyb.some(thing => thing[0] === x && thing[1] === y)
}
 

function updateposition() {
    document.getElementById('Hazer').style.transform = 'translate('+x+'px, '+y+'px)';
}

window.addEventListener('load', function() {
    updateposition();
});

function moveUp() {
    var newy = y - 10;
    if(!border(x,newy)) {
        y = newy;
    console.log(y);
    updateposition();
    }
}

function movedown() {
    var newy = y + 10;
    if(!border(x,newy)) {
        y = newy
    console.log(y);
    updateposition();
    }
}


function moveRight() {
    var newx = x + 10;
    if(!border(newx,y)) {
        x = newx;
    console.log(x);
    updateposition();
    }
}

function moveLeft() {
    var newx = x - 10;
    if(!border(newx,y)) {
        x = newx;
    console.log(x);
    updateposition();
    }
}

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}

function playoff() {
    var audiooff = document.getElementById('audio');
    audiooff.pause();
}

var powerReload = true;

function change1() {
    if (powerReload){
    var presentIcon = document.getElementById('Hazer');
    presentIcon.classList.remove('fa-ghost')
    presentIcon.classList.add('fa-radiation')

    setTimeout(function() {
    presentIcon.classList.add('fa-ghost')
    presentIcon.classList.remove('fa-radiation')
    powerReload = false;
    document.getElementById('power-button').style.color = '#c6ac8f77' ;
}, 2000); 
    };

    setTimeout(function() {
      powerReload = true;
      document.getElementById('power-button').style.color = '#c6ac8f' ;
    }, 12000)

}

