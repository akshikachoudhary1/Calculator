let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenVal = '';
for(i of buttons){
    i.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='x'){
            buttonText = '*';
            screenVal += buttonText;
            display.value = screenVal;
        }
        else if(buttonText== 'AC'){
            screenVal = "";
            display.value = screenVal;
            

        }
        else if(buttonText == '='){
            display.value = eval(screenVal);
        }
        else{
            screenVal += buttonText;
            display.value = screenVal;
        }
    })
}