var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());
var objects = []
$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  var charValues= []
  var hero;
  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;
    switch (nextCard) {
      case "card--class":
        charValues.heroName = $('#player-name').val();
        moveAlong = (charValues.heroName !== "");
        for (var i = 0; i < hero.allowedClasses.length; i++) {
          console.log(hero.allowedClasses[i]);
          //Only show the allowed classes in the DOM
          $('#class-btns').append(
              "<div class=\"col-sm-4\">"+
                "<div class=\"card__button\">" +
                "<a class=\"class__link btn btn--big btn--blue\" href=#" +hero.allowedClasses[i] + ">" +
                  "<span class=\"btn__prompt\">></span>" +
                  "<span class=\"btn__text\">" + hero.allowedClasses[i] + "</span>" +
                "</a>" +
              "</div>"
            )
        }
        break;
      case "card--name":
        charValues.race = window.location.hash.substr(1);
        //Create our hero depending on the race pick.
        hero = new Gauntlet.Combatants[charValues.race]();
        moveAlong = (charValues.race !== "")
        console.log(hero)
        break;
      case "card--weapon":
        charValues.charClass = window.location.hash.substr(1);
        hero.setClass(new Gauntlet.GuildHall[charValues.charClass]());
        moveAlong = (charValues.charClass !== "")
        if (hero.class.magical) {
          $('#magicWeap').show();
          $('.kineticWeap').hide();
        }
        else {
          $('#magicWeap').hide();
          $('.kineticWeap').show();
        }
        break;
      case "card--battleground":
        charValues.weapon = window.location.hash.substr(1);
        moveAlong = (charValues.weapon !== "");
    }
    if (charValues.race && charValues.heroName && charValues.weapon) {
      hero.setWeapon(new window[charValues.weapon]());
      console.log(hero)
    }
    if (moveAlong) {
      console.log(hero)
      $(".card").hide();
      $("." + nextCard).show();
    }
  });
  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    if (previousCard == "card--name") {
      $('#class-btns').empty();
    }
    $(".card").hide();
    $("." + previousCard).show();
  });

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
  $('.defeat').click(function(event) {
    console.log(hero)
    var villain = monster();
    console.log(villain)
    objects.player = hero;
    objects.enemy = villain
    //Assign bonuses to player
    objects.player.health += objects.player.class.healthBonus;
    objects.player.strength += objects.player.class.strengthBonus;
    objects.player.intelligence += objects.player.class.intelligenceBonus;
    objects.player.strength += objects.player.class.stealthBonus;
    if (hero.class.magical) {
      for (var i = 0; i < objects.player.class.allowedSplls.length; i++) {
        $('#attackBtns').append(
          "<button id=\""+ objects.player.class.allowedSplls[i] +"\">"+ objects.player.class.allowedSplls[i] +"</button>"
        )
      }
    }
    console.log(hero.class.strengthBonus)
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
  }); 
});
