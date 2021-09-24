
var student_A_score = [88 ,90 ,75 ,65]

var student_A = 
{
  name: 'Belle',
  score: [88 ,90 ,75 ,65],
  address: 'taichung city',
  phone: '123456789'
}

var student_B = 
{
  name: 'Alen',
  score: 90,
  address: 'taipei city',
  phone: '987654321'
}

var key = 'name'
var key1 = 'score'
var key2 = 'address'
var key3 = 'phone'

console.log(student_A.name)
console.log(student_B.name)


console.log('name:' ,student_A[key])
console.log('score:' ,student_A.score)
console.log('address:' ,student_A[key2])
console.log('phone:' ,student_A[key3])