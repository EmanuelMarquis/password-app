const btns = [
    getElementByID("btn-0"),
    getElementByID("btn-1"),
    getElementByID("btn-2"),
    getElementByID("btn-3"),
    getElementByID("btn-4"),
    getElementByID("btn-5"),
    getElementByID("btn-6"),
    getElementByID("btn-7"),
    getElementByID("btn-8"),
    getElementByID("btn-9")
]

const dots = [
    getElementByID("dot-0"),
    getElementByID("dot-1"),
    getElementByID("dot-2"),
    getElementByID("dot-3")
]

let password = String(), charNum;

btns.map(function(btn) { btn.addEventListener("click", function() {
    password += btn.value;
    charNum = password.length;
    colorDots(charNum);
})});

function colorDots(charNum) {
    for(index in dots) {
        if(index >= charNum) break;
        dots[index].style.backgroundColor = "black";
    }
}

function getElementByID(id) {
    return document.getElementById(id);
}