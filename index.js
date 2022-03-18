const pwEl = document.querySelectorAll(".pw-input")
const lcAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const ucAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// a Function that return a number from 1 to "lastNumber" (notIncluded)
const genRandNumber = (lastNumber) => Math.floor(Math.random() * lastNumber)

const genPW = () => {
    // Loop Through all password inputs
    pwEl.forEach((e) => {
        // Declare important variables and constants
        let LCN = 4 // Lower case characters on the password
        let UCN = 4 // Upper case characters on the password
        let NN = 4 // Numbers on the password
        let SN = 3 // Symbols numbers on the password
        const pwLength = LCN + UCN + NN + SN // password length = sum of all 4
        let pw = ''
        // Loop through all lassword length (so if pw length = 16 we need to loop 16 times)
        for(let i = 0; i < pwLength; i++) {
            // Get a random pick from our main constants (lcAlpahbet, ucAlpahabet, .....)
            // Then -- from it's number so when it's 0, we need no more of it's type on our password
            randPick = genRandNumber(4)
            if(randPick == 0 && LCN) { // lcAlphabet
                pw += lcAlphabet[genRandNumber(lcAlphabet.length)]
                LCN--
            } else if(randPick == 1 && UCN) { // ucAlphabet
                pw += ucAlphabet[genRandNumber(ucAlphabet.length)]
                UCN--
            } else if(randPick == 2 && NN) { // numbers
                pw += numbers[genRandNumber(numbers.length)]
                NN--
            } else { // symbols
                pw += symbols[genRandNumber(symbols.length)]
                SN--
            }

        }

        // Set the value of the element (input value) to the generated password
        e.value = pw;


        // Event listener for the copy!
        e.addEventListener("click", () => {
            e.select();
            document.execCommand("copy");
        })
    })

}


// Launch it
genPW()