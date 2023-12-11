var winh = window.innerHeight
var winw = window.innerWidth
var movy = winh
console.log(winh + 'win height')

function lopen() {
    var win = window.open('./subwin.html', 'subwin', 'width=100,height=100');
    win.focus();
    console.log(win.screenY);
    win.moveBy(200, 0);

    let movy = 10; // Initialize movy here

    function moveWindow() {
        if (movy >= window.innerHeight || movy <= 0) {
            console.log(movy + 'mov y sec');
            movy = -movy;
        }

        win.moveTo(win.screenX, movy);
        console.log(movy + 'mov y sec');
        movy += 50;
    }

    let clos = document.querySelector('.btnclose');
    clos.addEventListener('click', () => {
        win.close();
    });

    let stop = document.querySelector('.btnstop');
    let int;

    stop.addEventListener('click', () => {
        clearInterval(int);
        win.focus()
    });

    int = setInterval(moveWindow, 500);
}





