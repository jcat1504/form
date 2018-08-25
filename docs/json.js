function submitForm() {
    var task = myForm.task.value;
    var desc = myForm.description.value;
    var FormData = {
        task: task,
        description: desc
    };



    var arrayJSON = localStorage.getItem("formJSON") || "[]";
    var taskArray = JSON.parse(arrayJSON);
    taskArray.push(FormData);
    localStorage.setItem("formJSON", JSON.stringify(taskArray));


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
    taskArray.push([task]);

    console.log("Tasks: " + taskArray.join(",  "));
    localStorage.setItem("formJSON", JSON.stringify(taskArray, null));

}

function addDescription(description) {
    descriptionArray.push([description]);

    console.log("Description: " + descriptionArray.join(", "));
    localStorage.setItem("formJSON", JSON.stringify(descriptionArray, null));
};