// let, const 구분
// let은 재선언 불가, 재할당 가능하지만 const는 재선언, 재할당이 둘다 불가능하다. 

// let myHeading = document.querySelector('h1'); // 본문 제목에 대한 참조
// myHeading.textContent = 'Hello World!';

// document.querySelector('html').onclick = function() {
//     alert('Stop poking me!');
// }

/* 위 event 코드 풀어쓸 때 */
/*
const _HTML = document.querySelector('html');
function _Event() {
    alert("Stop!");
}
_HTML.onclick = _Event;
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome! ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome! ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}