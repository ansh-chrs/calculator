const display = document.querySelector('.display');
const inputBtn = document.querySelectorAll('.input');
const clearBtn = document.querySelector('#clear');
let displayContent = '';

inputBtn.forEach((btn)=> {
 
    


    btn.addEventListener('click', (e)=>{
        
    
        displayContent += e.target.value;
        display.innerText= displayContent;

        console.log(displayContent);
    })


});

clearBtn.addEventListener('click',() =>{

    displayContent='';
    display.innerText='';

});




const firstNum = '';
const secondNum ='';
const sign = '';

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{

    return a - b;
}

function multiply(a ,b)
{

    return a * b;
}

function divide( a , b)
{
       return b===0 ? 'NOT PERMITTED' : a/b ;
}


function operate( sign )
{

 switch (sign) {

  case '+':
   return add(firstNum, secondNum);  
   case '-':
   return subtract(firstNum, secondNum);
   case '*':
   return multiply(firstNum, secondNum);
   case '-':
   return divide(firstNum, secondNum);
 }
}

