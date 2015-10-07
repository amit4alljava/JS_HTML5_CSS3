function Task(name, desc){
    this.name = name;
    this.desc = desc;
}

var taskOperations = {
    taskList :[],
    addTask:function(name,desc){
        var taskObject = new Task(name,desc);
        this.taskList.push(taskObject);
    }
}
