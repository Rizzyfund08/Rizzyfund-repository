let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

//Next, use the Spread operator which enables us to apply functions to more varriables without having to write code for each one..

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// For Number Inputs & inner values of the calc

btnSpread.forEach(( button,  i) => {
    button.addEventListener ("click", () => {
        // Inner Values For Calculator

        if  (resultBox.innerHTML == "0") {
          resultBox.innerHTML = "";
        }
      
        let value = btns [i] . innerHTML;
        resultBox.innerHTML += value;   
    } );
} );

// The arrowhead is used to write shorter code in JavaScript..

// Function To Evaluate Strings i.e what should happen when an arithmetric operation is carried out..

function evaluate(fn) {
    return new Function('return' + fn) ();
}

// To Calculate All Functions

total.addEventListener('click', () => {
    let allInputs = resultBox.innerHTML;

    resultBox.innerHTML = evaluate(allInputs);

    console.log (evaluate (allInputs) );
} );

// To  Clear All Inputs

clearBtn.addEventListener('click', () => {
    resultBox.innerHTML = "0";
} )