let x = document.querySelector('div')
console.log(x);

x.addEventListener('click',
    (a) => { 
        console.log(a.target)
    })