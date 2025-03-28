document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = taskInput.value; // Add task text
            taskList.appendChild(li);
            taskInput.value = ''; // Clear input
            console.log("Task added!"); // Check browser console (F12)
        }
    });
});