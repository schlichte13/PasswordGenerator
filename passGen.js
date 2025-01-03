//let letter = String.fromCharCode();
const buttonElement = document.getElementById("myButton");

//Password custiomization form
const form = document.querySelector("passwordOptions");

//Unicode value range for acceptable password characters is 32-126
let min = 32;
let max = 126;
length = 10;


buttonElement.addEventListener("click", () => {
    setPasswordOptions();
    //create empty array
    const code = [];
    //index number limit set at 10, increase by 1 each loop
    for (let i = 0; i < length; i++) {
        //Generate random whole number between max and min
        let x = Math.floor(Math.random() * (max - min + 1)) + min;
        //Convert random number into character
        let y = String.fromCharCode(x);
        //Add character to array at index number
        code[i] = y;
    }
    let characters = code.join("");
    document.getElementById('output').innerHTML = characters;
})

function setPasswordOptions(){
    //get input length from form
    let inputLength = document.querySelector("#passwordLength").value
    //change default value if value is entered
    if(inputLength !== ""){
        length = inputLength;
    }
}