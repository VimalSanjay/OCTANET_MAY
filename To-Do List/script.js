function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input !== "") {
        var li = document.createElement("li");
        li.textContent = input;
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";
    } else {
        alert("Please enter a task!");
    }
}

