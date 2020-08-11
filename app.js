const logout = document.getElementById('logout');
const login = document.getElementById('login');
let username = document.getElementById('username');
let password = document.getElementById('password');

// clear text input fields and any previous messages upon logout
logout.addEventListener("click", function() {
    username.textContent == '' && password.textContent == ''
});

login.addEventListener("click", function() {
    if (username.value == '' || password.value == '') {
        let errorMessage = document.getElementById('errorMessage')
        event.preventDefault()
        errorMessage.innerHTML = 'Enter both a username and password to login!'
        username.style.border = '4px solid red'
        password.style.border = '4px solid red'
    } else {
        
    }
});

let userData = fetch('http://ip-api.com/json/?fields=status,query')
    .then( resp => resp.json())
    .then(data => {
        console.log( data )
    });

function sayHi() {
    fetch('http://fourtonfish.com/hellosalut/?lang=LANGUAGECODE&ip=IPADDRESS')
    .then(response => response.json)
    .then(data => {
        console.log(data)
    })
};

sayHi()