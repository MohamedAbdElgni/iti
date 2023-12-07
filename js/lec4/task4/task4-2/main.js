let myPage = document;


myPage.body.innerHTML = `
    <div style='margin:auto;'class="con">
        <img style="" width='160px' height='160px'  src="" alt="">
        <h2>title</h2>
        <h3>description</h3>
        <button style="display:inline-block" id='prev'>prev</button>
        <button style="display:inline-block" id='next'>next</button>
        
    </div>
`;



images = [
    {
        src:'/images/1c837c5a5a8477276d097b2646cb1693.jpg',
        title:'sea',
        desc:'a see pic 1 ',
    },
    {
        src:'/images/68a3496b306dc3113637bcbd9fc81b02.webp',
        title:'blue sea',
        desc:'a see pic 2',
    },
    {
        src:'/images/depositphotos_44412805-stock-video-sky-with-clouds.jpg',
        title:'black see',
        desc:'a see pic 3',
    },
    {
        src:'/images/evening_night_sky_266441.jpg',
        title:'title title',
        desc:'a see pic 4',
    },
    {
        src:'/images/gettyimages-158262118-612x612.jpg',
        title:'more see',
        desc:'a see pic 5',
    },
    {
        src:'/images/gettyimages-184103864-612x612.jpg',
        title:'sky',
        desc:'a see pic 5',
    },
]

let nextbtn = myPage.getElementById('next')
let prevtbtn = document.getElementById('prev')
let myImage = document.getElementsByTagName('img')[0]
let title = document.getElementsByTagName('h2')[0]
let desc = document.getElementsByTagName('h3')[0]
myImage.src = images[0].src

let counter = 1
nextbtn.addEventListener('click',function(){
    if (counter< images.length-1 ){
    counter +=1
    myImage.src=images[counter].src
    title.innerText=images[counter].title
    desc.innerText=images[counter].desc
    console.log(counter)}
})

prevtbtn.addEventListener('click',function(){
    if (counter>1 ){
        counter -=1
        myImage.src=images[counter].src
        title.innerText=images[counter].title
        desc.innerText=images[counter].desc
        console.log(counter)}
})



