document.querySelector('h1').onclick = function () {
    alert('Хватит на меня кликать')
};

var myImage = document.querySelector('img');



myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/E0A.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    var myName = prompt('Пожалуйста введите свое имя:');
    localStorage.setItem('name',myName);
    myHeading.textContent = "Mozilla is cool,"+" " + myName;
    if(!localStorage.getItem("name")){
        setUserName();
        }else{
            var storedName = localStorage.getItem("name");
            myHeading.textContent = "Mozilla is cool"+ " " + storedName;
        }
}
myButton.onclick = setUserName();