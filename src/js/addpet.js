const adoptList = document.querySelector('#adopt-list');
const form = document.querySelector('#adopt-form');


function renderAdopt(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let type = document.createElement('span');
    let cross = document.createElement("div");
    let update = document.createElement("div");


    li.setAttribute('data-id', doc.id);
    let petname = doc.data().name;
    li.setAttribute("petname", petname);
    let petType = doc.data().type;
    li.setAttribute("petType", petType);
    name.textContent = doc.data().name;
    type.textContent = doc.data().type;

    cross.textContent = "X";
    update.textContent = "Ändra";
    var deleteUpdateBtn = document.getElementById("updatePetButton");
    deleteUpdateBtn.style.display ="none";


    li.appendChild(name);
    li.appendChild(type);
    li.appendChild(cross);
    li.appendChild(update).style.right = "60px";

    adoptList.appendChild(li);

    cross.addEventListener("click", (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        db.collection("adopt").doc(id).delete();
    })

    update.addEventListener("click", (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        let petnamnValue = e.target.parentElement.getAttribute("petname");
        form.name.value = petnamnValue;
        let petTypeValue = e.target.parentElement.getAttribute("petType");
        form.type.value = petTypeValue;
        form.petId.value = id;
        var deleteAddBtn = document.getElementById("addPetButton");
        deleteAddBtn.style.display ="none";
        deleteUpdateBtn.style.display = "block";
    })
}

db.collection('adopt').orderBy("type").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderAdopt(doc);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('adopt').add({
        name: form.name.value,
        type: form.type.value,
    });
    form.name.value = '';
    form.type.value = '';
})

function updateFirebase() {
    db.collection("adopt").doc(form.petId.value).update({
        name: form.name.value,
        type: form.type.value
    })
}

function logout() {
    window.location.assign('index.html');
    firebase.auth().signOut();

}

function back() {
    window.location.assign("login.html");
}
function Refresh() {
    window.parent.location = window.parent.location.href;
}