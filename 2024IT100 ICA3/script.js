// Contact Page Function
function sendMessage() {
    alert("Message sent successfully!");

    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactPhone").value = "";
    document.getElementById("contactMessage").value = "";
}

/// Report Lost Item Function
function saveItem() {

    let item = document.getElementById("itemName").value;
    let location = document.getElementById("locationLost").value;
    let contactPhone = document.getElementById("contactPhone").value;
    let date = document.getElementById("dateLost").value;
    let description = document.getElementById("description").value;

    if (
        item.trim() === "" ||
        location.trim() === "" ||
        contactPhone.trim() === "" ||
        description.trim() === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    alert(
        "Report Submitted Successfully!\n\n (Please have the proof of ownership)\n\n" +
        "Item: " + item +
        "\nLocation: " + location +
        "\nContact Number: " + contactPhone +
        "\nDate: " + (date || "Not Provided") +
        "\nDescription: " + description
    );

    // Clear form fields
    document.getElementById("itemName").value = "";
    document.getElementById("locationLost").value = "";
    document.getElementById("contactPhone").value = "";
    document.getElementById("dateLost").value = "";
    document.getElementById("description").value = "";
}