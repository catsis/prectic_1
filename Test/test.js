var hello = function(){
    console.log("Hello!!")
}

hello()

function hello2(n){
    for (var i = 1; i <= n; i++){
        if (!(i%2))continue
            console.log("Hello2!!", i)
    }
}

hello2(20)

//hello()