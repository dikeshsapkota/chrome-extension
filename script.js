
let myLeads=[]
//let and const can declare variables and const cant be reassignec
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const leadsEl=document.getElementById("leads")//cache element
inputBtn.addEventListener("click",function(){
   
    console.log("saved")
    myLeads.push(inputEl.value)
    console.log(myLeads)
   rendering();

})
function rendering(){
    let listItems=""
 for(let i=0;i<myLeads.length;i++){
    
listItems+="->"+myLeads[i]+ "\n"
}
leadsEl.textContent=listItems
}