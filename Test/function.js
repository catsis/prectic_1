/*
function no(min, max){
    var result = [ ]
    for (var i = min; i <= max; i++){
        result.push(i)
    }
    return result
}

console.log(no(5, 10))
*/

function num1_100(n){
    for (var i = 1; i <= n; i++)
    even_num(i)
}

function even_num(i){
    if ( i % 2 ){
        console.log(i)
    }
}


num1_100(20)
