
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
 
    let leadlist=""
    for(let i=0;i<myLeads.length;i++){
        
        //using template string to create clickable list item
        
          leadlist += `
            <li>
                <a href="${myLeads[i]}" target="_blank" rel="noopener noreferrer">
                    ${myLeads[i]}
                </a>
            </li>`
            
    }
    leadsEl.innerHTML=leadlist
   console.log(myLeads)  //to check in the console
}
  

