const plusBtn1 = document.getElementById('plusBtn1');
const plusBtn2 = document.getElementById('plusBtn2');
const minusBtn1 = document.getElementById('minusBtn1');
const minusBtn2 = document.getElementById('minusBtn2');
let qty1 = document.getElementById('qty1');
let qty2 = document.getElementById('qty2');
let product1 = document.getElementById('product1').innerText;
let product2 = document.getElementById('product2').innerText;

let subtotal = document.getElementById('subtotal').innerText;
let tax = document.getElementById('tax').innerText;
let total = document.getElementById('total').innerText;
let newProductNum = 0;
let newProductNum2 = 0;


function totalCount(item, isIncrease){
    if(item == 'phone') {
        let quantity = parseInt(qty1.value);
        let quantityNum = quantity;
        if(isIncrease == true){
            quantityNum = quantityNum + 1;
        }
        if(isIncrease == false && quantity > 1){
            quantityNum--;
        }
        
        qty1.value = quantityNum;
    
        let newProduct = parseFloat(product1);
    
        newProductNum = newProduct * quantityNum;
        console.log("Product 1: "+newProductNum);
        document.getElementById('product1').innerText = newProductNum;
        // subtotalPrice1(newProductNum);
    } else if(item == 'case'){
        let quantity = parseInt(qty2.value);
        let quantityNum = quantity;
        if(isIncrease == true){
            quantityNum = quantityNum + 1;
        }
        if(isIncrease == false && quantity > 1){
            quantityNum--;
        }
        qty2.value = quantityNum;
    
        let newProduct = parseFloat(product2);
    
        newProductNum2 = newProduct * quantityNum;
        console.log("Product 2: "+newProductNum2);
        document.getElementById('product2').innerText = newProductNum2;
        // subtotalPrice2(newProductNum2);
    }
    // addSubTotal(newProductNum, newProductNum2);
    totall();
    
    
}

function totall() {
    let productCount = document.getElementById('qty1').value;
    let productNewCount = parseFloat(productCount);
    let caseCount = document.getElementById('qty2').value;
    let caseNewCount = parseFloat(caseCount);

    let totalCount = productNewCount * 10 + caseNewCount * 5;
    document.getElementById('subtotal').innerText = totalCount;

    let tax = totalCount * .1;
    document.getElementById('tax').innerText = tax;

    let grandTotal = totalCount + tax;
    document.getElementById('total').innerText = grandTotal;
}

