// Check the userName and password of the user

let userId = 'shubhansuKr@LCO.in'
let userName = 'shubhansu-kr'
let password = 'myNewPassword'

// Validate the email

function validateEmailId(id) {

    // 1. Email id should be in lower case 
    id.toLocaleLowerCase()
    
    // 2. Email id should have only one @ 
    count = 0
    dotIndex = -1, flagDot = 0, atTheRateIndex = -1
    for (const key in id) {
        if (Object.hasOwnProperty.call(id, key)) {
            const element = id[key];
            if (element == '@') {
                ++count
                flagDot = 1
                atTheRateIndex == key 
            }
            if (flagDot && element == '.') {
                if (dotIndex == -1) {
                    dotIndex = key
                }
                else {
                    return `Multiple domain . after @ is not allowed`
                }
            }
        }
    }

    if (count != 1) {
        return `Count @: ${count}, There should be 1 @`
    }    

    // 3. Email must have a valid host name @lco.
    if (dotIndex - atTheRateIndex < 2) {
        return `Invalid Host Name`
    }

    // 4. Email must have a valid domain .in
    if (dotIndex == id.length-1){
        return `Invalid domain`
    }

    // 5. Email must have a proper user name shubhansu@
    if (atTheRateIndex == 0){
        return `Invalid user id`
    }

    return `Valid EmailID`
}

// Says Valid Email ID 
console.log(validateEmailId(userId))


function validatePassword(pass) {
   
    // Conditions for Valid Password 
    
    // 1. if (password.length()) 



}