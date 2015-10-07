/**
 * Created by arnav on 10/7/2015.
 */
window.addEventListener("load",init);
function init(){
    loadJSON();
    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("save").addEventListener("click",saveTask);
}

function addTask(){
  var taskName = document.getElementById("taskName");
    if(taskName){
        taskName = taskName.value;
        if(taskName){
            var taskDesc = document.getElementById("taskDesc").value;
            var ul = document.getElementById("taskul");
            var li = document.createElement("li");
            li.innerHTML = taskName+ " "+taskDesc;
            li.addEventListener("click",toogleTask);
            ul.appendChild(li);
            taskOperations.addTask(taskName,taskDesc);
        }
    }

    /*if(typeof taskName!=="undefined"){
        taskName = taskName.value;
        if(taskName.length!=0)
    }*/

}

function toogleTask(evt){
    evt.srcElement.classList.toggle("completed");
}

function saveTask(){
    if(window.localStorage){
        localStorage.taskapp = JSON.stringify(taskOperations.taskList);
        alert("Data Store...");
    }
}

function loadJSON(){
    if(window.localStorage){
        if(window.localStorage.taskapp){
            taskOperations.taskList = JSON.parse(localStorage.taskapp);
            var ul = document.getElementById("taskul");
            taskOperations.taskList.forEach(function(taskObject,index){
               var li = document.createElement("li");
                li.innerHTML = taskObject.name+ " "+taskObject.desc;
                li.addEventListener("click",toogleTask);
                ul.appendChild(li);
            });
        }

    }
}

