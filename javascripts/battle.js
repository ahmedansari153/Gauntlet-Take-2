$(document).ready(function() {
  var i=0;
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
  $('#attack').click(function(event) {
  	$('.heroStats').empty();
  	$('.enemyStats').empty();

  	$('.heroStats').append(
      "<li>Health: " + objects.player.health + "</li>" +
      "<li>Intelligence: " + objects.player.intelligence + "</li>" +
      "<li>Strength: " + objects.player.strength + "</li>" +
      "<li>Level: " + objects.player.level + "</li>" +  
      "<li>Experience: " + objects.player.experience + "</li>"
    )
    $('.enemyStats').append(
      "<li>Health: " + objects.enemy.health + "</li>" +
      "<li>Intelligence: " + objects.enemy.intelligence + "</li>" +
      "<li>Strength: " + objects.enemy.strength + "</li>" +
      "<li>Level: " + objects.enemy.level + "</li>"
    ) 

    if (i < 2) {
    	console.log(i)
      objects.enemy.health -= objects.player.strength
      if (objects.enemy.health <= 0) {
        i++;
        objects.enemy = monster();
      }
      if (objects.player.health <= 0) {
      	alert("game over")
      }
    }
  }); 
})