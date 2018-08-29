//everything for submit button//

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


//storing task and description in array
newArray = [task, description];

var taskArray = [];
var descriptionArray = [];

//creating variables task and description in order to save user's input, we use getElementById and get from input field
var task = document.getElementById("task").value;
var description = document.getElementById("description").value;

//adding new input into task array. 
function addTask(task) {
    taskArray.push(task);
    console.log("Tasks: " + taskArray.join(", "));
}

//adding new input into description array
function addDescription(description) {
    descriptionArray.push(description);
    console.log("Description: " + descriptionArray.join(", "));
}