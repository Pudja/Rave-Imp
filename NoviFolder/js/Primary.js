
fetch('Html/index2.html')
.then(response => response.text())
.then(data => front = data);

fetch('Html/_Layout.html')
.then(response => response.text())
.then(data => end = data);

// var name = prompt("Hello Stranger. Do you have a name?");

function NameCheck(name){
    if(name === "null"){
        return console.log("Are you ashamed of your name?");
        }else if(name === "no"){
            return console.log("Why wont you tell me your name?")
        }else{
        return console.log("Hello "+ name + ". Are you here for the music or for the taste?");
        }
    }
    NameCheck(name);

    CHANGE = function(){
        document.getElementById("content").innerHTML = " " ;
        document.getElementById("content").innerHTML = front ;
        };
    
    EGNAHCE = function(){
        document.getElementById("content").innerHTML = " " ;
        document.getElementById("content").innerHTML = end ;
        }