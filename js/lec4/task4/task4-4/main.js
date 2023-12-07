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
const box = document.querySelector('.box');
var text = document.querySelector('.text');

for (const x of prop) {
    console.log('-------------------iam X from outer-------------------')
    console.log(x)
    console.log('-------------------try slice x-------------------')
    console.log(x[0])
    console.log('---------------so we used Object.keys(x)[0]- to get it from the arr ---big obj from outer--------------------')
    console.log(Object(x))
    console.log('------------------its title[0] from outer---------------------')
    console.log(Object.keys(x)[0]) //*this is the title
    console.log('------------------its title[1]---------------------')
    console.log(Object.keys(x)[1]) //*undfff
    console.log('------------------keys from outer---------------------')
    console.log(Object.keys(x)) 
    console.log('------------------iam values from outer---------------------')
    console.log(Object.values(x))
    console.log('------------------iam values[0] from outer---------------------')
    console.log(Object.values(x)[0])
    console.log('------------------iam value___ from outer---------------------')
    console.log(Object.values(x)[0].value) 
    console.log('------------------iam valueZZ___ from outer---------------------')
    console.log(Object.values(x)[0].value) 
    

    const col = document.createElement('div');
    col.classList.add('col');
    
    const title = document.createElement('h3');
    title.innerText = Object.keys(x)[0];
    col.appendChild(title);

    const rbox = document.createElement('div');
    rbox.classList.add('rbox');

    for (const value of Object.values(x)[0].value) {
        console.log('-------------------iam X from inner--------------------')
        console.log(x)
        console.log('-------------------iam value from inner--------------------')
        console.log(value)
        console.log('-------------------big obj from inner loob--------------------')
        console.log(Object(x))
        console.log('-------------------obj values x from inner loob--------------------')
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