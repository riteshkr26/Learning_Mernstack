let count = 10;
let interval = setInterval(function (){
    if(count >=0){
        count --;
        console.log(count);
    }else clearInterval(interval);
}, 1000);