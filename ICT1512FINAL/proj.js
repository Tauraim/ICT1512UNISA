/*
Author: Taurai Muzembe
Date: 01/07/2024
filename:proj.js
*/

function validateForm() {
    var idNumber = document.forms["clientForm"]["idNumber"].value;
    var phone = document.forms["clientForm"]["workPhone"].value;
    var cell = document.forms["clientForm"]["cellPhone"].value;
    var email = document.forms["clientForm"]["email"].value;
    var ccNumber = document.forms["clientForm"]["creditCardNumber"].value;
    var cvc = document.forms["clientForm"]["cvc"].value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phonePattern = /^\d{10}$/;
    var idPattern = /^\d{13}$/;
    var ccPattern = /^\d{16}$/;
    var cvcPattern = /^\d{3,4}$/;

    if (!idNumber.match(idPattern)) {
        alert("ID Number must be 13 digits.");
        return false;
    }
    if (!phone.match(phonePattern)) {
        alert("Work Phone must be 10 digits.");
        return false;
    }
    if (!cell.match(phonePattern)) {
        alert("Cellphone Number must be 10 digits.");
        return false;
    }
    if (!email.match(emailPattern)) {
        alert("Invalid email format.");
        return false;
    }
    if (!ccNumber.match(ccPattern)) {
        alert("Credit Card Number must be 16 digits.");
        return false;
    }
    if (!cvc.match(cvcPattern)) {
        alert("CVC must be 3 or 4 digits.");
        return false;
    }
}

function copyAddress() {
    var homeAddress = document.getElementById("homeAddress").value;
    document.getElementById("postalAddress").value = homeAddress;
}
function showData() {
        
    
    sessionStorage.setItem("preferredName", document.getElementById("preferredName").value);
    document.getElementById("fullName").textContent = params.get("fullName");
    document.getElementById("surname").textContent = params.get("surname");
    document.getElementById("idNumber").textContent = params.get("idNumber");
    document.getElementById("workPhone").textContent = params.get("workPhone");
    document.getElementById("cellPhone").textContent = params.get("cellPhone");
    document.getElementById("email").textContent = params.get("email");
    document.getElementById("homeAddress").textContent = params.get("homeAddress");
    document.getElementById("postalAddress").textContent = params.get("postalAddress");
    document.getElementById("heardAbout").textContent = params.get("heardAbout");
    document.getElementById("creditCardName").textContent = params.get("creditCardName");
    document.getElementById("creditCardType").textContent = params.get("creditCardType");
    document.getElementById("creditCardNumber").textContent = params.get("creditCardNumber");
    document.getElementById("expMonth").textContent = params.get("expMonth");
    document.getElementById("expYear").textContent = params.get("expYear");
    document.getElementById("cvc").textContent = params.get("cvc");

    location.href="clientRegistrationForm.html";
}