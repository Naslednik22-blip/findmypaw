function guessgame() {
    var guess = 20;
    var number = prompt("Введи число");
    

    if (number>guess) {
        alert("Ваше число больше");
        return guessgame();
    }
    else if (number<guess) {
        alert("Ваше число меньше");
        return guessgame();
    }
    else {
        return alert("Угадали!");
    }
}
//guessgame();
function reminder(){
    alert("Ты здесь слишком долго");
    window.location.href("");
    window.close();
}
//setTimeout(reminder, 5000);


function validform() {
    var name = document.getElementById("name").value;
    console.log(name);
    var password = document.getElementById("password").value;
    console.log(password);
    
    var reg_name= /^[а-яёA-Z]+$/i;
    var reg_pass=/^[0-9A-Z]{5,100}$/i;
    
    if (reg_name.test(name)== false) {
        alert("Ошибся в ФИО");
    }
    if (reg_pass.test(password)== false) {
        alert("Ошибся в пароле");
    }
    
    
    
}

document.querySelector(".button").addEventListener("click", validform);