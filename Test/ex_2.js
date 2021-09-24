var height = 150 * 0.01
var weight = 80
var bmi = weight / (height**2)

bmi = bmi.toFixed(2)

/*
if (bmi < 18.5){
    console.log(bmi, '體重過輕')
}else if(bmi < 24 && bmi >=18.5){
    console.log(bmi, '正常範圍')
}else if(bmi < 27 && bmi >=24){
    console.log(bmi, '過重')
}else if(bmi <30 && bmi >= 27){
    console.log(bmi, '輕度肥胖')
}else if(bmi <35 && bmi >= 30){
    console.log(bmi, '中度肥胖')
}else if(bmi >= 35){
    console.log(bmi, '重度肥胖')
}
*/

if (bmi < 18.5){
    msg = [bmi, '體重過輕']
}else if(bmi < 24 && bmi >=18.5){
    msg = [bmi, '正常範圍']
}else if(bmi < 27 && bmi >=24){
    msg = [bmi, '過重']
}else if(bmi <30 && bmi >= 27){
    msg = [bmi, '輕度肥胖']
}else if(bmi <35 && bmi >= 30){
    msg = [bmi, '中度肥胖']
}else if(bmi >= 35){
    msg = [bmi, '重度肥胖']
}

console.log(msg[0], msg [1])