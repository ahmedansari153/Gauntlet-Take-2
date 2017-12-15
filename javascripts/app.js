/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        var heroName = $('#player-name').val();
        moveAlong = (heroName !== "");
        break;
      case "card--weapon":
        var charClass = window.location.hash.substr(1);
        moveAlong = (charClass !== "")
        break;
      case "card--battleground":
        var weapon = window.location.has.substr(1);
        moveAlong = (weapon !== "")
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});