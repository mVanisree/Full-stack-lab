let contacts = [];


// Add Contact
function addContact() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert("Please enter name and phone number");
        return;
    }

    let contact = {
        name: name,
        phone: phone
    };

    contacts.push(contact);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";

    displayContacts();
}


// Display Contacts
function displayContacts() {

    let contactList = document.getElementById("contactList");

    contactList.innerHTML = "";

    contacts.forEach(function(contact, index) {

        contactList.innerHTML += `
            <div class="info">

                <h2>${contact.name}</h2>

                <p>${contact.phone}</p>

                <button onclick="deleteContact(${index})">
                    Delete
                </button>

            </div>
        `;
    });

    document.getElementById("totalContacts").innerText =
        "Total Contacts: " + contacts.length;
}


// Delete Contact
function deleteContact(index) {

    contacts.splice(index, 1);

    displayContacts();
}


// Search Contact
function searchContact() {

    let searchValue = document
        .getElementById("search")
        .value
        .toLowerCase();

    let contactList = document.getElementById("contactList");

    contactList.innerHTML = "";

    contacts.forEach(function(contact, index) {

        if (contact.name.toLowerCase().includes(searchValue)) {

            contactList.innerHTML += `
                <div class="info">

                    <h2>${contact.name}</h2>

                    <p>${contact.phone}</p>

                    <button onclick="deleteContact(${index})">
                        Delete
                    </button>

                </div>
            `;
        }
    });
}


// Search while typing
document
    .getElementById("search")
    .addEventListener("input", searchContact);