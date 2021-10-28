
// var hello = function(){
//     console.log("Hello!!")
// }

// hello()

// function hello2(n){
//     for (var i = 1; i <= n; i++){
//         if (i%2)continue
//             console.log("Hello2!!", i)
//     }
// }

// hello2(20)

function transform(arr, num){
    var result = []
    for (var b = 0; b < arr.length; b++){
        result.push(num(arr[b]))
    }
    return result
}


function LOL(x){
    return x*2
} 

console.log(transform([2, 4, 6, 8], LOL))