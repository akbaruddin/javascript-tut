const Benchmark = require('benchmark');
const isEmptyLoop = require("./isEmpty.loop");
const isEmptyJSON = require("./isEmpty.json");
const isEmptyObject = require("./isEmpty.objectKey");

var suite = new Benchmark.Suite;

suite
    .add('isEmpty#Loop', function() {
        const users = {}
        isEmptyLoop(users);
    })
    .add('isEmpty#JSON', function() {
        const users = {}
        isEmptyJSON(users);
    })
    .add('isEmpty#ObjectKeys', function() {
        const users = {}
        isEmptyObject(users);
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