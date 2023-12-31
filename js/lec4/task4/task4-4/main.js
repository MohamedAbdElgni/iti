var prop=[
    {fontfamily:{
        pname:'font-family',
        value:['arial','courier','georgia','impact','verdana']
    }}
    ,
    {textalign:{
        pname:'text-align',
        value:['left','center','right','justify']
    }},{lineheight:{
        pname:'line-height',
        value:['normal','10px','15px','1.5px']
    }},{letterspacing:{
        pname:'letter-spacing',
        value:['normal','-1px','2px','3px']
    }},{textdecoration:{
        pname:'text-decoration',
        value:['none','line-through','overline','underline']
    }},
    {texttransform:{
        pname:'text-transform',
        value:['none','capitalize','uppercase','lowercase']
    }},{color:{
        pname:'color',
        value:['red','blue','green','black']
    }},
]
var box = document.querySelector('.box');
var text = document.querySelector('.text');

for (const x of prop) {
    console.log(Object.values(x)[0].values) 
    const col = document.createElement('div');
    col.classList.add('col');
    
    const title = document.createElement('h3');
    title.innerText = Object.keys(x)[0];
    col.appendChild(title);

    const rbox = document.createElement('div');
    rbox.classList.add('rbox');

    for (const value of Object.values(x)[0].value) {

        console.log(Object.values(x))
        const rad = document.createElement('input');
        rad.type = 'radio';
        rad.name = Object.values(x)[0].pname; 
        rad.value = value;
        rad.setAttribute('id', value);
        rbox.appendChild(rad);
        

        const lab = document.createElement('label');
        lab.innerText = value;
        lab.setAttribute('for', value);
        rbox.appendChild(lab);
    }

    col.appendChild(rbox);
    box.appendChild(col);
}


// rbox.addEventListener('click',()=>{
//             console.log('click')
//         })

const btns = document.getElementsByTagName('input')

for(const btn of btns){
    btn.addEventListener('click',()=>{
        text.style[btn.name]=btn.value
    })
}