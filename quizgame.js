"use strict";

function drop1(){
let a=document.getElementById("myDiv1");
if(a.style.display === "none") {
    a.style.display = "none";
}else{
    a.style.display="flex";
}

};

function drop2(){
    let b=document.getElementById("myDiv2");
    if(b.style.display === "none"){
        b.style.display = "none";
    }else{
        b.style.display="flex";
    }
}

function drop3(){
    let c=document.getElementById("myDiv3");
    if(c.style.display === "none"){
        c.style.display = "none";
    }else{
        c.style.display="flex";
    }
}

function drop4(){
    let d=document.getElementById("myDiv4");
    if(d.style.display === "none"){
        d.style.display = "none";
    }else{
        d.style.display="flex";
    }
}

function drop5(){
    let e=document.getElementById("myDiv5");
    if(e.style.display === "none"){
        e.style.display = "none";
    }else{
        e.style.display="flex";
    }
}

function counter(){
    let total=document.querySelectorAll("li");
    console.log(total);
    let arrr=[total[1],total[3],total[6],total[11],total[12]];
    console.log(arrr);

    let count=0;

    for(let j=0; j < arrr.length; j++){
     arrr[j].addEventListener("click", function(){
            count+=1;
            document.getElementById("count").innerHTML=count;
            document.getElementById("result").innerHTML=count;
  
        }, {once:true})

    }
};

 counter();


function options(){
    let li= document.querySelectorAll("li");
    console.log(li);
    let arr=[li[0],li[1],li[2],li[3],li[4],li[5],li[6],li[7],li[8],li[9],li[10],li[11],li[12],li[13],li[14]];
    console.log(arr);
 

for (let i=0; i < arr.length; i++){
    //console.log(i); 
    arr[i].addEventListener("click", function(){
       console.log(arr[i]);

        let elon="Elon Musk";
        let jeff="Jeff Benzos";
        let grim="Grimes";
        let melt1="Meltwater Entrepreneural School of Technology";
        let melt2="Marine Engineering, Science and Technology";
        let melt3="Meltwater Solar Technology";
        let threefive="Over 3.5 billion";
        let threefour="3.4 billion";
        let fourfive="Over 4.5 billion";
        let sixtyfour="5th of July, 1964";
        let eightyfour="5th of July, 1984";
        let ninetyfour="5th of July, 1994";
        let wood="Wood";
        let plastic="Plastic";
        let steel="Steel";


        let txt= arr[i].textContent||arr[i].innerText;
        if(txt.match(elon) || txt.match(melt1) || txt.match(threefive) || txt.match(ninetyfour) || txt.match(wood)){
             arr[i].classList.add("yes");
        }else if(txt.match(jeff) || txt.match(melt2) || txt.match(threefour) || txt.match(sixtyfour) || txt.match(plastic)){
            arr[i].classList.add("no");
        }else if(txt.match(grim) || txt.match(melt3) || txt.match(fourfive) || txt.match(eightyfour) || txt.match(steel)){
            arr[i].classList.add("no");
        }
        
    
        
        }, { once: true });
    };
    
   
    
};

options();


function buttonpress(){
    document.getElementById("btn").addEventListener("click", function(){
        let k=document.getElementById("myDiv6");
        if(k.style.display === "none") {
            k.style.display = "none";
        }else{
            k.style.display="flex";
        }
    })
};
buttonpress();






