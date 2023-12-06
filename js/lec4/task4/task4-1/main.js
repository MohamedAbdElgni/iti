//^1-a


document.body.appendChild(document.createElement('img'))

let myImage = document.getElementsByTagName('img')[0]

myImage.setAttribute('src','/images/marsa4.jpg')

let div = document.getElementsByTagName('div')[0]



document.body.insertBefore(div,myImage)

div.appendChild(myImage)

alert(`div children is ${div.childNodes.length}`)
div.removeChild(myImage)
alert(`div children is after removal ${div.childNodes.length}`)

document.body.appendChild(document.createElement('img'))
myImage = document.getElementsByTagName('img')[0]
myImage.setAttribute('src','/images/marsa4.jpg')







