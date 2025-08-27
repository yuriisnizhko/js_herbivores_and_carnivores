'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      const herbIndex = Animal.alive.findIndex((anima) => anima === herbivore);

      if (herbIndex !== -1) {
        Animal.alive.splice(herbIndex, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

const animal1 = new Herbivore('pig');
const animal2 = new Carnivore('tiger');

console.log(animal1);
console.log(animal2);
console.log(Animal.alive);
animal2.bite(animal1);

animal2.bite(animal1);
console.log(Animal.alive);
