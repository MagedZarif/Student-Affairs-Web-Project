function search()
                {
                    const message = document.getElementById("error");
                    let name = document.getElementById("search-box1").value;
                    try
                    {
                        if(name=="")throw "Enter Student Name";
                        if(!isNaN(name))throw "Error";
                        if(isNaN(name))throw "";
                    }
                    catch(err)
                    {
                        message.innerHTML = err;
                    }
                    var Table =document.getElementById("student-status");
                    var Title =document.getElementById("result");
                    var B_search =document.getElementById("search-button");
                    var B_back =document.getElementById("back-button");
                    Title.style.display="block";
                    Table.style.display="block";
                    B_search.style.display="none";
                    B_back.style.display="block";
                    B_back.style.textAlign="center";
                }
                function goBack()
                {
                    document.getElementById("error").innerHTML="";
                    var Table =document.getElementById("student-status");
                    var Title =document.getElementById("result");
                    var B_search =document.getElementById("search-button");
                    var B_back =document.getElementById("back-button");
                    var Empty=document.getElementById("search-box1");
                    Title.style.display="none";
                    Table.style.display="none";
                    B_search.style.display="block";
                    B_back.style.display="none";
                    Empty.value="";
                }