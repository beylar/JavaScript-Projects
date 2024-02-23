let tasks = [
    {
        title: "React",
        description: "JS- Frontend framework",
        dueDate: new Date("Mar 12 2012 10:00:00 AM"),
        done: false

    },
    {
        title: "Node",
        description: "JS- Backend Framework",
        dueDate: new Date("Mar 8 2012 08:00:00 AM"),
        done: true,

    },

    {
        title: "Express",
        description: "JS- Backend Framework",
        dueDate: new Date("Feb 20 2012 04:00:00 PM"),
        done: false,

    },
];


const addTasks = (title,description,dueDate) => {
    //add a task with due date
    tasks.push(title,description,dueDate);
};

const displayTasks = () => {
    //display Tasks sorted by their due dates
    //use .sort()
     //function of sorting the values
    tasks.sort(function (a,b) {
        let dateA = a.dueDate;
        let dateB = b.dueDate;
        return dateA - dateB;
        
    });
    //display the tasks arrays sorted according to date
    console.log(tasks);
        
}

//this function is used to update a given value of the object in the task array
const updateTasks = (title) => {
    //using .findIndex to locate which value to update

    const index = tasks.findIndex(obj => {
        return obj.title === 'Express';
    });
    tasks[index].description = "JavaScript Database framework";

    //tasks.push({title:"MongoDB",description: "NoSQL Management System",dueDate: new Date("June 17 2011 09:00:00 PM")})
    console.log(tasks);
};


const removeTasks = (title) => {
    //users can remove tasks from the task scheduler
    const indexToRemove = tasks.findIndex(task => tasks.title === title);

        if (indexToRemove !== -1) {
            var removedTask = tasks.splice(indexToRemove, 1)[0];
            console.log(`Task '${removedTask}' removed from the scheduler.`);
         } else {
            console.log(`Task '${title}' not found.`);
         }
};

//console.log (tasks);
//
displayTasks();
updateTasks();
addTasks("Reading","What men think",new Date("Jul 18 2012 06:00:59 AM"));
removeTasks("React");

