const adoptionList = document.querySelector("#adoption-list");
const form = document.querySelector("#adoption-form");

function renderAdopt(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let email = document.createElement("span");
  let description = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  email.textContent = doc.data().email;
  description.textContent = doc.data().description;

  li.appendChild(name);
  li.appendChild(email);
  li.appendChild(description);

  adoptionList.appendChild(li);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("adoptionlist").add({
    name: form.name.value,
    email: form.email.value,
    description: form.description.value,
  });
  form.name.value = "";
  form.email.value = "";
  form.description.value = "";
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
