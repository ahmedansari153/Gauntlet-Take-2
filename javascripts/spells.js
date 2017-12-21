/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "ice", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = 20;

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Fira = function() {
  this.name = "fira";
  this.damage = 10;
  this.type = this.damageTypes['fire'];
  this.burnChnc = 15;
};
Gauntlet.SpellBook.Fira.prototype = new Gauntlet.SpellBook.Spell();


Gauntlet.SpellBook.Blizzara = function() {
  this.name = "Blizzara";
  this.damage = 15;
  this.type = this.damageTypes['ice'];
  this.freezeChnc = 10;

};
Gauntlet.SpellBook.Blizzara.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Thundara = function() {
  this.name = "Blizzara";
  this.damage = 8;
  this.type = this.damageTypes['lightning'];
  this.shockChnc = 25;

};
Gauntlet.SpellBook.Thundara.prototype = new Gauntlet.SpellBook.Spell();