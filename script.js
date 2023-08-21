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
            
            
            firstNum = displayContent;
            sign = btn.id;
            displayContent = '';
            
            
           

        }
        else {
            displayContent += btn.value;
        }

        display.innerText += btn.value;
        
      
    })


});



equal.addEventListener('click', () =>{


    secondNum = displayContent;
    
   display.textContent=     `${operate(sign)}`;
   displayContent = operate(sign);

});

clearBtn.addEventListener('click', () => {
       firstNum='';
       secondNum='';
       sign='';
    displayContent = '';
    display.innerText = '';
    display.appendChild(dummy);

});



function operate(sign) {

    switch (sign) {

        case 'add':
            return +firstNum + +secondNum;
        case 'subtract':
            return +firstNum - +secondNum;
        case 'multiply':
            return  +firstNum * +secondNum ;
        case 'divide':
            return divide +firstNum === 0 ? 'NOT PERMITTED' : +firstNum / +secondNum;
    }
}

