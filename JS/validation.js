let userInput= document.querySelector("[name='level']");
document.forms[0].onsubmit = function(e){
    let userValid=false;
    if(userInput.value!==""&&userInput.value>=3)
    {
        userValid=true;
    }
    if(userValid===false)
    {
        alert("Error:You can choose the department if only level equal 3");
        e.preventDefault();
    }
}

function check() {
    var le = document.getElementById("level").value;

    if (le != 3) {

        alert("Error:You can choose the department if only level equal 3"); 
    }
    
    
    }



