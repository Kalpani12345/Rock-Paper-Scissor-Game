
function rpsGame(yourchoice){
    console.log(yourchoice);

    let humanChoice,botChoice;

    humanChoice = yourchoice.id;
    console.log(humanChoice);

    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);

    let result = decideWinner(humanChoice,botChoice);
    console.log(result);

    let message = finalMessage(result);

    rpsFrontEnd(yourchoice.id,botChoice,message)
}




function randToRpsInt(){
    return Math.floor(Math.random()*3)
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number]
}

function decideWinner(yourchoice,computerChoice){
    let rpsDatabase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }

    let yourScore = rpsDatabase[yourchoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourchoice];

    return [yourScore,computerScore]
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return{'message':'You Lost', 'color':'red'}
    }
    else if(yourScore === 0.5){
        return{'message':'You Tied', 'color':'yellow'}
    }
    else{
        return{'message':'You Win', 'color':'blue'}
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    let imageDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" +imageDatabase[humanImageChoice] 
    +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>";

    messageDiv.innerHTML = "<h1 style = 'color:"+finalMessage['color'] 
    +"; font-size:60px; padding:30px'>" +finalMessage['message'] +" </h1>"; 

    botDiv.innerHTML = "<img src = '" +imageDatabase[botImageChoice] 
    +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>";

    

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)
    

}