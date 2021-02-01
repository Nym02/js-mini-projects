function generatePin() {
    const pin = document.getElementById('generate-pin-input');


    let randomNum = Math.random() * 10000;
    
    let randomNewNum = Math.ceil(randomNum) + '';
    

    if(randomNewNum.length < 4){
        generatePin();
        
    } else {
        console.log(randomNewNum);
        pin.value = randomNewNum;
    }

    
}

const btn = document.getElementById('digit-container');
const typedPin = document.getElementById('typedInput');

btn.addEventListener('click', function (e) {
    // console.log(e.target.innerText);

    let digits = e.target.innerText;

    if(isNaN(digits)){
        let t = -1;
        if(digits == 'C'){
            typedPin.value = '';
        } else if(digits == '<'){
            typedPin.value = typedPin.value.slice(0, t);
            t--;
        }

    } else {
        typedPin.value = typedPin.value + digits;
    }

    
    // console.log(digits);
});