const pin = document.getElementById('generate-pin-input');

function generatePin() {
    
    let randomNum = Math.random() * 10000;
    
    let randomNewNum = Math.ceil(randomNum) + '';
    

    if(randomNewNum.length < 4){
        generatePin();
        
    } else {
        // console.log(randomNewNum);
        pin.value = randomNewNum;
    }

    
}

const btn = document.getElementById('digit-container');
const typedPin = document.getElementById('typedInput');

btn.addEventListener('click', function (e) {
    console.log(e.target.innerText);

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

const submitBtn = document.getElementById('submit');
let count = 3;
submitBtn.addEventListener('click', ()=>{
    let pinValue = pin.value;
    let typedPinValue = typedPin.value;

    if(pinValue == typedPinValue){
        document.getElementById('notify-2').style.display = 'block';
        document.getElementById('notify-1').style.display = 'none';
    } else if(pinValue != typedPinValue){
        document.getElementById('notify-1').style.display = 'block';
        document.getElementById('notify-2').style.display = 'none';

        count--;
        console.log(count);

        
        document.getElementById('action-left').innerText = count;

        if(count == 0){
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = 'grey';
            submitBtn.style.cursor = 'not-allowed';
            
        }
    }
});