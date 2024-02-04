let randcolour = {};

function generatecolour() {
    randcolour ={
        red : Math.floor(Math.random()*256),
        blue : Math.floor(Math.random()*256),
        green : Math.floor(Math.random()*256)
    };
    let rgbColorString = `rgb(${randcolour.red},${randcolour.green},${randcolour.blue})`;

    // Set the background color of the colorfulDiv
    document.getElementById('colorfulDiv').style.backgroundColor = rgbColorString;

    document.querySelector('.slider').style.display = 'block';

}

function update() {
    let red = document.getElementById("RedInput").value;
    let green = document.getElementById("GreenInput").value;
    let blue = document.getElementById("BlueInput").value;

    document.getElementById('RedValue').textContent = red;
    document.getElementById('GreenValue').textContent = green;
    document.getElementById('BlueValue').textContent = blue;

    let guessstring = `rgb(${red},${green},${blue})`;

    console.log(guessstring);

    document.getElementById('userguess').style.backgroundColor = guessstring;

    if (red === "0" && green === "0" && blue === "0") {
        document.getElementById('accuracy').textContent = "Accuracy: 0%";
    }

}

function result() {
    let red = document.getElementById("RedInput").value;
    let green = document.getElementById("GreenInput").value;
    let blue = document.getElementById("BlueInput").value;

    red = parseInt(red);
    green = parseInt(green);
    blue = parseInt(blue);

    reddiff = Math.abs(red - randcolour.red);
    greendiff = Math.abs(green - randcolour.green);
    bluediff = Math.abs(blue - randcolour.blue);

    if (red === 0 && green === 0 && blue === 0) {
        document.getElementById('accuracy').textContent = "Accuracy: 0%";
        return;
    }

    error = ((reddiff+bluediff+greendiff)*100)/765
    accuracy = 100 - error

    document.getElementById('Guess').textContent = "Your Guess: R:" + red +", G:"+ green +", B:"+ blue ;
    document.getElementById('Generated').textContent = "Generated Colour: R:" +randcolour.red+", G:"+randcolour.green+", B:"+randcolour.blue;
    document.getElementById('accuracy').textContent = "Accuracy: " + accuracy.toFixed(2) + "%";
    console.log("Accuracy: " + accuracy + "%");

    document.querySelector('.slider').style.display = 'none';
    document.querySelector('.output').style.display = 'block';

}

function NewGame(){

    StartGame();
    document.querySelector('.output').style.display = 'none';

}

function StartGame(){

    generatecolour();
    RedInput.value = 0;
    GreenInput.value = 0;
    BlueInput.value = 0;
    document.querySelector('.start').style.display = 'none';

    update();

}

function Exit(){

    document.querySelector('.container').innerHTML = '<h1>Thank you for playing!</h1>';

}