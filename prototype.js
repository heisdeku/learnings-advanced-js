function Person(firstname, lastname) {
  (this.firstname = firstname), (this.lastname = lastname);
}
Person.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};
const p1 = new Person("Bruce", "wayne");
const p2 = new Person("Clark", "Kent");
const p3 = new Person("Shola", "Akinlade");
// javascript is a dynamic language and allows us attach properties to functions or objects at any given time
p1.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};
console.log(p1.getFullName());

// in javascript every function has a method called `prototype` that points to an object
console.log(p2.getFullName());
console.log(p3.getFullName());

function SuperHero(fname, lname) {
  // this = {}
  Person.call(this, fname, lname);
  this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
  return `Fighting crime`;
};
/**
 * Object.create() is used to delegate to another object on field lookups
 * when you try to access a method from the Object/ function prototype, it checks if it's there, if it finds it, it uses it, but when it doesn't find it and sees that the prototype has a chain to another prototype because of the Object.create() method and it checks and finds out it does have and executes the method
 */
SuperHero.prototype = Object.create(Person.prototype);
// create an insance of the SuperHero constructor function
const batman = new SuperHero("Ojo", "collins");
console.log(batman.getFullName());
// this is to ensure that the constructor is equal to the SuperHero and makes javascript not think that SuperHero is created from person
SuperHero.prototype.constructor = SuperHero;

/**
 * one use of prototype is to share methods & properties across instances
 * INHERITANCE, also known as prototypal inheritance
 */