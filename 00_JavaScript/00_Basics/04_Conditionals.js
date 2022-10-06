let isLoggedIn = true;

if (!isLoggedIn) {
    console.log('Click here to login');
}
else {
    console.log('Click here to logOut');
}

// Party 
let age = 18;
if (age < 18) {
    console.log('You cannot come to the party');
}
else if (age == 18) {
    console.log('You can come to the party but you cannot drink');
}
else {
    console.log('You can come to the party');
}

// Odd Even 
let num = 21;
if (num % 2) {
    console.log('num is odd');
}
else {
    console.log('num is even');
}

// AND operator 
let isBoy = true;

if (age >= 18 && isBoy) {
    console.log('Welcome to the party');
}
else {
    console.log('No entry');
}

// LCO 
let isGuest = true;
let isPro = false;

// Anyone who has pro or is a guest can access the code 
if (isGuest || isPro) {
    console.log('You can access the code');
}