let fleetData=[];
function addFleet(){
    let reg=document.getElementById("reg").ariaValueMax.trim()
    let cat=document.getElementById("category").value
let driver= document.getElementById("driver").value.trim()
let available=document.getElementById("available").value

if(!reg||!cat||!driver){
    alert("all fields are required!")
    return
}
let obj={reg,cat, driver,available};
fleetData.push(obj)
document.getElementById("reg").value="";
document.getElementById("driver").value="";
document.getElementById("category").value="";
document.getElementById("available").value="";
render(fleetData)
}

function render(data){
    let main=document.getElementById("main");
    main.innerHTML="";

    data.forEach((el, index)=>{
        let card=document.createElement("div")
        card.className="card";
        card.innerHTML=`
        <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png" width="50%">
        <h3>${el.reg}</h3>
        <p><b>Category:</b> ${el.cat}</p>
        <p><b>Driver:</b> ${el.driver}</p>
        <p><b>Status:</b> ${el.available}</p>
        <button onclick ="updateDriver(${index})">Update Driver</button>
        <button onclick ="changeAvail(${index})">Change Availability</button>
        <button onclick ="deletevehicle(${index})">delete vehicle</button>
        `;
        main.appendChild(card)
    });
    }
function updateDriver(i){
    let nerDriver=prompt("enter new driver name:")
    if(!newDriver||nerDriver.trim()===""){
        alert("driver name cannot be empty")
        return
    }
    fleetData[i].driver=newDriver
    render(fleetData)
}
function changeAvail(i){
    fleetData[i].available=
    fleetData[i].available==="available" ? "unavailable":"Available";
    render(fleetData)
}
function deletevehicle(i){
    if(confirm("are you sure to delete vehecle?")){
        fleetData.splice(i,1)
        render(fleetData)
    }
}
function applyFilters(){
    let fCat=document.getElementById("filterCat").value;
    let fAvail=document.getElementById("filterAvail").value;
    let filtered=fleetData.filter(item=>{
        return(
            (fCat===""||item.cat===fCat)&&
            (fAvail ===""||item.available===fAvail)
        )
    })
    render(filtered)
}
function clearFilter(){
    document.getElementById("filterCat").value=""
    document.getElementById("filterAvail").value=""
    render(fleetData)
}