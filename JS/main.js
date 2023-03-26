let userInput= document.querySelector("[name='name']");
let idInput= document.querySelector("[name='ID']");
let GPAInput= document.querySelector("[name='GPA']");
let departmentInput= document.querySelector("[name='department']");
let emailInput= document.querySelector("[name='email']");
let phoneInput= document.querySelector("[name='Phone']");
let genderInput= document.querySelector("[name='gender']");
let statusInput= document.querySelector("[name='Status']");
let levelInput= document.querySelector("[name='level']");
document.forms[0].onsubmit = function(e){
    let userValid=false;
    let Idvalid=false;
    let GPAvalid=false;
    let Departmentvalid=false;
    let Emailvalid=false;
    let phonevalid=false;
    let gendervalid=false;
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
    if(genderInput.value==="Male"||genderInput.value==="male"||
        genderInput.value==="Female"||genderInput.value==="female")
    {
        gendervalid=true;
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
    if(departmentInput.value!==""&&levelInput.value>=3)
    {
        Departmentvalid=true;
    }
    if(emailInput.value!=="")
    {
        Emailvalid=true;
    }
    if(phoneInput.value!==""&&phoneInput.value.length===11)
    {
        phonevalid=true;
    }
    if(userValid===false||Idvalid===false||GPAvalid===false||
        Departmentvalid===false||Emailvalid===false||
        phonevalid===false||gendervalid===false||
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
            if(gendervalid===false)
            {
                alert("Error: gender is incorrect please try again...");
            }
            if(levelvalid===false)
            {
                alert("Error: level is incorrect please try again...");
            }
            if(statusvalid===false)
            {
                alert("Error: status is incorrect please try again...");
            }
            if(Departmentvalid===false)
            {
                alert("Error: department is incorrect please try again...");
            }
            if(Emailvalid===false)
            {
                alert("Error: email is incorrect please try again...");
            }
            if(phonevalid===false)
            {
                alert("Error: phone is incorrect please try again...");
            }
            e.preventDefault();
        }

}
