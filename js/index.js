const name=document.getElementById('mon')
const age= document.getElementById('age')
const describe=document.getElementById('describe')
const monsters=document.getElementById('monsters')
const createBtn=document.getElementById('create')
// to display the first 50 monsters

fetch('http://localhost:3000/monsters')
.then(res=>res.json())
.then(data=>{
    data.forEach(data => {
        const list=document.createElement('li')
        list.innerHTML=`
    <h2 id="name"> Name: ${data.name}</h2>
<h2 id="age">Age:${data.age}</h2>
<h4 id="description">description:${data.description}</h4>`

monsters.appendChild(list)
    });
})

function createMonster(params) {
    
}


// createMonster function

