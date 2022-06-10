const itemsElement=document.getElementById("items");


// DATA
const data=["👆","👾","🖨","🚢","🍫","🎨","🧶","🎭","🎗","🎁","🧨","👨‍🦰","👮‍♀️","👮‍♂️","👼","🛴","🚄","🚜","🚈","🚅","🚄","👨‍🦳","👱‍♂️","🍱","🥛","🍓","🌯","😍","🌯"];
const arr=["👆","👾","🖨","🚢","🍫","🎨"];

//FUNCTIONS

const loadItems=()=>{
    itemsElement.textContent=`[${arr}]`
}

const push=(el)=>arr.push(el);
const unshift=(el)=>arr.unshift(el);

const generateRandomNumber=(min=0,max)=>Math.round(Math.random()*(max-min)+min);


//INIT
loadItems();