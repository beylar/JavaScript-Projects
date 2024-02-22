var userTasks = [
    {
        task: "Laundry",
        category: "Chores",
        done:true,
    },
    {
        task: "Project",
        category: "Work",
        done:false,
    },
    {
        task: "Cooking",
        category: "Chores",
        done:false,
    },
    {
        task: "Reading",
        category: "Hobby",
        done:false,
    }
];


//how to push for it to display like other activities in the userTasks arrays
const addTasks = (task,category) => {
    userTasks.push(task,category);

};
const displayTasks = () => {
    for (let i = 0; i<userTasks.length ; i++){
        console.log(userTasks[i]);
    }
     
};
//proper way to mark the tasks
//how to connect the array 
const markTasks = (task) => {
    const completedTask = tasks.find (item => item.task === task);
    if (completedTask) {
        completedTask.done = true;
        console.log(`Task ${task} marked as completed.`);
    }
};

const removeTasks = (task) => {
    const taskIndex = tasks.findIndex(item => item.task === task);
    if (index !== -1) {
        const removedTask = tasks.splice(index , 1)[0];
        console.log(`Task ${removedTask} is removed for the To Do List`);
    }
    else {
        console.log(`Task ${removedTask} is not found in the To Do List`);
    }
};

addTasks("Mopping","Chores");
displayTasks();
markTasks('Laundry');
removeTasks("Cooking");
displayTasks();


