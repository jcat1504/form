function submitForm() {
    var FormData = {
        task: myForm.task.value,
        description: myForm.description.value
    };

    console.log(FormData);
    return false;
};