const tHeadRow =document.getElementById('table-heading-row');
const tBody =document.getElementById('table-body');
const boldButton = document.getElementById('bold-btn');
const italicsButton = document.getElementById('italics-btn');
const underlineButton = document.getElementById('underline-btn');

const columns=26;
const rows=100;
let currentCell;

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