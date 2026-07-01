let form=document.getElementById("bookForm");

let list=document.getElementById("bookList");

form.addEventListener("submit",function(e){

e.preventDefault();

let title=document.getElementById("title").value;

let author=document.getElementById("author").value;

let category=document.getElementById("category").value;

if(title=="" || author=="" || category==""){

alert("Please fill all fields");

return;

}

let row=document.createElement("tr");

row.innerHTML=`
<td>${title}</td>
<td>${author}</td>
<td>${category}</td>
<td><button class="btn btn-danger btn-sm delete">Delete</button></td>
`;

list.appendChild(row);

form.reset();

});

list.addEventListener("click",function(e){

if(e.target.classList.contains("delete")){

e.target.parentElement.parentElement.remove();

}

});

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let rows=document.querySelectorAll("#bookList tr");

rows.forEach(function(row){

row.style.display=row.innerText.toLowerCase().includes(value)?"":"none";

});

});