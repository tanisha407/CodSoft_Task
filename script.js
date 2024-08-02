let display1 = document.querySelector('input.result'); // get the input element with class 'result'
let btns = document.querySelectorAll('button'); // get all button elements

let string = "";
let arr = Array.from(btns);
arr.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        console.log(e.target);
        if(e.target.innerHTML == '='){
            string = eval(string); // evaluate the string as a mathematical expression
            if (isNaN(string)) {
                display1.value = "Error";
            } else {
                display1.value = string;
            }
            string = ""; // reset the string for the next operation
        } else if(e.target.innerHTML == 'Ac') {
            string = ""; // reset the string when 'Ac' is clicked
            display1.value = "00";
        } else if(e.target.innerHTML == 'Del') {
            string = string.slice(0, -1); // remove the last character when 'Del' is clicked
            display1.value = string;
        } else {
            if (string === "00") {
                string = e.target.innerHTML; // replace "00" with the clicked number
            } else {
                string += e.target.innerHTML; // append the clicked number to the string
            }
            display1.value = string;
        }
    })
})