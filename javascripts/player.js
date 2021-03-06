/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = 300;
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;
  this.level = 1;
  this.experience = 0;
  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};
Gauntlet.Combatants.Player.prototype.setName = function(name) {
  this.playerName = name;
}

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Gauntlet.Combatants.Player.prototype.setClass = function(charClass) {
  this.class = charClass;
}

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
Gauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 15;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Ninja"];
};

Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Dwarve = function() {
  var randomSkin;

  this.species = "Dwarve";
  this.intelligence = this.intelligence - 10;
  this.strength += 10;
  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Shaman", "Hunter", "Monk", "Thief"];
};

Gauntlet.Combatants.Dwarve.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Elf = function() {
  var randomSkin;

  this.species = "Elf";
  this.intelligence = this.intelligence + 30;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Mage", "Hunter", "Monk", "Assassin"];
};

Gauntlet.Combatants.Elf.prototype = new Gauntlet.Combatants.Player();

/*
  Define the base properties for a monster in a 
  constructor function.
 */
Gauntlet.Combatants.Monster = function() {
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

