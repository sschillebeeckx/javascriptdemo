function greet(greeting, ...names) {
    console.log(greeting);
    for (let name of names) {
        console.log(name);
    }
}

greet("Hello", "Alice", "Bob", "Charlie");