//^1.1
function cArea(){
    let radius
    let radVal = new RegExp(/^([1-9]\d*(\.\d*)?|\.\d+)$/)
    while(!(radVal.test(radius = prompt('Enter the radius to calculate the area:-')))){
        alert(`please enter numbers only '${radius}' is not a number`)
    }
    radius = parseFloat(radius)
    alert(`Area is "${(Math.PI*(radius*radius))}" cm2`)

}
//^1.2
function sqRt(){}
//^1.3
function cos(){}

//^1.4
function tips(){
    arr = ['Passing arguments as objects',
            'Using generators to create sequential IDs',
            'Don\'t Be Afraid To Practice',
            'Connect With A Mentor',
            'Understand Every Line Of Your Code',
            'Always Have A Reference Guide Handy'
        ]
    randint = Math.floor(Math.random()*(arr.length))
    alert(arr[randint])
    // console.log(randint)
    // console.log(Math.random()*7)
}

//^1.5
function oBs(){
    students = [
        {
            name:'mohamed',
            degree:60,
        },
        {
            name:'ali',
            degree:70,
        },
        {
            name:'omer',
            degree:80,
        },
        {
            name:'ahmed',
            degree:92,
        },
        {
            name:'mona',
            degree:95,
        },
        {
            name:'sara',
            degree:87,
        },
        {
            name:'noor',
            degree:90,
        },
        {
            name:'hoda',
            degree:55,
        },
        {
            name:'elsayed',
            degree:70,
        },
        {
            name:'emad',
            degree:50,
        },
        {
            name:'emad',
            degree:40,
        },
        

    ]
    let student_90 = students.find((a)=> a.degree>=90&&a.degree<=100)//a
    console.log(`${student_90.name} got ${student_90.degree}`)
    let students_60 = students.filter((a)=> a.degree<60)//b
    console.log(students_60)

}

oBs()