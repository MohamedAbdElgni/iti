
//*helper func for task 3 and 4 to handel user input
function get(task){
    //*helper function for task 3 and 4
    let x
    let y
    let z
    switch (task){
        
        case 3:
        x= prompt("Enter the X : ");
        if(!Number(x)){
            console.log("%cPlease enter a valid number for X", 'color: red');
            alert("Please Enter A valid Number for task 3")
            return get(task=3);
        }
        
        else{
            y = prompt("Enter the Y : ");
            
            z = prompt("Enter the Z : ");
            return {x , y , z};

        }

        break;
        case 4:
            x= prompt("Enter the X : ");
            y = prompt("Enter the Y : ");
            z = prompt("Enter the Z : ");
            if(!Number(+x) || !Number(+y) || (z !== 'odd' && z !== 'even' && z!=='no')){
                console.log("%cPlease enter a valid input for X, Y, Z", 'color: red');
                alert("Please Enter A valid Number for task 4");
                return get(task=4);
            }
            
            else {
                return {x , y , z};
            }
    }
}



//^1.1
function bigh(){
    let msg = prompt('Enter your message :-')
    for(let i = 1 ; i < 7 ; i++){
        document.write("<h"+ i + ">" + msg + " --H==>"+ "i" +"</h"+ i + ">" )
    }
}



//^1.2
function task2(){
    let total = 0
    let x
    do{
        x = parseInt(prompt("Enter A Number"));
        if (isNaN(x)|| x===0) {
            console.log("%cYou entered "+ x +" Please enter a valid number.",'color:yellow');
            continue;
        }
        total +=x
        if(total<=100){
            console.log("%cTotal now is --> " + total,'color:green');
        }
        else{
            console.log("%cClosing program Total now is more than 100-->  " +total +,'color:red');
            break;
        }
        
    }while(x !==0 && total<=100);
}


//^1.3
function task3() {
    let { x, y, z } = get(task=3);
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);


    if (x % +y === 0 && x % +z === 0) {
        console.log("%c" + x + " is divisible by " + y + ' and ' + z, "color: green");
    } else if(x % +y === 0 && (x % z !== 0 && y!==NaN) ){
        console.log("%c" + x + " is divisible Only by y--> " + y, "color: yellow");
    }else if(x % +z === 0 && (x % y !== 0 && z!==NaN)){
        console.log("%c" + x + " is divisible Only by z--> " + z, "color: aqua");
    }
    else {
        console.log("%c" + x + " is not divisible by both y--> " + y + ' and z-->' + z, "color: red");
    }
}


//^1.4

function rangeDisplay(){
    let{x, y, z}  = get(task=4);
    x = parseInt(x);
    y = parseInt(y);
    z = z;

    let total = 0;
    if (x < y) {
        console.log("%cPrinting ascending...",'color: red');
        for (let i = x ; i<=y; i++){
            if (z === "no" || (z === "odd" && i % 2 !== 0) || (z === "even" && i % 2 === 0)) {
                    console.log(i);
                    total += i;
            }
        }
    }
    else if (x > y) {
        console.log("%cPrinting descending...",'color: green');
        for (let i = x ; i>=y; i--){
            if (z === "no" || (z === "odd" && i % 2 !== 0) || (z === "even" && i % 2 === 0)) {
                    console.log(i);
                    total += i;
            }
        }
    }
    else{
        alert(x + " is equal to " +y)
        rangeDisplay()
    }
    console.log("Total of numbers between :" + x + ' and '+y+" ---> " + total);
}





//^1.1
// bigh()

//^1.2
// task2()

//^1.3
// task3()

//^1.4

// rangeDisplay()

