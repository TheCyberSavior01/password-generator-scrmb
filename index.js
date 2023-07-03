const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass_length = 15
const btn = document.querySelector('#btn')
const passOne = document.querySelector('#pass-one')
const passTwo = document.querySelector('#pass-two')
const passFieldText = document.querySelector('.pass-field-text')

function generateRandomPasswords() {
    let init_arr = []

    for(let i = 0; i < pass_length; i++) {
        let idx = Math.floor(Math.random() * characters.length) + 1
        if(characters[idx] === undefined) {
            init_arr.push(characters[67])
        }else {
            init_arr.push(characters[idx])
        }
    }
    
    return init_arr
}

function passwordHandler() {
    let array_of_pass_one = generateRandomPasswords()
    let array_of_pass_two = generateRandomPasswords()

    str_pass_one = ""
    str_pass_two = ""

    for (let i = 0; i < array_of_pass_one.length; i++) {
        str_pass_one += array_of_pass_one[i]
    }

    for (let i = 0; i < array_of_pass_two.length; i++) {
        str_pass_two += array_of_pass_two[i]
    }

    passOne.textContent = str_pass_one
    passTwo.textContent = str_pass_two

    passOne.style.color = '#55F991' 
    passTwo.style.color = '#55F991'

}

function renderPassword() {
    passwordHandler()
    
}



