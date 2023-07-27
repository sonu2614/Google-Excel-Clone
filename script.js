const tHeadRow =document.getElementById('table-heading-row');
const tBody =document.getElementById('table-body');
const boldButton = document.getElementById('bold-btn');
const italicsButton = document.getElementById('italics-btn');
const underlineButton = document.getElementById('underline-btn');
const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');
const fontSizeDropDown = document.getElementById('font-size');
const fontFamilyDropDown = document.getElementById('font-family');
const bgColorSelect =document.getElementById('bgColor');
const textColorSelect = document.getElementById('textColor')
const cutButton = document.getElementById('cut-button');
const copyButton = document.getElementById('copy-button');
const pasteButton = document.getElementById('paste-button');


const columns=26;
const rows=100;
let currentCell;
let cutCell={};
let lastPressButton;

for(let col=0;col<columns;col++){
    let th = document.createElement('th');
    th.innerText=String.fromCharCode(col+65);
    tHeadRow.append(th);
}

for(let row=1;row<=rows;row++){
    // i create a tr
    let tr=document.createElement('tr');
    //number cell
    let th=document.createElement('th');

    //injecting number in th
    th.innerText=row;
    tr.append(th);
    //append 26 of tds here
    for(let col=0;col<columns;col++){
        let td=document.createElement('td');
        tr.append(td)

        for(let col=1;col<=columns;col++){
            let td = document.createElement('td');
            td.setAttribute('contenteditable','true')
            //unique row and unique col
            //colRow
            td.setAttribute('id',`${String.fromCharCode(col+65)}${row}`);
            td.addEventListener('focus',(event)=>onFocusFn(event));
            tr.append(td);
        }

    }
    tBody.append(tr);
}

let matrix =new Array(rows);
//let matrix=[];
for(let row=0;row<rows;row++){
    matrix[row]=new Array(columns);
    for(col=0;col<columns;col++){
        matrix[row][col]={};
    }
}

function onFocusFn(event){
    currentCell=event.target;
    //console.log(currentCell.id);
    document.getElementById('current-cell').innerText=currentCell.id;

    if(currentCell.style.fontWeight==='bold'){
        boldButton.style.backgroundColor='yellow';
    }
    else{ 
        boldButton.style.backgroundColor='transparent';
    }
}

boldButton.addEventListener('click',()=>{
    if(currentCell.style.fontWeight==='bold'){
        currentCell.style.fontWeight='normal';
    }
    else{
        currentCell.style.fontWeight='bold';
        boldButton.style.backgroundColor='yellow';
    }

    // currentCell.style.fontWeight=currentCell.style.fontWeight==='bold' ? 'normal':'bold';
})

italicsButton.addEventListener('click',()=>{
    if(currentCell.style.fontStyle==='italic'){
        currentCell.style.fontStyle='normal';
    }
    else{
        currentCell.style.fontStyle='italic';
    }

    // currentCell.style.fontStyle=currentCell.style.fontStyle==='italics' ? 'normal':'italics';
})

underlineButton.addEventListener('click',()=>{
    if(currentCell.style.textDecoration==='underline'){
        currentCell.style.textDecoration='none';
    }
    else{
        currentCell.style.textDecoration='underline';
    }

    // currentCell.style.fontStyle=currentCell.style.fontStyle==='underline' ? 'normal':'underline';
})

leftAlign.addEventListener('click',()=>{
    currentCell.style.textAlign='left';
})

centerAlign.addEventListener('click',()=>{
    currentCell.style.textAlign='center';
})

rightAlign.addEventListener('click',()=>{
    currentCell.style.textAlign='right';
})

fontSizeDropDown.addEventListener('change',()=>{
    currentCell.style.fontSize =fontSizeDropDown.value;
})

fontFamilyDropDown.addEventListener('change',()=>{
    currentCell.style.fontFamily =fontFamilyDropDown.value;
})

bgColorSelect.addEventListener('change',()=>{
    currentCell.style.backgroundColor=bgColorSelect.value;
})

textColorSelect.addEventListener('input',()=>{
    currentCell.style.color=textColorSelect.value;
})

//input event create performance issue->due to occur many eventy at a time.

cutButton.addEventListener('click',()=>{
    cutCell={
        style:currentCell.style.cssText,
        text:currentCell.innerText,
    }
    currentCell.innerText='';
    currentCell.style.cssText='';
    lastPressButton='cutButton'
})

pasteButton.addEventListener('click',()=>{
    currentCell.innerText=cutCell.text;
    currentCell.style.cssText=cutCell.style; //currentCell.style=cutCell.style;
    if(lastPressButton==='cutButton'){
        cutCell={};
    }
})

copyButton.addEventListener('click',()=>{
    cutCell={
        style:currentCell.style.cssText,
        text:currentCell.innerText,
    } 
    lastPressButton='copyButton'
})

/*
[
    [{},{},],
    [{},{},],
    [{},{}]
]
*/

/*
[
    [{},{},{}],
    [{},{},{}]
]
*/



