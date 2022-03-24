/**
 * functioal currying is a way of functional programmming in which we transform a function with multiple arguments into a sequence of nesting functions one argument at a time
 * e.g. f(a, b, c) ==> f(a)(b)(c)
 */

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(19, 5, 10));

/**
 * so we would want to curry sum(19, 5, 10) ==> sum(19)(5)(10 )
 */

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(3)(4)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);

// currying is used to compose reusable functions

function alertTerminal(text, status, state) {
  return JSON.stringify({
    terminalState: state,
    terminalStatus: status,
    terminalText: text,
  });
}

function logTerminal(fn) {
  return function (text) {
    return function (status) {
      return function (state) {
        return fn(text, status, state);
      };
    };
  };
}

const logInfo = logTerminal(alertTerminal);
console.log(logInfo("logging terminal successful")("sucess")(true));
console.log(logInfo("error logging terminal")("failed")(false));

// google more about practical applications of currying
