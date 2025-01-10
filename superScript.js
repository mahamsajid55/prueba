// superScript.js

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display a greeting message
function displayGreeting(name) {
    const greetings = ["Hello", "Hi", "Hey", "Hola", "Bonjour", "Ciao"];
    const randomGreeting = greetings[getRandomNumber(0, greetings.length - 1)];
    console.log(`${randomGreeting}, ${name}!`);
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Example usage
displayGreeting("Andrés");
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Is 7 prime? ${isPrime(7)}`);
console.log(`Random color: ${getRandomColor()}`);
