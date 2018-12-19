// 1st take away
// functions can be assigned to variables
const sayName = function(name){
    return 'hello ' + name
}

function greetTheUSer(sayName){
    //3rd take away
    // the parameter which is holding the function can be executed from within another function
    console.log(sayName('zaheer'))
}

//2nd take away
// the variable holding a function as its value can be passed as an argument to another function
greetTheUSer(sayName)

function greetCustomer(func){
    //5th key takeaway
    // the declared which has been assigned to the parameter can be invoked from within this function
    console.log(func('sameer'))
}

// 4th take away
// you can declare a inline function in place of arguments, this declared function wil be assigned to the parameter
greetCustomer(function(name){
    return 'welcome to our store ' + name
})
