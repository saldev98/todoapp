'use strict';

const btnAdd = document.querySelector('#button-addon1');
let userInput = document.querySelector('.form-control');
const deleteEverything = document.getElementById('delete-btn');
const deleteSectionTodo = document.getElementById('delete-section-todo');
const deleteSectionDone = document.getElementById('delete-section-done');
let activities = [];
let btnsArr = [];
let newActivity;
let totalActivities = 0;


const todoSection = document.getElementById('todo-section');

const doneSection = document.getElementById('done-section');

//function to create a button element based on the user input
const addElement = function(inputText){
    //storing all the newly created elements in an array

    //create a button element
    newActivity = document.createElement('button');
    
    // style the button element
    newActivity.classList.add('list-group-item', 'list-group-item-action', 'border', 'border-info', 'mx-0');
    
    // create a text node
    let activityText = document.createTextNode(inputText);
    
    // append the button element to div
    todoSection.appendChild(newActivity);

    // append the text node to the button element
    newActivity.appendChild(activityText);
    
    userInput.value = '';
    
    btnsArr.push(newActivity);

    // index to attach to the btnArr elements
    let index = totalActivities -1;
    
    btnsArr[index].addEventListener('click', function(){
        
        btnsArr[index].classList.toggle('bg-success');
        btnsArr[index].classList.toggle('text-light');
        btnsArr[index].classList.toggle('text-right');
        
        // if the btn has not the class bg-success append to do section
        if(btnsArr[index].classList.contains('bg-success')){
            doneSection.appendChild(btnsArr[index]);
        } else {
            todoSection.appendChild(btnsArr[index]);
        }
    })

    return btnsArr
    
};


btnAdd.addEventListener('click', function(){
    if (userInput.value != ''){// each activity adds 1 to the total activities
    totalActivities ++;

    // on click push the user input activities to the related array
    activities.push(userInput.value);
    
    //run the function 'addElement' to add a new button which contains the last element of the array
    addElement(activities[activities.length - 1]);
    } else {
        alert(`Scrivi un'attività`);
    }
   

});
    
deleteEverything.addEventListener('click', function(){

        if(todoSection.firstChild || doneSection.firstChild) {

            todoSection.removeChild(todoSection.firstChild);
            doneSection.removeChild(doneSection.firstChild);

        }
    

});

deleteSectionTodo.addEventListener('click', function(){
   
    if (todoSection.firstChild) {

        todoSection.removeChild(todoSection.firstChild);

    }

});

deleteSectionDone.addEventListener('click', function(){
   
    if (doneSection.firstChild) {

        doneSection.removeChild(doneSection.firstChild);

    }

})

