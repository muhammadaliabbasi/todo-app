$(document).ready(function() {
    let taskToEdit = null;
    const editModal = new bootstrap.Modal($('#editModal')[0]);

    // Add Task
    $('#addBtn').click(function() {
        let task = $('#taskInput').val().trim();
        if (task === "") return;

        let li = $('<li class="list-group-item d-flex align-items-center justify-content-between"></li>');
        let checkbox = $('<input type="checkbox" class="form-check-input me-2">');
        let span = $('<span class="flex-grow-1"></span>').text(task);

        // Checkbox toggle completed
        checkbox.change(function() {
            span.toggleClass('completed');
        });

        // Edit button
        let editBtn = $('<button class="btn btn-warning btn-sm me-2">Edit</button>').click(function() {
            taskToEdit = span;
            $('#editInput').val(span.text());
            editModal.show();
        });

        // Delete button
        let delBtn = $('<button class="btn btn-danger btn-sm">Delete</button>').click(function() {
            li.remove();
        });

        li.append(checkbox, span, editBtn, delBtn);
        $('#taskList').append(li);
        $('#taskInput').val('');
    });

    // Save Edited Task
    $('#saveBtn').click(function() {
        if (taskToEdit) {
            let newValue = $('#editInput').val().trim();
            if(newValue !== "") {
                taskToEdit.text(newValue);
            }
            editModal.hide();
        }
    });
});
