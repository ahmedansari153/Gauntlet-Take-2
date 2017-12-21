function generateClass() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();
  return this.class;
}

Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.selectedMonster = false;
  this.generateClass(); 
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();

Gauntlet.Combatants.Goblin = function() {
  this.health = this.health + 10;
  this.intelligence += 10;
  this.species = "Goblin";
  this.allowedClasses = ["Warrior", "Shaman", "Conjurer"];
  this.selectedMonster = false;

  this.generateClass();
};

Gauntlet.Combatants.Goblin.prototype = new Gauntlet.Combatants.Monster();

Gauntlet.Combatants.Tauren = function() {
  this.health = this.health + 30;
  this.species = "Goblin";
  this.allowedClasses = ["Warrior", "Monk", "Shaman"];
  this.selectedMonster = false;
  this.generateClass();
};

Gauntlet.Combatants.Tauren.prototype = new Gauntlet.Combatants.Monster();
