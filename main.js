// nested function's scope
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c =30;
        console.log(a, b, c);
    }
    inner();
}
// nested functions have access to variables declared in their own scope and variables declared in the outer scope
outer();


// closure
/**
 * a closure is the combination of a function bundled together with references to its surrounding state 
 */
function closureOuter() {
    let counter = 0;
    function closureInner() {
        counter++;
        console.log(counter)
    }
    return closureInner;
}
const fn = closureOuter();
fn();
fn();
fn();

/**
 * a closure is the combination of the returned function definition and scope from a function which would let the function have an associated persisted memory
 */

function closureExample() {
    let text = "ade"
    function closureExampleInner(newText){
        text = text + " " + newText;
        console.log(text);
    }
    // to return the function and let it be invoked at a later
    return closureExampleInner;
}
const generator = closureExample() // this returns/results in the closureExampleInner function
generator("finish");
generator("the");
generator("food");
generator("even");
generator("before");
generator("we");
generator("got");
generator("home");