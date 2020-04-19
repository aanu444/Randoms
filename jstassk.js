const replace=function(num){
let result=[];
let i;
for(i=0; i <= num; i++){
    result.push(i);
}
for(i=0; i <= result.length; i++){
    if(i%2===0 && i%3===0 && i%5===0){
        result[i]="yu-gi-oh";
    }else if(i%2===0 && i%3===0){
        result[i]="yu-gi";
    }else if(i%2===0 && i%5===0){
        result[i]="yu-oh";
    }else if(i%3===0 && i%5===0){
        result[i]="gi-oh";
    }else if(i%2===0){
        result[i]="yu";
    }else if(i%3===0){
        result[i]="gi";
    }else if(i%5===0){
        result[i]="oh";
    }
}
console.log(result);
}


replace(100);