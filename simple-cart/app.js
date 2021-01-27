const plusBtn1 = document.getElementById('plusBtn1');
const plusBtn2 = document.getElementById('plusBtn2');
const minusBtn1 = document.getElementById('minusBtn1');
const minusBtn2 = document.getElementById('minusBtn2');
let qty1 = document.getElementById('qty1').value;
let qty2 = document.getElementById('qty2').value;
let product1 = document.getElementById('product1').innerText;
let product2 = document.getElementById('product2').innerText;

let subtotal = document.getElementById('subtotal').innerText;
let tax = document.getElementById('tax').innerText;
let total = document.getElementById('total').innerText;

disabledBtn(minusBtn1, qty1);
disabledBtn(minusBtn2, qty2);

plusBtn1.addEventListener('click', function(){

    qty1 = parseInt(qty1) + 1;
    let res = document.getElementById('qty1').value = qty1;
    console.log(res);

    let result = productTotal(product1, res);
    document.getElementById('product1').innerText = result;
    console.log(result);

 

    disabledBtn(minusBtn1, res);
    
    
});
plusBtn2.addEventListener('click', function(){

    qty2 = parseInt(qty2) + 1;
    let res = document.getElementById('qty2').value = qty2;
    console.log(res);

    let result = productTotal(product2, res);
    document.getElementById('product2').innerText = result;
    console.log(result);

 
    disabledBtn(minusBtn2, res);
    
    
});

minusBtn1.addEventListener('click', function(){
    qty1 = parseInt(qty1) - 1;
    let res = document.getElementById('qty1').value = qty1;

    let result = productTotal(product1, res);
    document.getElementById('product1').innerText = result;
    disabledBtn(minusBtn1, res);
});
 
minusBtn2.addEventListener('click', function(){
    qty2 = parseInt(qty2) - 1;
    let res = document.getElementById('qty2').value = qty2;

    let result = productTotal(product2, res);
    document.getElementById('product2').innerText = result;
    disabledBtn(minusBtn2, res);
});
 

function productTotal(product, result){
    let newProduct1 = parseInt(product);
    let p = newProduct1 * result;
    return p;
  
   
}

function disabledBtn(btn,num){
    if(num == 1){
        return btn.disabled = true;
    } else if(num > 1){
        btn.disabled = false;
    }
}