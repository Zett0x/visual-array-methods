const itemsElement=document.getElementById("items");


// DATA
const arr=["👆","👾","🖨","🚢","🍫","🎨"];

//FUNCTIONS

const loadItems=()=>{
    itemsElement.textContent=`[${arr}]`
}

const push=(el)=>arr.push(el);
const unshift=(el)=>arr.unshift(el);

//INIT
loadItems();