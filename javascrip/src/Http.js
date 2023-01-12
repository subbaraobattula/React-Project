let users=[]
const API_END_POINT="https://jsonplaceholder.typicode.com/";
 initialize();
function initialize()
{
    getUser();
}
function user(title,isComplete)
{
this.name=Date.now();
this.username=username;
this.email=email;
this.address=address;
this.company=company;
}

async function getUser() 
{
  const Response=await fetch(API_END_POINT +"users").then(res=>res.json());
  console.log(Response);
  users=Response;
  renderGrid();
  }
  function renderGrid()
  {
      for(const user of users)
      {
          let tr=document.createElement("tr")
          let tdname=document.createElement("td");
          let tdusername=document.createElement("td");
          let tdemail=document.createElement("td");
          let tdaddress=document.createElement("td");
          let tdcompany=document.createElement("td");

           tdname.innerHTML=user.name;
           tdusername.innerHTML=user.username;
           tdemail.innerHTML=user.email;
           tdaddress.innerHTML=user.address.city;
           tdcompany.innerHTML=user.company.name;

           tr.appendChild(tdname);
           tr.appendChild(tdusername);
           tr.appendChild(tdemail);
           tr.appendChild(tdaddress);
           tr.appendChild(tdcompany);
         document.getElementsByTagName("tbody")[0].appendChild(tr);
        
        }
         
  }