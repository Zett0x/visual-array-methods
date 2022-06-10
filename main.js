const itemsElement=document.getElementById("items");
const addAtElement=document.getElementById("addAt");
const removeAtElement=document.getElementById("removeAt");

// DATA
const data=["👆","👾","🖨","🚢","🍫","🎨","🧶","🎭","🎗","🎁","🧨","👨‍🦰","👮‍♀️","👮‍♂️","👼","🛴","🚄","🚜","🚈","🚅","🚄","👨‍🦳","👱‍♂️","🍱","🥛","🍓","🌯","😍","🌯"];
const arr=["👆","👾","🖨","🚢","🍫","🎨"];

//FUNCTIONS

const loadItems=()=>{
    itemsElement.textContent=`[${arr}]`
}
const generateRandomNumber=(min=0,max)=>Math.round(Math.random()*(max-min)+min);

// ADD ITEMS FUNCTIONS
const pushRandomEl=()=>{
    arr.push(data[generateRandomNumber(0,data.length-1)]);
    loadItems();
}
const unshiftRandomEl=()=>{
    arr.unshift(data[generateRandomNumber(0,data.length-1)]);
    loadItems();
}

const insertRandomEl=()=>{
    let index=+addAtElement.value;
  
    if(index>arr.length-1)
    index=arr.length;

    console.log(index);

    let randomElement=data[generateRandomNumber(0,arr.length-1)];
    arr.splice(index,0,randomElement)
    loadItems();
}

// REMOVE ITEMS FUNCTIONS
const popElement=()=>{
    arr.pop();
    loadItems();
}

const shiftElement=()=>{
    arr.shift();
    loadItems();
}
const removeElAt=()=>{
    let index=+removeAtElement.value;
    if(index>arr.length-1)
    index=arr.length-1;

    arr.splice(index,1);
    loadItems();
}



//INIT
loadItems();