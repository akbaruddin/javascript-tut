const isEmptyLoop = require("./isEmpty.loop");
const isEmptyJSON = require("./isEmpty.json");
const isEmptyObject = require("./isEmpty.objectKey");

test('Loop isEmpty {} => true', () => {
    const users = {}
    expect(isEmptyLoop(users)).toBe(true);
});

test('Loop isEmpty {} => false', () => {
    const users = {
        "class": {}
    }
    expect(isEmptyLoop(users)).toBe(false);
});

test('JSON isEmpty {} => true', () => {
    const users = {}
    expect(isEmptyJSON(users)).toBe(true);
});

test('JSON isEmpty {} => false', () => {
    const users = {
        "class": {}
    }
    expect(isEmptyJSON(users)).toBe(false);
});

test('Objects isEmpty {} => true', () => {
    const users = {}
    expect(isEmptyObject(users)).toBe(true);
});

test('Objects isEmpty {} => false', () => {
    const users = {
        "class": {}
    }
    expect(isEmptyObject(users)).toBe(false);
});