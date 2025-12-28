
let myLeads=[]
//let and const can declare variables and const cant be reassignec
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const leadsEl=document.getElementById("leads")//cache element
inputBtn.addEventListener("click",function(){
   
    console.log("saved")
    myLeads.push(inputEl.value)
    console.log(myLeads)
renderLeads()
})

   function renderLeads(){
    let leadlist=""
    for(let i=0;i<myLeads.length;i++){
        //using template string or html in js
        leadlist+="<li>"+myLeads[i]+"</li>"
    }
    leadsEl.innerHTML=leadlist
}

