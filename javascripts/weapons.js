var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  this.stealh = 0;

  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
  this.stealth = 5;
};

var Bow = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 2;
  this.stealth = 10;
};

Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
  this.stealth = -1;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
  this.stealth = 0;
};

WarAxe.prototype = new Weapon();

var Staff = function() {
  this.name = "Staff";
  this.damage = 10;
  this.hands = 2;
  this.stealth = 2;
}