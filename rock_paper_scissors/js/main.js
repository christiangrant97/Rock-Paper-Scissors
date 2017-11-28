var botScore=0,
	playerScore=0;

	//Users clicks buttons. Event listener triggers the the throw functions
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("paper").onclick=playerThrowsPaper;

//Create the functions that responds to the clicks
function playerThrowsRock(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
	//Random selection by the bot between scissors, rock and paper
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}

//Trigger comparisson between player choice and bot choice
function checkWhoWon(botsWeapon,playersWeapon){
	displaySelections(botsWeapon,playersWeapon);

	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie.");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

//Modify scores according to result
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore +=1;
	document.getElementById("humanScore").innerHTML = playerScore;
	displayCompleteMessage("Awesome, you're a winner");
}

//Message display functions
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
function displaySelections(bot,player){
	document.getElementById("selection").innerHTML=("Bot selected: "+bot+" - "+"Player selected: "+player);
}
