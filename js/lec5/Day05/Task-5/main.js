var winh= window.innerHeight
var winw= window.innerWidth
var movy = winh
console.log(winh+'win height')
console.log(winw+'win width')
var win
function lopen(){
    win = window.open('./subwin.html','subwin','width=100,height=100')
    win.focus()
    lmove()
}

function lclose(){
    win.close()
}

// function lmove(){

//     var randymov
//     while(true){
//         randymov = == Math.floor(Math.random()*winh)
//         win.moveTo(randymov,100)
//         setTimeout(function(){
//             win.moveTo(randymov,winh)
//         },1000)
//     }

    
// }