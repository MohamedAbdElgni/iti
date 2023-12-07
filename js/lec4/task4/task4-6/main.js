
function stop (){
        var all = document.body
        const divto = document.getElementsByTagName('div')[0]
        all.addEventListener('contextmenu',(a)=> a.preventDefault())

        all.addEventListener('keydown',(e)=>{
            if(e.keyCode===17){
                divto.innerText='you pressed ctrl';
            }
            else if(e.keyCode===18){
                divto.innerText='you pressed alt';
            }
            else if(e.keyCode===16){
                divto.innerText='you pressed shift';
            }
            else{
                divto.innerText=e.keyCode;
            }
            
            
            console.log(e.keyCode)
        })
    }
stop()
