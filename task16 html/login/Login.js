
var users = [];

(function() {
    var httpRequest = new XMLHttpRequest(); 

    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === 4) {
            users = JSON.parse(httpRequest.responseText);
        }
    }
        httpRequest.open('GET','http://localhost:4000/user');

        httpRequest.send();
})();

var found = false;

function validate() {
    if(checkPhno()&&checkPassword()) {
        users.forEach(function(user) {
            if(user.PhoneNumber === document.getElementById('Phno').value && user.Password === document.getElementById('PS').value) {
                found = !found;
            } 
        })
        if(found) {
            window.alert('You have successfully loged in');
        } else {
            window.alert('Incorrect Phone Number and Password');
        }
    }
}

function checkPhno() {

    var phoneNumber = document.getElementById('Phno').value;

    if (phoneNumber.length === 0) {
        document.getElementById('notify-phno').innerHTML = 'Phone number is required';
    } else if(!/^[1-9]\d{9}$/.test(phoneNumber)) {
        document.getElementById('notify-phno').innerHTML = 'Wrong format';     
    } else {
        document.getElementById('notify-phno').innerHTML = '';  
        return true;
    }
}

function checkPassword() {

    var password = document.getElementById('PS').value;

    if (password.length === 0) {
        document.getElementById('notify-pass').innerHTML = 'Please enter the password';
    } else {
        document.getElementById('notify-pass').innerHTML = '';
        return true;
    }
}

 var visible = true;

function passwordShow() {

    var icon = document.getElementById('toggel-icon');
    var passwordChange = document.getElementById('PS');
    visible = !visible;

    if (visible) {
        passwordChange.type = 'password';
        icon.classList.add('fa-eye');
        icon.classList.remove('fa-eye-slash');
    } else {
        passwordChange.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');        
    }
}

