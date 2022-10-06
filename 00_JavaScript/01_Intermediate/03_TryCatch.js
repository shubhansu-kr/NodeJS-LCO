// Try and catch error 

const dollarToRupee = (rup) => {
    return rup * 84
}

// here, let's create multiple cases with and without error 
console.log(dollarToRupee(9)) // no error
console.log(dollarToRupee('five')) // error: NAN Not a number 

// Modify with throw error
const dollarToRupee1 = (rup) => {
    if (typeof(rup) === 'number'){
        return rup * 84
    } 
    else {
        // Error is an inbuilt interface method to genrate error in console
        // So instead of console loggin the error, we should throw it in the
        // console where additional details along with string is also available
        // like line number, desc, etc.
        throw Error('Amount Needs to be in number')
    }
}

// Try and catch
// Program does not freezed due to error 
try {
    convertedRupee = dollarToRupee1('Five')
    console.log(convertedRupee)
} catch (error) {
    console.log(error)
}

console.log('Successfull Control')
// try and catch block does not crashes the program and 