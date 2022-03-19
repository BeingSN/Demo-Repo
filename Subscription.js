//Pass by reference

const obj1 = {
    fname :"Mohammad",
    lname : "Shahmeer",
    age :24
}

const obj2 = {...obj1};
obj2.fname = "ALI"

console.log(obj1);
console.log(obj2);