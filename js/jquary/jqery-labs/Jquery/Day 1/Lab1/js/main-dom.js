$(document).ready(function () {
    //*1
    let con1 = $('.container1')
    //^1-1
    $(con1).append('<div class="black">ali</div>');

    //^1-2

    $(con1).prepend('<div class="white">mohamed</div>');

    //^1-3

    let blu = $('.container1 .blue')

    blu.prepend($('<p>', { class: 'yellow' }))

    //*2

    let con2ps = $('.container2 p')

    console.log(typeof con2ps)
    console.log(con2ps[1])


    con2ps.each(function () {
        let a = $('<a>', {
            href: 'http://' + $(this).text(),
            text: $(this).text()
        })
        $(this).replaceWith(a);
    });


    //*3

    let con3 = $('.container3 img');

    con3.wrap("<figure></figure>");

    $('.container3 figure').append($('<figcaption>').text('Coffee'))

    //^4
    $('.container4 td.col-age').empty();

    $('.container4 td:contains("mohsen")').addClass('man');

    $('.container4 td:contains("@")').toggleClass('your-email');
    //^5
    $('.container5 li').filter(function (index) {
        $(this).css('color', 'red')
        return index % 3 === 0

    })

    //^6
    $('.container6 input[name="username"]').val('yourname');
    $('.container6 input[type="checkbox"]').prop('checked', true);

})



