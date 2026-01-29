let taskToEdit = null;

document.getElementById("addBtn").onclick = function () {
    let input = document.getElementById("taskInput");
    if (input.value === "") { return };
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
    };
    let span = document.createElement("span");
    span.innerText = input.value;
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        taskToEdit = span;
        document.getElementById("editInput").value = span.innerText;
        document.getElementById("editModal").style.display = "flex";
    }
    editBtn.style.padding="7px";
    editBtn.style.marginRight="2px";
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.padding="7px";
    delBtn.style.marginLeft="2px";
    delBtn.onclick = function () { li.remove(); }
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

document.getElementById("cancelBtn").onclick = function () {
    document.getElementById("editModal").style.display = "none";
}
 
document.getElementById("saveBtn").onclick = function () {
    if (taskToEdit) {
        taskToEdit.innerText = document.getElementById("editInput").value;
        document.getElementById("editModal").style.display = "none";
    }
}

