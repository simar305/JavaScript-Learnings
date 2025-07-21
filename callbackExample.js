function greetHello(name, callback) {
    callback(`hello', ${name}!`)
}

greetHello('Simar', message => console.log(message))