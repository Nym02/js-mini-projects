let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let color = document.querySelector('.color');
let btn = document.getElementById('btn');
let bg = document.getElementById('bg');



btn.addEventListener('click', ()=>{
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[randomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    bg.style.backgroundColor = hexColor;
})


function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}