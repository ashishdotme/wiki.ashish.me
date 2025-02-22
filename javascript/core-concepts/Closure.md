# Closure

### Practical Example (Counter):

```
function createCounter() {
    let count = 0; // Variable in the outer function
    return function () {
        count++; // Inner function has access to 'count'
        return count;
    };
}

const counter = createCounter(); // Create a closure
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

Here:

- `createCounter` defines a private `count` variable.
- The returned function (a closure) remembers `count` and updates it each time it's called, even though `createCounter` has finished running.