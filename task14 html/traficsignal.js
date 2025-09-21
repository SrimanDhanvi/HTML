function changeColor(selectedCategory) {

    switch(selectedCategory) {
        case 'redColor': {
            document.getElementById('red').style.backgroundColor = 'red'
            break;
        }
        case 'orangeColor': {
           document.getElementById('orange').style.backgroundColor = 'rgb(255, 119, 0)'
            break;
        }
        case 'greenColor': {
            document.getElementById('green').style.backgroundColor = 'green'
            break;
        }
        case 'removeColor': {
            document.getElementById('red').style.backgroundColor = 'rgba(121, 121, 121, 0.632)'
            document.getElementById('orange').style.backgroundColor = 'rgba(121, 121, 121, 0.632)'
            document.getElementById('green').style.backgroundColor = 'rgba(121, 121, 121, 0.632)'
        }
    }
    
}
