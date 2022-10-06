// var vs let 

// scope - Similar to c++ scope: You can ask for popsicle for parents 
// but not from siblings and childs ;

let iAmGlobal = 21;

if (true) {
    console.log(iAmGlobal); // print 21; 
    let iAmLocal = 07;      // scope local to the block 
    console.log(iAmLocal);
}

// console.log(iAmLocal);  Error: iAmLocal is not defined;

let x = 10;
{
    x = 20;
    console.log(x);   // print 20 
}
console.log(x); // prints 10 

// Now all this scoping thing happens only with let keyword, 
// if we use var keyword to define variable, scenario will be changed 
// the scope of any variable defined using a var is througout the program

let y = 10;
{
    var y1 = 22;
    console.log(y1); 
}
console.log(y1); // prints 22 

// King Territory Problem : Who is the king? 

let king = 'Ram';

console.log(king); // Ram
if (true) {
    // territory 0
    let king = 'lakhan';
    if (true) {
        let king = 'bali';
        console.log(king); // Bali
    }
    console.log(king); // Lakhan 
}

if (true) {
    // territory 1
    console.log(king); // ram
}

// If you do not have a declaration of the variable, and you are using it, 
// it will be global by default 

// eg
if (true) {
    queen = 'ELiza';
    console.log(queen);
}
console.log(queen); // prints eliza : no error 

// but if we use let, the variable scope is localised to the block
 