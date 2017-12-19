var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());

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
    console.log(randomNum)
    var generated = new Gauntlet.Combatants[monsters[randomNum]]();
    return generated;
  }

  $('.defeat').click(function(event) {
    console.log(hero)
    var villain = monster();
    console.log(villain)
    $('.heroStats').append(
      "<li>Health: " + hero.health + "</li>" +
      "<li>Intelligence: " + hero.intelligence + "</li>" +
      "<li>Strength: " + hero.strength + "</li>" +
      "<li>Level: " + hero.level + "</li>" +  
      "<li>Experience: " + hero.experience + "</li>"
      )
    $('.enemyStats').append(
      "<li>Health: " + villain.health + "</li>" +
      "<li>Intelligence: " + villain.intelligence + "</li>" +
      "<li>Strength: " + villain.strength + "</li>" +
      "<li>Level: " + villain.level + "</li>"
      )
    $('#attack').click(function(event) {
      villain.health -= hero.strength
      if (villain.health <= 0) {
        i++;
      }
    });     
  });
});
