const Benchmark = require('benchmark');
const { rangeRight } = require('lodash');
var suite = new Benchmark.Suite;

let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

function* rangeG(start, last) {
  for (let i = start; i <= last; i++) {
    yield i
  }
}

suite
    .add('range with generator', function() {
      for (let num of rangeG(1, 5)) {
        num; // 1, then 2, 3, 4, 5
      }
    })
    .add('range with symbol', function() {
      for (let num of range) {
        num; // 1, then 2, 3, 4, 5
      }
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });