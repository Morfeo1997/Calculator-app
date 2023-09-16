
let body = document.body;
let range = document.getElementById('range');
const buttons = document.querySelectorAll('.btn-1');
const buttons2 = document.querySelectorAll('.btn-theme-2');
const buttons3 = document.querySelector('.btn-theme-3');
const screen = document.querySelector('.result-container');
const btnContainer = document.querySelector('.btn-container');
let result = document.querySelector('.result');
let newChar = '';

function addChar (character){
    newChar += character;
    result.value = newChar;
}

function calculate (){
    try {
        const total = eval(newChar);
        result.value = total;
        newChar = total.toString();
    }
    catch (error){
        result.value = 'Error';
        newChar = '';
    }
}

function del(){
    newChar = newChar.slice(0, -1);
    result.value = newChar;
}


function clean (){
    newChar = '';
    result.value = newChar;
}




range.addEventListener("input", function(){

    const val = parseInt(range.value);

    body.classList.remove('body-theme-1', 'body-theme-2', 'body-theme-3');
    

    if(val === 1){
        body.classList.add('body-theme-1');
        range.classList.remove('range-theme-2', 'range-theme-3');
        range.classList.add('range-theme-1');
        screen.classList.remove('screen-theme-2', 'screen-theme-3');
        screen.classList.add('screen-theme-1');
        result.classList.remove('result-theme-2', 'result-theme-3');
        result.classList.add('result-theme-1');
        btnContainer.classList.remove('btn-bg-2', 'btn-bg-2');
        btnContainer.classList.add('btn-bg-1');
        
        for (const button of buttons) {
            button.classList.remove('btn-1-theme-2' ,'btn-1-theme-3');
            button.classList.add('btn-1-theme-1');
        };
        for (const button of buttons2){
            button.classList.remove('btn-theme-violet', 'btn-theme-cyan');
            button.classList.add('btn-theme-blue');
        };
        buttons3.classList.remove('btn-theme-light-cyan', 'btn-theme-orange');
        buttons3.classList.add('btn-theme-red');
    }
    else if(val === 2){
        body.classList.add('body-theme-2');
        range.classList.remove('range-theme-1', 'range-theme-3');
        range.classList.add('range-theme-2');
        screen.classList.remove('screen-theme-1', 'screen-theme-3');
        screen.classList.add('screen-theme-2');
        result.classList.remove('result-theme-3', 'result-theme-1');
        result.classList.add('result-theme-2');
        btnContainer.classList.remove('btn-bg-1', 'btn-bg-3');
        btnContainer.classList.add('btn-bg-2');
        for (const button of buttons) {
            button.classList.remove('btn-1-theme-1' , 'btn-1-theme-3');
            button.classList.add('btn-1-theme-2');
        };
        for (const btn of buttons2){
            btn.classList.remove('btn-theme-violet', 'btn-theme-blue');
            btn.classList.add('btn-theme-cyan');
        };
        buttons3.classList.remove('btn-theme-light-cyan', 'btn-theme-red');
        buttons3.classList.add('btn-theme-orange');
    }
    else if(val === 3){
        body.classList.add('body-theme-3');
        range.classList.remove('range-theme-2', 'range-theme-1');
        range.classList.add('range-theme-3');
        screen.classList.remove('screen-theme-1', 'screen-theme-2');
        screen.classList.add('screen-theme-3');
        result.classList.remove('result-theme-2', 'result-theme-1');
        result.classList.add('result-theme-3');
        btnContainer.classList.remove('btn-bg-1', 'btn-bg-2');
        btnContainer.classList.add('btn-bg-3');
        for (const button of buttons) {
            button.classList.remove('btn-1-theme-1' , 'btn-1-theme-2');
            button.classList.add('btn-1-theme-3');
        }
        for (const button of buttons2){
            button.classList.remove('btn-theme-blue', 'btn-theme-cyan');
            button.classList.add('btn-theme-violet');
        };
        buttons3.classList.remove('btn-theme-orange', 'btn-theme-red');
        buttons3.classList.add('btn-theme-light-cyan');
    }
})


