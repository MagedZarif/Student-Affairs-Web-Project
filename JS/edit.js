let userInput= document.querySelector("[name='name']");
let idInput= document.querySelector("[name='ID']");
let GPAInput= document.querySelector("[name='GPA']");
let statusInput= document.querySelector("[name='Status']");
let levelInput= document.querySelector("[name='level']");
document.forms[0].onsubmit = function(e){
    let userValid=false;
    let Idvalid=false;
    let GPAvalid=false;
    let statusvalid=false;
    let levelvalid=false;
    if(levelInput!=="")
    {
        levelvalid=true;
    }
    if(statusInput.value==="Active"||statusInput.value==="active"||
        statusInput.value==="Inactive"||statusInput.value==="inactive")
    {
        statusvalid=true;
    }
    if(userInput.value!=="")
    {
        userValid=true;
    }
    if(idInput.value!=="")
    {
        Idvalid=true;
    }
    if(GPAInput.value!==""&&GPAInput.value>=0&&GPAInput.value<=4)
    {
        GPAvalid=true;
    }
    if(userValid===false||Idvalid===false||GPAvalid===false||
        statusvalid===false||levelvalid===false)
        {
            if(userValid===false)
            {
                alert("Error: name is incorrect please try again...");
            }
            if(Idvalid===false)
            {
                alert("Error: id is incorrect please try again...");
            }
            if(GPAvalid===false)
            {
                alert("Error: GPA is incorrect please try again...");
            }
            if(levelvalid===false)
            {
                alert("Error: level is incorrect please try again...");
            }
            e.preventDefault();
        }

}
