const fvrtmovie = "avengers";
let yourguess = prompt("Enter your movie:");
while((yourguess!=fvrtmovie)&&(yourguess!="quit")){  
    yourguess = prompt("wrong. enter again");
}

if(yourguess==fvrtmovie){
    console.log("you are right");
}  else { 
    console.log("you quit");
}