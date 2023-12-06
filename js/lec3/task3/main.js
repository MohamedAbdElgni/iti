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
// cArea()
//^1.2
function sqRt(){
    let num
    let numVal = new RegExp(/^([1-9]\d*(\.\d*)?|\.\d+)$/)
    while(!(numVal.test(num = prompt('Enter number to calculate the square root:-')))){
        alert(`please enter numbers only '${num}' is not a number`)
    }
    num = parseFloat(num)
    alert(`square root of ${num} is ---> "${Math.sqrt(num)}" `)

}
// sqRt()

//^1.3
function cos(){
    let num
    let numVal = new RegExp(/^([1-9]\d*(\.\d*)?|\.\d+)$/)
    while(!(numVal.test(num = prompt('Enter degree to calculate the cos:-')))){
        alert(`please enter numbers only '${num}' is not a number`)
    }
    num = Number(num)
    // console.log((((Math.PI * num) / 180)).toFixed(10))
    // console.log((((Math.PI * num) / 180)))
    document.write(`cos of  ${num}&#176 is ---> ${(Math.cos(((Math.PI * num) / 180)).toFixed(4))}`)
}
// cos()

//^1.4
function tips(){
    arr = ['Passing arguments as objects',
            'Using generators to create sequential IDs',
            'Don\'t Be Afraid To Practice',
            'Connect With A Mentor',
            'Understand Every Line Of Your Code',
            'Always Have A Reference Guide Handy',
            'JS don\'t have capitalize method.. what a joke!!!',
            'JS has concept called hoisting !!!'
        ]
    randint = Math.floor(Math.random()*(arr.length))
    alert(arr[randint])
    // console.log(randint)
    // console.log(Math.random()*7)
}
// tips()

//^1.5
function oBs(){
    let students = [
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
            name:'emad ahmed',
            degree:40,
        },
        

    ]
    console.log(students)
    let student_90 = students.find((a)=> a.degree>=90&&a.degree<=100)//*a
    console.log(`${student_90.name} got ${student_90.degree}`)

    let students_60 = students.filter((a)=> a.degree<60)//*b
    console.log(students_60 );

    students.push({name:'nader',degree:77});//*c
    console.log('----------for in-----------------','color:white')
    for(student in students){
        console.log("%cstudent name --> "+students[student].name + " Degree --> " +students[student].degree ,'color:yellow')
    }//*c
    
    students.pop(); //*d
    console.log('%c----------for of-------------','color:white')
    for(let i of students){
        console.log("%cstudent name --> "+i.name + " Degree --> " +i.degree ,'color:yellow')
    }

    console.log('%c---------sort deg--------------','color:white')
    // console.log(students.sort(function(a,b){
    //     return b.degree - a.degree;
    // }));
    console.log('%c----------sort name-------------','color:white')

    console.log(students.sort(function(a,b){
        if (a.name.charAt(0).toLowerCase()<b.name.charAt(0).toLowerCase()
        ) return -1;
        if (a.name.charAt(0).toLowerCase()>b.name.charAt(0).toLowerCase()
        )return 1;
        return 0;
    }))
    

    // students.splice(2,0,{ name: 'hossam', degree: 91 },{ name: 'dina ahmed', degree: 88 })//*f
    // students.splice(3,1)//*f
}
oBs()

//^6

function birth(){
    let ubirth 
    let valArr

    while(true){
        ubirth = prompt('enter the date:-').split('-')
        if(ubirth){
            let bd = parseInt(ubirth[0])
            let bm = parseInt(ubirth[1])
            let by = parseInt(ubirth[2])
            valArr = [(bd<32&&bd!=0),(bm<13&&bm!=0),(by<2023&&by!=0 && by>1800)]
            if(valArr.every((a)=>a===true)){
                let date = new Date(`${by}-${bm}-${bd}`)

                console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
                break;
            }else{
                alert('invalid date ' + ubirth.join('-'))
                alert('please Enter a valid date dd-mm-yyyy')
            }
        }
    }
}
// birth()
