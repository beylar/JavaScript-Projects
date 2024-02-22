let tasks = [
    {
        title: "React",
        description: "JS- Frontend framework",
        dueDate: new Date("Mar 12 2012 10:00:00 AM"),

    },
    {
        title: "Node",
        description: "JS- Backend Framework",
        dueDate: new Date("Mar 8 2012 08:00:00 AM"),

    },

    {
        title: "Express",
        description: "JS- Backend Framework",
        dueDate: new Date("Feb 20 2012 04:00:00 PM"),

    },
];


//how to display in the same way as those in the array
const addTasks = (title,description,dueDate) => {
    //add a task with due date
    tasks.push(title,description,dueDate);
};
//this data is not being manipulated by displayTasks function
addTasks("Reading","What men think",new Date("Jul 18 2010 06:00:59 AM"));

const displayTasks = () => {
    //display Tasks sorted by their due dates
    //use .sort()
     //function of sorting the values
    tasks.sort(function (a,b) {
        let dateA = a.dueDate;
        let dateB = b.dueDate;
        return dateA - dateB;
    });

    console.log(tasks);
        
}

const updateTasks = () => {
    //using .findIndex to locate which value to update

    const index = tasks.findIndex(obj => {
        return obj.title === 'Express';
    });
    tasks[index].description = "JavaScript Database framework";

    //tasks.push({title:"MongoDB",description: "NoSQL Management System",dueDate: new Date("June 17 2011 09:00:00 PM")})
    console.log(tasks);
};


const removeTasks = () => {
    //users can remove tasks from the task scheduler
    // use .pop()
    tasks.pop(tasks[2]);
    console.log(tasks);
}

//console.log (tasks);
displayTasks();
updateTasks();
removeTasks();

//
