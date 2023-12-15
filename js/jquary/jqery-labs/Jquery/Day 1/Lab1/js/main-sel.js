$(document).ready(function () {
    //^1
    $('.container1 div').each(function () {
        $(this).css('background-color', $(this).attr('class'));
    });

    //^2
    $('.container2 a').each(function () {
        let hrefa = $(this).attr('href')

        if (hrefa.includes('google')) {
            $(this).text('Google')
        }
        else if (hrefa.endsWith('org')) {
            $(this).text('IEEE')
        }
        else if (hrefa.startsWith('https')) {
            $(this).text('Facebook')
        }
        if (hrefa.startsWith('http:')) {
            $(this).append(' Official Website');
        }
    })

    //^3
    $('.container3 figure:eq(2)>img').attr('src', 'img/orange.png')
    $('.container3 figure:eq(2)>figcaption').text("fig.3 - Orange Juice")
    //^4

    //*1
    $('.container4 td[class*="my-name"]').attr('style', 'color: blue;')
    //*2
    $('.container4 td:odd').css('background-color', 'pink')
    //*3
    $('.container4 tr:nth-last-child(1) td:nth-child(2)').css('font-style', 'italic')
    
    //^5
    //*1
    $('.container5 > ul > li:nth-child(2)').css('font-style', 'italic')
    //*2

    $('.container5  ol > li:nth-child(2)').next().css('color', 'red')
});


