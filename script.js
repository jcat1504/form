var FormData = {
    "box-1": "task",
    "id": "task",
    "box-2": "description",
    "id": "description"
}

function submitForm() {
    var a = document.getElementById("task").value;
    var b = document.getElementById("description").value;

    console.log(a);
    console.log(b);

    return false;
};