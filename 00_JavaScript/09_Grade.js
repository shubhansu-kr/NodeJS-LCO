const student = {
    name: 'shubhansu-kr',
    roll: 33,
    section: 'GP',
    percentage: 0,
    grade: 'E'
}

const marks = {
    maths: 87,
    science: 90, 
    englist: 88
}

let sum = 0
for (const key in marks) {
    if (Object.hasOwnProperty.call(marks, key)) {
        const element = marks[key];
        console.log(`Your marks in ${key} is ${marks[key]}`)
        sum += marks[key]
    }
}

student.percentage = sum/3

if (student.percentage > 90){student.grade = 'A'}
if (student.percentage > 80){student.grade = 'B'}
if (student.percentage > 70){student.grade = 'C'}
if (student.percentage > 60){student.grade = 'D'}

console.table(student);

// Strict Comparision vs Loose Comparision 

// Strict Comparision ===
// Loose Comparision ==


// Strict comparision: Checks the val as well as the datatype
// Prints False
console.log('2' === 2.0)
if ('2' === 2) {
    console.log('True')
}
else {
    console.log('False')
}

// Loose comparision: Prints True
console.log('2' == 2.0)
if (2 == '2') {
    console.log('True')
}
else {    
    console.log('False')
}

// Loose Comparision: True
console.log(2 == 2.0)
if (2 == 2.0) {
    console.log('True')
}
else {
    console.log('False')
}

// Strict Comparision: False 
console.log(2 === 2.0)
if (2 === 2.0) {
    console.log('True')
}
else {
    console.log('False')
}


// True
console.log('' === '')

// False: Objects are complex and thus two object are not same 
console.log({} === {})