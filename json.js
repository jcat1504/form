function submitForm() {
    var task = myForm.task.value;
    var desc = myForm.description.value;
    var FormData = {
        task: task,
        description: desc
    };


    myJSON = JSON.stringify(FormData);
    localStorage.setItem("formJSON", myJSON);
    text = localStorage.getItem("formJSON");
    obj = JSON.parse(text);

    addTask(task);
    addDescription(desc);
    console.log(FormData);
    return false;
};

newArray = [task, description];

var taskArray = [];
var descriptionArray = [];

var task = document.getElementById("task").value;
var description = document.getElementById("description").value;

function addTask(task) {
    taskArray.push(task);
    console.log("Tasks: " + taskArray.join(", "));
}

function addDescription(description) {
    descriptionArray.push(description);
    console.log("Description: " + descriptionArray.join(", "));
}