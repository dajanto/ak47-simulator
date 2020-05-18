var bullets = 30;
var rounds = 90;
displayAmmo();

// Sounds
var sound_shoot = new Audio("sounds/shoot.wav");
var sound_reload_one = new Audio("sounds/reload_one.wav");
var sound_reload_two = new Audio("sounds/reload_two.wav");
var sound_grabNewAK = new Audio("sounds/grabNewAK.wav");

function shoot() {
	
	if(!outOfBullets()) {
		
		sound_shoot.volume = 0.02;
		sound_shoot.pause();
		sound_shoot.currentTime = 0;
		sound_shoot.play();
	}
	
	if(bullets !== 0) {
		
		bullets--;
		displayAmmo();
	}
}

function reload() {
	
	if(!outOfRounds()) {
		
		sound_reload_one.volume = 0.05;
		sound_reload_two.volume = 0.05;
		sound_reload_one.play();
		sound_reload_two.play();
	}

	if(!isWeaponEmpty() && !outOfRounds()) {
		
		bullets = 30;
		rounds = rounds - 30;
		displayAmmo();
	}
}

function grabNewAK() {
	
	sound_grabNewAK.volume = 0.05;
	sound_grabNewAK.play();
	
	bullets = 30;
	rounds = 90;
	displayAmmo();
}

function displayAmmo() {
	
	document.getElementById("ammo").innerHTML = "( " + bullets + " | " + rounds + ")";
}

function isWeaponEmpty() {
	
	return outOfBullets() && outOfRounds();
}

function outOfBullets() {
	
	return bullets == 0;
}

function outOfRounds() {
	
	return rounds == 0;
}
