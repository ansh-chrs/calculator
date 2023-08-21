const display = document.querySelector('.display');
const inputBtn = document.querySelectorAll('.input');
const clearBtn = document.querySelector('#clear');
const dummy = document.querySelector('.dummy');
const equal = document.querySelector('#equal');
let attempts = 0;
let firstNum = '';
let secondNum = '';
let sign = '';
let displayContent = '';  // to store content of clicked button 

inputBtn.forEach((btn) => {

    btn.addEventListener('click', () => {
                   
        if (display.firstChild === dummy) {
            display.removeChild(dummy);
        }

        if (btn.classList.contains('sign')) {

                    // debugger;
            if (attempts === 0) {
               
                firstNum = displayContent;
                sign = btn.id;
                displayContent = '';
                attempts++;
                display.innerText = firstNum + btn.value;

            
            }

            else {

                if (displayContent !== '') {
                    firstNum = operate(firstNum, displayContent, sign);
                    sign = btn.id;
                    display.innerText = firstNum + btn.value;
                    displayContent ='';
                    
                }
                else {
                    sign = btn.id;
                    display.innerText = firstNum + btn.value;
                    
                  
                }
                             
            }



        }
        else {
            displayContent += btn.value;
            display.innerText += btn.value;
        }

        

    })


});


equal.addEventListener('click', () => {

    displayContent = operate(firstNum, displayContent, sign);
    display.textContent = displayContent;
    attempts = 0;

});

function operate(a, b, sign) {


    b = Number(b);
    a = Number(a);
    let result;

    switch (sign) {

        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b === 0 ? 'invalid' : a / b;
            break;
        default:
            result = a;
    }

    return result % 1 === 0 ? result : result.toFixed(2);
}


clearBtn.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    sign = '';
    displayContent = '';
    display.innerText = '';
    display.appendChild(dummy);
    attempts = 0;
});





