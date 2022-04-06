var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["birth"] = document.getElementById("birth").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
    formData["hobby"] = document.getElementById("hobby").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("infoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.birth;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.hobby;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("birth").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("hobby").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("birth").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("hobby").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.birth;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.hobby;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("infoList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    var isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function validation() {
    if (document.getElementById("birth").value == "") {
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }
    else {
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
