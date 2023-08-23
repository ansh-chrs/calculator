const display = document.querySelector('.display');
const inputBtn = document.querySelectorAll('.input');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
let attempts = 0;
let firstNum = '';
let sign = '';
let displayContent = '';  // to store content of clicked button 
let decimalCounter = 0;
inputBtn.forEach((btn) => {

    btn.addEventListener('click', () => {

        if (displayContent === `NOT ALLOWED!!` || firstNum === `NOT ALLOWED!!`) {
            return;
        }

        if (display.textContent === '0' && !isNaN(btn.value))  //handling place holder zero 
        {
            display.textContent = '';
        }

        if (displayContent === 'invalid') {
            display.textContent = '';
            displayContent = '';
        }

        if (btn.id === 'decimal') {
            console.log(decimalCounter);
            if (decimalCounter === 0) { decimalCounter++; }
            else {
                return;
            }
        }

        if (btn.classList.contains('sign')) {

            decimalCounter = 0;
            if (attempts === 0) {

                firstNum = displayContent;
                sign = btn.id;
                displayContent = '';
                attempts++;
                display.innerText = firstNum + btn.value;


            }

            else {

                if (displayContent !== '') {
                    firstNum = (operate(firstNum, displayContent, sign)).toString();
                    sign = btn.id;
                    display.innerText = firstNum + btn.value;
                    displayContent = '';

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

    if (displayContent === `NOT ALLOWED!!` || firstNum === `NOT ALLOWED!!`) {
        return;
    }

    displayContent = (operate(firstNum, displayContent, sign)).toString();



    display.textContent = displayContent;
    attempts = 0;
    firstNum = '';
    sign = '';
    decimalCounter = 0;

    if (Number(displayContent) % 1 !== 0) {
        ++decimalCounter;
    }


});

function operate(a, b, sign) {
  debugger;
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
                result = b === 0 ? `NOT ALLOWED!!` : a / b;
                break;
            default:
                result = b;
        }

        if (result === `NOT ALLOWED!!`) { return result }
         
       if(isNaN(result)){return `NOT ALLOWED!!`;}

        return result % 1 === 0 ? result : result.toFixed(2);
    
}


clearBtn.addEventListener('click', () => {
    firstNum = '';
    sign = '';
    displayContent = '';
    display.innerText = '0';
    decimalCounter = 0;
    attempts = 0;
});


deleteBtn.addEventListener('click', () => {
    let content = display.textContent;

    if (content === `NOT ALLOWED!!`) {  // To handle infinity
        firstNum = '';
        sign = '';
        displayContent = '';
        display.innerText = '0';
        decimalCounter = 0;
        attempts = 0;

    }


    else {

        if (displayContent) {

            if (displayContent.slice(-1) == '.') {
                decimalCounter = 0;
            }

            displayContent = displayContent.slice(0, -1);

        }
        else if (sign) {
            sign = '';

        }
        else {

            if (firstNum.slice(-1) == '.') {
                decimalCounter = 0;
            }
            firstNum = firstNum.slice(0, -1);
        }


        if (content.length !== 1) {
            display.textContent = content.slice(0, -1);
        }
        else {
            display.innerText = '0';
        }
    }


});


