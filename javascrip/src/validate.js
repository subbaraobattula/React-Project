function validate ()
{
    var name=document.getElementById("abc").value;
    var email=document.getElementById("Email").value;
    var age=document.getElementById("age").value;
    var phoneno=document.getElementById("phno").value;
    

    if(name==""||email==""||age==""||phoneno=="")
    {
      alert("all required fields"); 
    }
    else
    {
        if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)===false)
        {
          alert("enter valid email");
        }     
        else if(age<0) 
        {
            alert("enter valid age");
        }
        else if(isNaN(phoneno)||phoneno.length<6||phoneno.length>10)
        {
            alert("phone valid phonenumber");

        }
        else
        {
            alert("form submitted");
        }
    }
}
