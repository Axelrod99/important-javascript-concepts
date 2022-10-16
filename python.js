// challenge 1
function ageindays() {
    var birthYear = prompt('what year were you born.. good friend?');
    var ageindayss = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode(`you are` + ageindayss +  `days old`);
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageindays').remove()
}


// challenge 2
document.querySelector('#catz').addEventListener('click', generateCat);

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('gen-cat')
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);   
}

// challenge 3

function rpsgame(Yourchoice) {

    var humanchoice, botchoice;
    humanchoice = Yourchoice.id;
    console.log(humanchoice)


    botchoice = numberTochoice(randToRpsint());
    console.log(botchoice)

    result = decidewinner(humanchoice, botchoice);
    console.log(result)

    message = finalMessage(result)
    console.log(message)

    rpsfrontend(Yourchoice.id, botchoice, message);
        
}

function randToRpsint() {
    return Math.floor(Math.random()*3);
}

function numberTochoice(Number) {
    return ['rock', 'paper', 'scissors'][Number];
}

function decidewinner(humanchoice,botchoice) {
    var rpsdatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0},
    }

    var yourscore = rpsdatabase[humanchoice][botchoice];
    var computerscore = rpsdatabase[botchoice][humanchoice];

    return[yourscore,computerscore];
}

function finalMessage([yourscore,computerscore]) {
    if (yourscore===1) {
        return{'color': 'green', 'message': 'you won!'};
    } else if (yourscore===0.5) {
        return{'color': 'yellow', 'message': 'you tie!'};
    } else if (yourscore===0) {
        return{'color': 'red', 'message': 'you lost!'};
    }
}

function rpsfrontend(humanImagechoice,botImagechoice,finalMessage) {
    var ImageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    } 

    //to remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var messagediv = document.createElement('div');
    var botdiv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + ImageDatabase[humanImagechoice] + "' height=70 width= 70 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>"
    messagediv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + ImageDatabase[botImagechoice] + "' height=70 width=70 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>"



    document.getElementById('image').appendChild(humandiv);
    document.getElementById('image').appendChild(messagediv)
    document.getElementById('image').appendChild(botdiv);
}



//challenge 4
var all_buttons = document.getElementsByTagName('button')

var copyallbuttons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyallbuttons.push(all_buttons[i]);
}

// console.log(copyallbuttons)


function buttoncolorchange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonred();
    } else if (buttonThingy.value === 'green') {
        buttongreen();
    } else if (buttonThingy.value === 'random') {
        buttonrandom();
    } else if (buttonThingy.value === 'reset') {
        buttonreset();
    }
}

function buttonred(){
    document.getElementById('btn1').style.background = 'red';
    document.getElementById('btn2').style.background = 'red';
    document.getElementById('btn3').style.background = 'red';
    document.getElementById('btn4').style.background = 'red';
    document.getElementById('btn5').style.background = 'red';
    document.getElementById('btn6').style.background = 'red';
    document.getElementById('guess').style.background = 'red';
    document.getElementById('reset').style.background = 'red';
    document.getElementById('catz').style.background = 'red';
}

function buttongreen(){
    document.getElementById('btn1').style.background = 'green';
    document.getElementById('btn2').style.background = 'green';
    document.getElementById('btn3').style.background = 'green';
    document.getElementById('btn4').style.background = 'green';
    document.getElementById('btn5').style.background = 'green';
    document.getElementById('btn6').style.background = 'green';
    document.getElementById('guess').style.background = 'green';
    document.getElementById('reset').style.background = 'green';
    document.getElementById('catz').style.background = 'green';
}



//chalenge 5

function game() {
    let winningnumber = function(lenght) {
        result = '';
        for (let i=0; i < lenght; i++) {
            result += Math.floor(Math.random() * 9) + ',';
        }
        return result;
    }

    
    let slot = winningnumber(3).slice(0,-1);
    console.log(slot);
    
    
    let count = 0
    let guessRight = 0


    while(count < 3) {

        let guess = prompt('please enter your number here')
        if (slot.includes(guess)) {
            let guessLeft = 2 - count;
            console.log(`your guess of ${guess} is correct, you have ${guessLeft} guess left`);
            guessRight += 1;
        }

        if (! slot.includes(guess)) {
            console.log('sorry, you guessed wrong');
        }

        count+=1
        
        if (count === 3) {
            checkWin(guessRight)
        }
    }

    function checkWin(guessRight) {
        if (guessRight===3) {
            let answertext = document.createTextNode(`congrats you just won 200k`);
            let GR1 = document.createElement('GR1');
            GR1.setAttribute('id', 'checkwin')
            GR1.appendChild(answertext);
            document.getElementById('rresult').appendChild(GR1)
        } else if (guessRight===2) {
            let answertext = document.createTextNode(`congrats you just won 50k`);
            let GR2 = document.createElement('GR2');
            GR2.setAttribute('id', 'checkwin')
            GR2.appendChild(answertext);
            document.getElementById('rresult').appendChild(GR2)
        } else if (guessRight===1) {
            let answertext = document.createTextNode(`congrats you just won 5k`);
            let GR3 = document.createElement('GR3');
            GR3.setAttribute('id', 'checkwin')
            GR3.appendChild(answertext);
            document.getElementById('rresult').appendChild(GR3)
        } else {
            let answertext = document.createTextNode(`you lost all your bets`);
            let GR4 = document.createElement('GR4');
            GR4.setAttribute('id', 'checkwin')
            GR4.appendChild(answertext);
            document.getElementById('rresult').appendChild(GR4)
        }
    } 
}

function restart() {
    document.getElementById('checkwin').remove()
} 

//Challenge 5
function enter() {
    var Username = document.getElementById('username');
    var Password = document.getElementById('password');


    var message 

    if (Username.value === '' ){
        alert('input username');
    } else if (Password.value === ''){
        alert('input password')
    } else (process(this))
}

function process(){
    var Username = document.getElementById('username');
    var Password = document.getElementById('password');
    var h3 = document.createElement('h3');
    var llist = document.createTextNode(`${Username.value} ${Password.value}`);
    h3.appendChild(llist);
    document.getElementById('list').appendChild(h3)
}
