/* if in the browser
/* const name = 'superman'
const name = 'superman' */
// but in the node terminal
globalThis.name = "Superman";

// using the new binding

function newPerson(name) {
  //during creation using new() this = {}
  this.name = name;
}

const p1 = new newPerson("Tolu");
const p2 = new newPerson("Joshua"); //this is known as the constructor function

console.log(p1.name, p2.name);

// explicit binding

const contextPerson = {
  name: "Tyrone",
};

function sayMyName() {
  return `My name is ${this.name}`;
}
// every function has a built in method called `call` which allows you to specify the context of a function invoked
console.log("using explicit binding --->", sayMyName.call(contextPerson));

// implicit binding

const person = {
  name: "Oluwaferanmi",
  sayMyName: function () {
    return `My name is ${this.name}`;
  },
};
console.log("using implicit binding --->", person.sayMyName());

// default binding
// used if any of the other above three rules aren't matched
// the this binding relies on the global binding here
console.log("using default binding --->", sayMyName());

/**
 * Order of preferences for the this keyword are (NEID)
 * new binding
 * explicit binding
 * implicit binding
 * defaut binding
 */
