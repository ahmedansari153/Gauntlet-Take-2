var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
  this.stealth = 0;
  this.accuracy = 100;
  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
  this.stealth = 5;
  this.accuracy = 80
};
Dagger.prototype = new Weapon();

var Bow = function() {
  this.name = "dagger";
  this.damage = 4;
  this.stealth = 10;
  this.accuracy = 90;
};
Bow.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.stealth = 0;
  this.accuracy = 75;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.stealth = -1;
  this.accuracy = 75
};

WarAxe.prototype = new Weapon();

var Staff = function() {
  this.name = "Staff";
  this.damage = 10;
  this.stealth = 2;
  this.accuracy = 90;
}
Staff.prototype = new Weapon();

var Wand = function() {
  this.name = "Wand"
  this.damage = 8;
  this.hands = 1;
  this.stealth = 5;
  this.accuracy = 80;
}
Wand.prototype = new Weapon();

var Fists = function() {
  this.name = "Fists"
  this.damage = 20;
  this.hands = 1;
  this.stealth = 5;
  this.accuracy = 70;
}
Wand.prototype = new Weapon();