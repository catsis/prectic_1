var hello = function(){
    console.log("Hello!!")
}

hello()

function hello2(){
    for(var i = 1; i <= 20; i++){
        if(!(i%2))continue
        console.log("Hello2!!", i)
    }
}

hello2()
//hello()