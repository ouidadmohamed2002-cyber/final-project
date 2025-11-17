var students =[{fullname:'nora',email:'nora@gmail.com',score:30},{fullname:'ahmed',email:'ahmed@gmail.com',score:50}]
let currentID = 0;
//function to add a new student to the array
function addItem(){
   students[students.length]={
    fullname:document.getElementById('fullname').value,
    email:document.getElementById('email').value,
    score:document.getElementById('score').value
};
//function to display all students in the table 
    displayItems()

}
function displayItems() {
   currentID=0;
    document.getElementById('tablebody').innerHTML='';//clear table body
    for(var index=0;index <students.length;index++){
        currentID=currentID+1;
        document.getElementById('tablebody').innerHTML+=
               `<tr>
                        <td>${currentID}</td>
                        <td>${students[index].fullname}</td>
                        <td>${students[index].email}</td>
                        <td>${students[index].score}</td>
                        <td><button onclick='editItem(${index})'>update</button></td>
                        <td><button onclick='DeleteItem(${index})'>delete</button></td>
                    </tr>`

}
}
//function to edit / update student's information
function editItem(index){
    students[index].fullname=prompt('enter your new name')//prompt to update name
    students[index].email=prompt('enter your new email')//prompt to update email
    students[index].score=prompt('enter your new score')//prompt to update score
    displayItems();

}
//function to remove /delete student from the array
function  DeleteItem(index){
    students.splice(index,1);
    displayItems();
}
