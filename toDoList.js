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
    //task entered as object
    const newTask = {
        task : task,
        category : category,
        completed : false,
    };
    //calling newTask function and pushing its object in the array of userTasks
    userTasks.push (newTask);

};
const displayTasksByCategory = () => {
    //creating a function to put together the tasks by category
    const tasksByCategory = {};
    userTasks.forEach(task => {
        const category = task.category;
        if (!tasksByCategory[category]) {
            tasksByCategory[category] = [];
        }
        tasksByCategory[category].push(task);
    });

    console.log('Tasks by Category:');
    for (const category in tasksByCategory) {
        console.log(`Category: ${category}`);
        tasksByCategory[category].forEach(task => {
            console.log(`  ${userTasks.completed ? '[X]' : '[ ]'} ${task.task}`);
        });
    }
     
};

const markTasks = (task) => {
    //using .find to locate the task that is completed
    const completedTask = userTasks.find (item => item.task === task);
    if (completedTask) {
        completedTask.done = true;
        console.log(`Task ${task} marked as completed.`);
    }
};

const removeTasks = (task) => {
    const taskIndex = userTasks.findIndex(item => item.task === task);
    if (taskIndex !== -1) {
        var removedTask = this.userTasks.splice(taskIndex , 1)[0];
        console.log(`Task ${removedTask} is removed for the To Do List`);
    }
    else {
        console.log(`Task ${task} is not found in the To Do List`);
    }
};

addTasks("Mopping","Chores");
displayTasksByCategory();
markTasks('Laundry');
removeTasks("Cooking");
displayTasksByCategory();


