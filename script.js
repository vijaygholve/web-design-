let user=0;
let comp=0;
let choices=document.querySelectorAll(".choice");
let a,b;
let msg=document.querySelector("#msg");
let user1=document.querySelector("#user-score");
let comp1=document.querySelector("#comp-score");


const compchoicefun =()=>{

const allcompchoice=["rock","paper","scissors"];
let rand =Math.floor(Math.random()*3);
return allcompchoice[rand];

}
const playgame=(at)=>{
console.log("attribute is",at);
let compchoice=compchoicefun();
console.log("comp choice is",compchoice);

if(compchoice=="rock" && at=="paper"){
    user++;
    msg.innerHTML="you are win";
}
else if(compchoice=="paper" && at=="paper"){
    
    msg.innerHTML="dwaw";
}

else if(compchoice=="scissors" && at=="paper"){
    comp++;
    msg.innerHTML="computer is  win";
}




else if(compchoice=="paper" && at=="rock"){
    comp++;
    msg.innerHTML="computer is  win";
}

else if(compchoice=="rock" && at=="rock"){
    
    msg.innerHTML="draw";
}

else if(compchoice=="scissors" && at=="rock"){
    user++;
    msg.innerHTML="you are win";
}



else if(compchoice=="paper" && at=="scissors"){
   user++;
    msg.innerHTML="you are  win";
}

else if(compchoice=="scissors" && at=="scissors"){
    
    msg.innerHTML="draw";
}

else if(compchoice=="rock" && at=="scissors"){
   comp++;
    msg.innerHTML="computer is win";
}
user1.innerHTML=user;
comp1.innerHTML=comp;




// compchoice=="rock" && at=="paper"?:comp++;
// compchoice=="paper" && at=="paper"?user++:comp++;

// compchoice=="rock" && at=="paper"?user++:comp++;


}
choices.forEach((c)=>{

c.addEventListener("click",()=>{
console.log(c);
let at=c.getAttribute("id");
playgame(at);

});


});


