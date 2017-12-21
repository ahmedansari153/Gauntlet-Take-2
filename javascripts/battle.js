$(document).ready(function() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var monster = function() {
    var monsters = ["Orc", "Goblin", "Tauren"];
    var randomNum = getRandomIntInclusive(0, 2);
    var generated = new Gauntlet.Combatants[monsters[randomNum]]();
    if (generated.class.magical) {
      generated.weapon = new Staff();
    }
    else {
      generated.weapon = new WarAxe();
    }
    return generated;
  }
  function updateStats() {
  	$('.heroStats').empty();
  	$('.enemyStats').empty();

  	 $('.heroStats').append(
      "<li>Race: " + objects.player.species + "</li>" +
      "<li>Class: " + objects.player.class.name + "</li>" +
      "<li>Health: " + objects.player.health + "</li>" +
      "<li>Intelligence: " + objects.player.intelligence + "</li>" +
      "<li>Strength: " + objects.player.strength + "</li>" +
      "<li>Level: " + objects.player.level + "</li>" +  
      "<li>Experience: " + objects.player.experience + "</li>"
    )
    $('.enemyStats').append(
      "<li>Race: " + objects.enemy.species + "</li>" +
      "<li>Class: " + objects.enemy.class.name + "</li>" +
      "<li>Health: " + objects.enemy.health + "</li>" +
      "<li>Intelligence: " + objects.enemy.intelligence + "</li>" +
      "<li>Strength: " + objects.enemy.strength + "</li>" +
      "<li>Level: " + objects.enemy.level + "</li>"
    )  
  }
  function checkGameStatus() {
  	if (objects.enemy.health <= 0) {
        i++;
        objects.enemy = monster();
    }
    if (objects.player.health <= 0) {
      	alert("game over")
  	}
	}
  var i=0;
  $('#Fira').click(function(event) {
    if (i <= 2) {
    	console.log(i)
    	if (objects.player.class.magical) {
    		objects.enemy.health = objects.player.intelligence * objects.player.weapon.damage
    		//switch (objects.player.spell)
    	}
      checkEnemy();
    }
    updateStats();
  }); 
})