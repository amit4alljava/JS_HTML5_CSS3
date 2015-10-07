window.addEventListener("load",init);
function init(){
    loadTask();
    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("save").addEventListener("click",saveTask);
}

function addTask(){
    var taskName = document.getElementById("taskName");

    var taskDesc = document.getElementById("taskDesc");
   if(taskName){
       taskName = taskName.value;
       if(taskName){
        taskDesc = taskDesc.value;
           var ul = document.getElementById("taskUL");
           var li = document.createElement("li");
           li.innerHTML=taskName+ " "+taskDesc;
           ul.appendChild(li);
           li.addEventListener("click",toogleTask);
           taskOperations.addTask(taskName,taskDesc);
       }
   }
   /* if(typeof taskName!=="undefined")
    if(taskName != null){
        taskName = taskName.value;
        if(taskName.length>0){

        }
    }*/
}

function toogleTask(evt){
    evt.srcElement.classList.toggle("completed");
}

function saveTask(){
    var jsonString = JSON.stringify(taskOperations.taskList);
    if(window.localStorage){
        localStorage.tasks = jsonString;
        alert("Data Store....");
    }
}

function loadTask(){
    if(localStorage.tasks){
        taskOperations.taskList = JSON.parse(localStorage.tasks);
        var ul = document.getElementById("taskUL");
        taskOperations.taskList.forEach(function(taskObject,index){
              var li = document.createElement("li");
             li.innerHTML = taskObject.name + " "+taskObject.desc;
            ul.appendChild(li);
            li.addEventListener("click",toogleTask);
        });
    }
}