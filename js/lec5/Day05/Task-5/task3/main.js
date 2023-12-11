var win = open('./subwin.html', 'subwin', 'width=300,height=150');

win.focus();

function scrollWin() {
    var winBody = win.document.querySelector('body');
    win.scrollTo(0, winBody.offsetHeight);
}

win.addEventListener('load', function () {
    setTimeout(function () {
        scrollWin();
    }, 2000);
});

setTimeout(function () {
    win.close();
}, 6000);





