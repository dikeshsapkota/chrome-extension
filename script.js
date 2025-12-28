
let myLeads=[]
//let and const can declare variables and const cant be reassignec
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const leadsEl=document.getElementById("leads")//cache element
inputBtn.addEventListener("click",function(){
       const lead = inputEl.value.trim() // remove extra spaces

    if (lead === "") {
    
        return // stop execution if input is empty
    }

    console.log("saved")//to check button is working or not
    myLeads.push(inputEl.value)
   inputEl.value=""//to clear the input field after clicking the button
renderLeads()
})

   function renderLeads(){
 
    leadsEl.innerHTML=""
    for(let i=0;i<myLeads.length;i++){
        //create new tag
        const aTag=document.createElement("a")
        aTag.href=myLeads[i]
        aTag.target="_blank"//to open in new tab
        leadsEl.append(aTag)
        //using template string or html in js
        //leadlist+="<li>"+myLeads[i]+"</li>" this is simple way
        //create and append method
        const li=document.createElement("li")
        li.textContent=myLeads[i]
       aTag.append(li)
      
    }
    
   console.log(myLeads)  //to check in the console
}
  

