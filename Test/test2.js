
function swap(a, b){
    var temp = a
    a = b
    b = temp
}

var num1 = {
    a : 10
}
var num2 = {
    b : 20
}

swap(num1, num2)

console.log(num1, num2)
