
const monsters = document.getElementById("monsters");
const createBtn = document.getElementById("create");
const form1 = document.getElementById("forms");
const monsters2=document.getElementById('monsters2')
// to display the first 50 monsters

fetch("https://monsters-chi.vercel.app/monsters")
  .then((res) => res.json())
  .then((data) => {
    
    data.forEach((data) => {
      const list = document.createElement("li");
      list.innerHTML = `
    <h2 id="name"> Name: ${data.name}</h2>
<h2 id="age">Age:${data.age}</h2>
<h4 id="description">description:${data.description}</h4>`;

      monsters.appendChild(list);
    });
  });
// get form data
createBtn.addEventListener("click", () => {
    
const formData={
    name:document.getElementById('mon').value,
    age:document.getElementById('age').value,
    description:document.getElementById('describe').value
}
fetch('https://monsters-chi.vercel.app/monsters',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
})
.then(res=>res.json())
.then(FormData=>
monsters.appendChild(formData))


})