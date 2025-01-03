//let letter = String.fromCharCode();

const buttonElement = document.getElementById("myButton");

//Unicode value range for acceptable password characters is 32-126
let min = 32; 
let max = 126;


buttonElement.addEventListener("click", () => {

    //create empty array
    const code = [];

    //index number limit set at 10, increase by 1 each loop
    for (let i = 0; i < 10; i++) {
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
