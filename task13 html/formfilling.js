
function displayingit() {

    var firstName1 = document.getElementById('First-name').value;

    var firstName2 = document.getElementById('Last-name').value;

    document.getElementById('result6').innerHTML = firstName1 +' '+ firstName2

    var firstName3 = document.getElementById('email').value;
    document.getElementById('result3').innerHTML = firstName3;

    var firstName4 = document.getElementById('Phno').value;
    document.getElementById('result4').innerHTML = firstName4;

    var firstName5 = document.getElementById('BD').value;
    document.getElementById('result5').innerHTML = firstName5;

    console.log(firstName1);
    console.log(firstName2);
    console.log(firstName3);
    console.log(firstName4);
    console.log(firstName5);

    document.getElementById('display').style.display ='block'
}