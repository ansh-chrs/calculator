const display = document.querySelector('.display');
const inputBtn = document.querySelectorAll('.input');
const clearBtn = document.querySelector('#clear');
const dummy = document.querySelector('.dummy');
const  deleteBtn = document.querySelector('#delete');
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
            result = b;
    }
 

      if(result === 'invalid')
      {return result}

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


deleteBtn.addEventListener('click',()=>{
 let content = display.textContent;
 let signArr = ["&divide;", "&times", "&minus;","&plus;" ];

 if(displayContent)
    {
        displayContent = displayContent.slice(0, -1);
        console.log(displayContent);
    }
  else if(sign)
{

    sign = '';
    console.log(sign);
}
else{
    firstNum = firstNum.slice(0, -1);
    console.log(firstNum);
}





 if(content.length !== 1)
 {
    display.textContent =content.slice(0, -1);   
}
 else{

    display.innerText = '';
    if (display.firstChild !== dummy) {
        display.appendChild(dummy);
    }
 }

} );


