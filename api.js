const loadData=(url)=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>display(data))

}

const display=(data)=>{
// console.log(data.results);
const row=document.getElementById('row');
data.results.forEach(element => {

    // console.log(element.name.title +" "+element.name.first);
    // console.log(element);
    const obj=JSON.stringify(element);
    // console.log("obj: " + obj);
    const div=document.createElement('div');
    div.classList.add('col');

    div.innerHTML=`
    
    <div >
    <div class="card border">
        <img src="${element.picture.large}" alt="" class="img-fluid w-25 h-25 mx-auto py-2 rounded-circle">
        <div class="card-body px-3 shadow">
            <div class=" mx-auto" style="width:89%;">
            <h5 class="fw-bold">Name : <span class="text-danger">
            ${element.name.title} ${element.name.first.slice(0,5)} ${element.name.first.slice(0,5)}
            </span>
            </h5>

            <h5>Country : ${element.location.country}</h5>
            <h5>Gender :${element.gender}</h5>
            <h5>Cell : ${element.cell}</h5>

            <button onclick='detailsButton(${obj})' type="button" class="btn btn-primary w-75 d-block mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Details
            </button>

            </div>
        </div>
    </div>
    </div>
    `
    row.appendChild(div);
});
}

const detailsButton =(obj)=>{
   const ModalBody=document.getElementById('modal-bodys');
console.log("Btn-details",obj)
   ModalBody.innerHTML = `
    
   <div class="card">
   <img src="${obj.picture.large}" alt="" class="img-fluid w-25 h-25 mx-auto py-2 rounded-circle">
   <div class="card-body">
     <h5>Postcode : ${obj.location.postcode}</h5>
     <h5 class="my-1 d-flex justify-content-around">
       <span>DOB :${obj.dob.date}</span>
       <span>AGE :${obj.dob.age} </span>
     </h5>
     <h5 class="my-2">Username : ${obj.login.username}</h5>
     <h5>ID : ${obj.id.value}</h5> </h5>
   </div>
  </div>
   
   `
}

// document.getElementById("click-btn").addEventListener("click", function(e) {
//    loadData('https://randomuser.me/api/?results=200');
// });

window.onload = ()=>{
    loadData('https://randomuser.me/api/?results=21');
    // loadData('https://randomuser.me/api/?gender=male');
}