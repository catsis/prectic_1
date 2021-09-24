var i = 0

/*
do {
    console.log(i)
    i++
    if(i%2 === 1){
        break
    }
    console.log('i=偶', i)
} while(i <= 20)

console.log('i=', i)
*/

/*
while(i<=30){
    console.log(i)
    i++
}
console.log('i=', i)
*/

var score = [50, 62, 88, 90, 78]
var sum = 0

for(i; i<5; i++){
    console.log(score[i])
    sum += score[i]
}
console.log(sum)
console.log('i=', i)