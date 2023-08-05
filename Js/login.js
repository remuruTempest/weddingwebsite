var usernameList=[
    {
        username:"corinne",
        password:"madrio",
    },
    {
        username:"neil",
        password:"madrio",
    },

]


var usernamePrompt=prompt("Please Enter your username:");
var passwordPrompt=prompt("Please Enter your password:");

function userVerification(user,pass){

    for(i=0; i < usernameList.length; i++){
        
        if(usernameList[i].username=== user 
            && usernameList[i].password=== pass){
                return true;

        }
    } return false;

}

function logIn(user, pass){
    if(userVerification(user,pass)){
        console.log("You've Login");

    }else{
        alert("incorrect account or password!");
    }

};
logIn(usernamePrompt, passwordPrompt);
