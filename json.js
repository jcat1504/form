function submitForm() {
    var FormData = {
        task: myForm.task.value,
        description: myForm.description.value
    };
    
    myJSON = JSON.stringify(FormData);
    localStorage.setItem("formJSON", myJSON);
    text = localStorage.getItem("formJSON");
    obj = JSON.parse(text);

    console.log(FormData);
    return false;
};
