const addbutton = document.getElementById('add');
    const root = document.getElementById('root');
    const taskname = document.getElementById('name');
    const taskdesc = document.getElementById('task');

    // Function to create a new task note with delete functionality
    function createnote(name, desc) {
        if (name !== "" && desc !== "") {
            const newnote = document.createElement('div');
            newnote.classList.add("note");

            // Add the task content
            const taskContent = document.createElement('p');
            taskContent.innerText = `Name of task: ${name} \n Description of task: ${desc}`;

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.innerText = "Delete";
            deleteButton.classList.add("delete-btn");

            // Add an event listener to the delete button to remove the task
            deleteButton.addEventListener('click', () => {
                root.removeChild(newnote);
                console.log(`Task ${name} deleted`);
            });

            // Append the task content and delete button to the note
            newnote.appendChild(taskContent);
            newnote.appendChild(deleteButton);

            // Append the note to the root container
            root.appendChild(newnote);
            console.log('Task added');

        } else {
            console.log("The fields are empty");
        }
    }

    // Event listener for the add button to create a new task
    
    addbutton.addEventListener('click', () => {
        createnote(taskname.value, taskdesc.value);
        taskname.value = "";
        taskdesc.value = "";
    });