# JavaScript Questions

## Question 0.1 + 0.2 !== 0.3 

0.1 + 0.2 = 0.30000000000000004(zero dot three fifteen times zero four)
Float standard: https://en.wikipedia.org/wiki/IEEE_754
whenever we add two float this perform in binary

## Question

```javascript
+true = 1;
!'any test' = false
```

```javascript
let arr = [1, 1, 1, 1, 2, 3, 3, 4, 4, 4];

const freq = {};
for(let i = 0; i < arr.length; i++) {
    if (arr[i] in freq) {
    freq[arr[i]] += 1;
  } else {
    freq[arr[i]] = 1;
  } 
}
```

```javascript
// sort
const entry = Object.entries(freq).sort((a, b) => a[1] - b[1]);
console.log(entry);
const arr2 = entry.reduce((acc, val) => acc.concat(Array(val[1]).fill(+val[0])), []);
console.log(arr2)
```
