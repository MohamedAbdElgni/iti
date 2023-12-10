var winh = window.innerHeight
var winw = window.innerWidth
var movy = winh
console.log(winh + 'win height')
console.log(winw + 'win width')
function lopen() {
    var win = window.open('./subwin.html', 'subwin', 'width=100,height=100');
    win.focus();
    function moveWindow() {
        if (win.screenY >= winh) {
            console.log(win.screenY)
            win.moveBy(0, -110);
        } else if (win.screenY > 100) {
            console.log(win.screenY)
            win.moveBy(0, 50);

        }
    }

    let clos = document.querySelector('.btnclose')
    clos.addEventListener('click', () => { win.close() })

    setInterval(moveWindow, 1000);
}







