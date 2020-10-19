const obj = {}

function B() {
    return obj
}

function A() {
    return obj
}

function C(obj) {
    return obj;
}

function D(obj) {
    return obj;
}

const a = new A;
const b = new B;

console.log(a == b);

const c = new C(obj);
const d = new D(obj);

console.log(c == d);