//^-------------Lab1------------
var arr = ['Burger', 'Pizza', 'Donuts', 'Pizza', 'Koshary', 'Donuts', 'Seafood', 'Burger']

var myset = new Set(arr)

console.log(myset)

myset.add('pasta')
console.log(myset)

myset.delete('Burger')

console.log(myset)

function rme(x) {

    if (x.size > 2) {
        x.clear()
        console.log('set cleared')
        console.log(x)

    } else {
        console.log('nothing changed' + x)
    }
}

rme(myset)


//^-------------Lab2-------------

class Vehicle {
    static i = 0
    constructor(wheels, speed) {
        Vehicle.i++
        this.wheels = wheels
        this.speed = speed
    }

    static countVeh() {
        return Vehicle.i + ' Objects created from class Vehicle'
    }
}


class Bike extends Vehicle {
    static x = 0
    constructor(wheels, speed) {
        super(wheels = 2, speed = 'fast enough')
        Bike.x++
    }

    static countBike() {
        return Bike.x + ' Objects created from class bike'
    }
}

let veh1 = new Vehicle()
let veh2 = new Vehicle()

let bike1 = new Bike()

console.log(bike1.speed)
console.log(bike1.wheels)

let bike2 = new Bike()

let bike3 = new Bike()
let bike4 = new Bike()

console.log(Vehicle.countVeh())
console.log(Bike.countBike())