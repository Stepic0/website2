document.getElementById('age').addEventListener('click', function () {
    document.getElementById('fieldset1').style.backgroundColor = generateRandomColor();
})

document.getElementById('msg').addEventListener('keydown', function () {
    document.getElementById('fieldset2').style.backgroundColor = generateRandomColor();
})

document.getElementById('sel').addEventListener('change', function () {
    document.getElementById('fieldset3').style.backgroundColor = generateRandomColor();
})

document.getElementById('my-from').addEventListener('submit', function () {
    let form = document.getElementById('my-from');
    var data = new FormData(form);
    for (var [key, value] of data) {
        alert(key + ": [" + value + "]")
    }
})

function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}