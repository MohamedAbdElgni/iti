var win = window.open('./sub.html', 'subwin', 'width=300,height=100')

win.focus()

setTimeout('700')

win.addEventListener('load', function () {
    var message = 'typing message!!!!';
    var index = 0;

    var intervalId = setInterval(function () {
        win.document.body.textContent += message[index];
        index++;
        
        if (index === message.length) {
            clearInterval(intervalId);
        }
        setTimeout('2500')
        
        if(index===message.length){
            setTimeout(close1, 2000)
        }
    }, 100);
});


function close1() {
    win.close()
}




