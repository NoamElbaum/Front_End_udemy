var fname = prompt("First name: ")
var lname = prompt("Last name: ")
var age = prompt("your age: ")
var height = prompt("your height: ")
var pet = prompt("your pet name: ")

var spy = true

if (fname[0] != lname[0])
    spy = false
else if (age > 30 || age < 20)
    spy = false
else if (height < 170)
    spy = false
else if (pet[pet.length - 1] != 'y')
    spy = false

if (spy)
    console.log("I know you are spying")