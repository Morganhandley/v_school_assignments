var readline = require('readline-sync');

var randomGenerator = function (start, end) {
    return Math.floor(Math.random() * end) + start;
}

var question = readline.question('\nYou wake up alone in an unfamiliar forest and can rememeber nothing about why you are here or how you got here.\n What do you want to do?\n Press[A] to get up and look around, or [B] to lay there a bit longer and try to remember why you are here.')

if (question === 'A' || 'a'){
    answerA1();
}
    else if (question === 'B' || 'b'){
        answerB1();
    }




function answerA1() {
    var question = readline.question('You groggily get to your feet and wander and start walking. After awhile you hear what sounds like people. What do you want to do? Press [A] to walk closer to get a better look, or [B] to try and sneak farther away')
    
    if (question === A || a) {
        answerA1A();
    }
       if (question === B || b) {
        answerA1B();
    }

}

function answerB1() {
    var question = readline.question('You lie there for a while longer, straining you mind to try and remember what this place is, and how you got there. After half an hour you still cannot rememeber anything except a vague sense of caution. But then again who wouldnt feel that finding themselves in your predicament? Press [A] to get up and look around a little bit, or [B] to play it safe and hope your memory returns.')
    
     if (question === A || a) {
        answerB1A();
    }
       if (question === B || b) {
        answerB1B();
    }

}


function answerA1A() {
    var question = readline.question('You quietly walk closer, hoping to get a better look. When you get to a thicket of trees, you try to see through to what sounds like a group of campers on the other side. However, you suddenyl feel something sharp stick into your back. "Dont move" you hear a gruff voice say from behind. What do you want to do? Press [A] to try and run, or [B] to do as you are told.)
                                         
                                         
        if (question === A || a) {
            console.log('Before anyone can react you dart off! you feel a familiar sense of stealth, and a mastery of the terrrain around you. Perhaps you were trained for things like this and this is all just part of your mission. You then feel a burning pain in your leg and look down to see an arrow has protruded clean through your leg. you stumble, and feel another seering pain in your right shoulder. Your world goes fuzzy, a blur, and then...black.')
            gameOver();
        }
        else if (question === B || b) {
            console.log('You put you hands up and excaim that you come in peace. You feel a familiar sense of confidence as you speak the words, and a mastery of language and subtle persuasion. Perhaps you were trained for things like this and this is all just part of your mission. You then feel a burning pain in your leg and look down to see a sword has protruded clean through your leg. you stumble, and feel another seering pain in your right shoulder. Your world goes fuzzy, a blur, and then...black.')
            gameOver();
        }
    
}

function answerA1B(){
    console.log('You dont want to push your luck so you start walking quietly away...But then hear someone shout for you to STOP.')
    console.log('Before anyone can react you dart off! you feel a familiar sense of stealth, and a mastery of the terrrain around you. Perhaps you were trained for things like this and this is all just part of your mission. You then feel a burning pain in your leg and look down to see an arrow has protruded clean through your leg. you stumble, and feel another seering pain in your right shoulder. Your world goes fuzzy, a blur, and then...black.')
    gameOver();
    
}

function answerB1A(){
   answerA1();
    
}

function answerB1B(){
    consle.log('You decide to play it safe, and hope your memory returns. You eventually fall into sleep...\n When you wake, you remember that you were wrongfully imprisoned by the evil king, and your only chance of escape was to take an invisibilty potion that will make you you invisible anytime you are completely still. The only catch is, it gives you temporary amnesia. You remember that many have tried to escape this way, but always end up wandering around in the amnesia and are captured. You make your way out of the kingdom, standing absolutely still anytime otheres are near. You make it to the next village and lead them and the surrounding villages in a bloody revolt, reclaiming the throne for yourself, cuz you also remember you are the rightful king.')
    gameWin();
}

function gameOver() {
    console.log('G A M E  O V E R')
}

function gameWin(){
    console.log(YOU WON THE GAME!!!!);
}